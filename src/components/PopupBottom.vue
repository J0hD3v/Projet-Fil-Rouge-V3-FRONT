<template>

    <Dialog v-model:visible="isVisible" :header="title" :style="{ width: '25rem' }" position="bottom" :modal="true" :draggable="false" dismissableMask>
        <span v-if="subTitle" class="text-surface-500 dark:text-surface-400 block mb-4">{{ subTitle }}</span>

        <div v-if="isLoading">
            <div class="d-flex align-items-center justify-content-center my-2">
                <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
            </div>
        </div>
        <div v-else>
            <div v-for="field in formFields" class="d-flex align-items-center gap-4 mb-4">
                <label class="font-semibold  d-flex align-items-center">{{ field.title }}</label>
                <InputText v-if="field.type == 'text'" class="flex-auto" autocomplete="off" />
                <Select v-if="field.type == 'duration'" v-model="selectedDuration" :options="field.options.durationOptions" placeholder="..." class="w-full md w-50" />
                <InputNumber v-if="field.type == 'number'"
                    v-model="selectedNumber"
                    inputId="horizontal-buttons"
                    showButtons buttonLayout="horizontal"
                    :step="field.options.numberOptions.step"
                    :min="field.options.numberOptions.min"
                    :max="field.options.numberOptions.max"
                    fluid
                    >
                    <template #incrementicon>
                        <span class="pi pi-plus" />
                    </template>
                    <template #decrementicon>
                        <span class="pi pi-minus" />
                    </template>
                </InputNumber>
                <Checkbox v-if="field.type == 'checkbox'" v-model="selectedLocation" binary class="d-flex align-items-center" />
                <DatePicker v-if="field.type == 'date'"
                    v-model="selectedDate"
                    showIcon fluid iconDisplay="input"
                    :minDate="field.options.dateOptions.min"
                    dateFormat="dd/mm/yy"
                    @value-change="emits('dateChange', selectedDate)">
                </DatePicker>
                <DatePicker v-if="field.type == 'time'"
                    v-model="selectedTime"
                    :minTime="field.options.dateOptions.min"
                    :maxTime="field.options.dateOptions.max"
                    :stepMinute="field.options.dateOptions.stepMinute"
                    showIcon fluid iconDisplay="input" timeOnly
                    @value-change="onTimeChange">
                    <template #inputicon="slotProps">
                        <i class="pi pi-clock" @click="slotProps.clickCallback" />
                    </template>
                </DatePicker>
                <Select v-if="field.type == 'list'" v-model="selectedElement" :options="field.options.listOptions" placeholder="..." class="w-full md w-50" />
            </div>
            <div class="d-flex justify-end gap-2">
                <Button type="button" label="Annuler" severity="secondary" @click="closeModal()"></Button>
                <Button type="button" label="Valider" @click="submit()"></Button>
            </div>
        </div>
    </Dialog>

</template>

<script setup>

    import { ref, defineEmits, computed } from 'vue';
    import { useToast } from 'primevue';
    import { Button } from 'primevue';
    import { InputText } from 'primevue';
    import Dialog from 'primevue/dialog';
    import Select from 'primevue/select';
    import InputNumber from 'primevue/inputnumber';
    import Checkbox from 'primevue/checkbox';
    import DatePicker from 'primevue/datepicker';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: false
        },
        formFields: {
            type: Array,
            required: true
        },
        visible: {
            type: Boolean,
            required: true,
            default: false
        }
    });
    
    const emits = defineEmits([
        'dateChange',
        'update:visible'
    ]);

    const isVisible = computed({
        get: () => props.visible,
        set: (val) => emits('update:visible', val)
    })

    const selectedDuration = ref('1h');
    const selectedNumber = ref(2);
    const selectedLocation = ref(false);
    const selectedDate = ref(new Date());
    const selectedTime = ref(roundTimeToNextValid());
    const selectedElement = ref();
    const isLoading = ref(false);

    function closeModal() {
        isVisible.value = false;
    }

    function submit() {
        // console.log(selectedDuration.value);
        // console.log(selectedNumber.value);
        // console.log(selectedLocation.value);
        isLoading.value = true;
        try {
            if(Math.random()>0.5) throw new Error('simulationErreur')
            setTimeout(() => {
                isLoading.value = false;
                closeModal();
                showSuccess();
            }, 2000);
            
        } catch (error) {
            setTimeout(() => {
                isLoading.value = false;
                showError();
            }, 2000);
        }
    }

    const toast = useToast();

    const showSuccess = () => {
        toast.add({
            severity: 'success',
            summary: 'Réservation effectuée',
            detail: 'Votre réservation a bien été prise en compte. Merci pour votre argent !',
            life: 4000
        });
    }
    const showError = () => {
        toast.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Une erreur est survenue, merci de réessayer.',
            life: 4000
        });
    }

    function onTimeChange(time) {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const totalMinutes = hours * 60 + minutes;

        const min = 9 * 60;   // 09:00 = 540 min
        const max = 19 * 60;  // 19:00 = 1140 min

        if (totalMinutes < min) {
            // Remettre à l'horaire min
            selectedTime.value = new Date(new Date(time).setHours(9,0));
        } else if (totalMinutes > max) {
            // Remettre à l'horaire max
            selectedTime.value = new Date(new Date(time).setHours(19,0));
        }
    }

    function roundTimeToNextValid() {
        const rounded = new Date();
        const minutes = rounded.getMinutes();
        const remainer = 15 - (minutes % 15);

        if (remainer != 15) {
            rounded.setMinutes(minutes + remainer)
        }

        return rounded
    }

</script>

<style scoped>

    .smallButton {
        min-width: 10rem;
    }
    .largeButton {
        min-width: 100%;
        /* background-color: rgb(255, 169, 169); */
        /* background-color: rgb(135, 211, 236); */
        /* &:hover { background-color: rgb(121, 173, 190) !important } */
        /* &:active { background-color: rgb(110, 152, 167) !important } */
    }

</style>