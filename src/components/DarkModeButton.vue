<template>

    <Button :label=mode @click="toggleDarkMode()" />

</template>

<script setup>

    import { ref } from 'vue';
    import { Button } from 'primevue';

    const isDarkMode = ref(false);
    const mode = ref('dark');

    function toggleDarkMode() {
        document.documentElement.classList.toggle('my-app-dark');
        isDarkMode.value = !isDarkMode.value;
        mode.value = isDarkMode.value ? 'light' : 'dark';
    }

</script>

<style scoped>



</style>