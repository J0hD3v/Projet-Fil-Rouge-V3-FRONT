<template>

    <Button :label="buttonLabel" :icon="buttonIcon" @click="open()" severity="danger" :class="buttonClass" />

    <Dialog v-model:visible="visible" :header="title" :style="{ width: '25rem' }" position="bottom" :modal="true" :draggable="false">
        <span v-if="subTitle" class="text-surface-500 dark:text-surface-400 block mb-4">{{ subTitle }}</span>
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
                :minDate="field.options.dateOptions.min"
                dateFormat="dd/mm/yy"
                @value-change="emits('dateChange', selectedDate)"
            />
            <Select v-if="field.type == 'list'" v-model="selectedElement" :options="field.options.listOptions" placeholder="..." class="w-full md w-50" />
        </div>
        <div class="d-flex justify-end gap-2">
            <Button type="button" label="Annuler" severity="secondary" @click="visible = false;"></Button>
            <Button type="button" label="Valider" @click="visible = false; submit()"></Button>
        </div>
    </Dialog>

</template>

<script setup>

    import { ref, defineEmits } from 'vue';
    import { useToast } from 'primevue';
    import { Button } from 'primevue';
    import { InputText } from 'primevue';
    import Dialog from 'primevue/dialog';
    import Select from 'primevue/select';
    import InputNumber from 'primevue/inputnumber';
    import Checkbox from 'primevue/checkbox';
    import DatePicker from 'primevue/datepicker';

    defineProps({
        buttonLabel: {
            type: String,
            required: true,
            default: "Ouvrir"
        },
        buttonIcon: {
            type: String,
            required: false
        },
        buttonClass: {
            type: String,
            required: false,
            default: ""
        },
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
        }
    });
    
    const emits = defineEmits([
        'dateChange'
    ]);

    const visible = ref(false);
    const selectedDuration = ref('30min');
    const selectedNumber = ref(1);
    const selectedLocation = ref(false);
    const selectedDate = ref();
    const selectedElement = ref();

    function open() {
        visible.value = true;
    }

    function submit() {
        // console.log(selectedDuration.value);
        // console.log(selectedNumber.value);
        // console.log(selectedLocation.value);
        showError();
        showSuccess();
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