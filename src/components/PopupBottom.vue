<template>

    <Button :label="buttonLabel" :icon="buttonIcon" @click="open()" severity="secondary" style="min-width: 10rem" />

    <Dialog v-model:visible="visible" :header="title" :style="{ width: '25rem' }" position="bottom" :modal="true" :draggable="false">
        <span v-if="subTitle" class="text-surface-500 dark:text-surface-400 block mb-4">{{ subTitle }}</span>
        <div v-for="field in formFields" class="d-flex items-center gap-4 mb-4">
            <label class="font-semibold  d-flex align-items-center">{{ field.title }}</label>
            <InputText v-if="field.type == 'text'" class="flex-auto" autocomplete="off" />
            <Select v-if="field.type == 'duration'" v-model="selectedDuration" :options="durationOptions" placeholder="Choisir une option" class="w-full md:w-56" />
            <InputNumber v-if="field.type == 'number'" v-model="selectedNumber" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="1" :min="1" :max="4" fluid>
                <template #incrementicon>
                    <span class="pi pi-plus" />
                </template>
                <template #decrementicon>
                    <span class="pi pi-minus" />
                </template>
            </InputNumber>
            <Checkbox v-if="field.type == 'checkbox'" v-model="selectedLocation" binary class="d-flex align-items-center" />
        </div>
        <div class="d-flex justify-end gap-2">
            <Button type="button" label="Annuler" severity="secondary" @click="visible = false"></Button>
            <Button type="button" label="Valider" @click="visible = false; submit()"></Button>
        </div>
    </Dialog>

</template>

<script setup>

    import { ref } from 'vue';
    import { Button } from 'primevue';
    import { InputText } from 'primevue';
    import Dialog from 'primevue/dialog';
    import Select from 'primevue/select';
    import InputNumber from 'primevue/inputnumber';
    import Checkbox from 'primevue/checkbox';

    defineProps({
        buttonLabel: {
            title: Text,
            required: true,
            default: "Ouvrir"
        },
        buttonIcon: {
            title: Text,
            required: false
        },
        title: {
            title: Text,
            required: true
        },
        subTitle: {
            title: Text,
            required: false
        },
        formFields: {
            title: Array,
            required: true
        }
    });

    const visible = ref(false);
    const durationOptions = [
        "30min",
        "1h",
        "2h"
    ];
    const selectedDuration = ref('30min');
    const selectedNumber = ref(1);
    const selectedLocation = ref(false);

    function open() {
        visible.value = true;
    }

    function submit() {
        // console.log(selectedDuration.value);
        // console.log(selectedNumber.value);
        // console.log(selectedLocation.value);
    }

</script>

<style scoped>



</style>