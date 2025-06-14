<template>

    <Card>
        <template #title>Informations</template>
        <template #content>
            <article v-for="(information, index) in content" class="mt-2 p-2">
                <h6 class="mb-3">{{ information.title }}</h6>
                <p v-for="line in information.content" class="m-0">{{ line }}</p>
                <hr v-if="index != content.length-1">
            </article>
        </template>
    </Card>

</template>

<script setup>

    import Card from 'primevue/card';

    defineProps({
        content: {
            title: Array,
            required: true
        }
    });

</script>

<style scoped>



</style>