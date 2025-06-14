<template>

    <Carousel v-if="isTextOnly" :value="content" :numVisible="1" :numScroll="1" :circular="circular" :allowAutoplay="allowAutoplay" :autoplayInterval="autoplayInterval" :showNavigators="showNavigators" :showIndicators="showIndicators" class="carousel">
        <template #item="slotProps">
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-2">
                <div class="flex justify-between items-center">
                    <div class="mt-0 font-semibold text-xl text-center">
                        <p>{{ slotProps.data.message }}</p>
                    </div>
                </div>
            </div>
        </template>
    </Carousel>


    <Carousel v-else :value="content" :numVisible="1" :numScroll="1" class="carousel" :circular="circular" :allowAutoplay="allowAutoplay" :autoplayInterval="autoplayInterval" :showNavigators="showNavigators" :showIndicators="showIndicators">
        <template #item="slotProps">
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-2">
                <div class="mb-4">
                    <div class="d-flex justify-content-center">
                        <img
                            :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                            :alt="slotProps.data.name"
                            class="w-full rounded"
                        />
                    </div>
                </div>
                <div class="mb-4 font-medium">
                    {{ slotProps.data.name }}
                </div>
                <div class="flex justify-between items-center">
                    <div class="mt-0 font-semibold text-xl">
                    ${{ slotProps.data.price }}
                    </div>
                </div>
            </div>
        </template>
    </Carousel>

</template>


<script setup>

    import { Carousel } from "primevue";

    defineProps({
        isTextOnly: {
            title: Boolean,
            required: false,
            default: false
        },
        circular: {
            title: Boolean,
            required: false
        },
        allowAutoplay: {
            title: Boolean,
            required: false,
            default: false
        },
        autoplayInterval: {
            title: Number,
            required: false
        },
        showNavigators: {
            title: Boolean,
            required: false,
            default: false
        },
        showIndicators: {
            title: Boolean,
            required: false,
            default: false
        },
        content: {
            title: Array,
            required: true
        }
    });

</script>


<style scoped>

    .carousel {
        width: 60vw;
        max-width: 600px;
        & p {
            font-size: 1rem;
            margin: 0;
        }
        & img {
            width: 100%;
        }
    }

</style>