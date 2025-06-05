<template>
    <div class="d-flex flex-column align-items-center min-vh-100 mt-5">
        <h1 class="m-4">Home View</h1>






        <Carousel :value="products" :numVisible="1" :numScroll="1" :pt="pt" class="carousel">
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





        <!-- ************ TEST ************ -->


        <Carousel :value="messages" :numVisible="1" :numScroll="1" class="carousel">
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

        
    </div>
</template>

<script setup>

import { ref, onMounted, computed } from "vue";
import { Carousel } from "primevue";
import { ProductService } from "@/service/ProductService";

onMounted(() => {
    ProductService.getProductsSmall().then(
        (data) => (products.value = data.slice(0, 9))
    );

    messages.value = [
        {
            id: '0001',
            message: 'Ceci est un message à afficher.'
        },
        {
            id: '0002',
            message: 'Ceci est un autre message à afficher.'
        }
    ]
})

const products = ref();
const messages = ref();

const pt = computed(() => {
    return {
        item: ({ instance, index }) => {
            // console.log('index', index);
            return {
                class: [''],
            };
        },
    };
});

</script>

<style>

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