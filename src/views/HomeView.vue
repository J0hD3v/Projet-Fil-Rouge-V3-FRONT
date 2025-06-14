<template>
    <div class="d-flex flex-column align-items-center min-vh-100 mt-5">
        <h1 class="m-4">Home View</h1>

        <Carousel :content="products" :circular="true" :showIndicators="true" :showNavigators="true"/>
        <Carousel :content="messages" :isTextOnly="true" :circular="true" :allowAutoplay="true" :autoplayInterval="4000"/>
        
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";
import { ProductService } from "@/service/ProductService";
import Carousel from "@/components/Carousel.vue";

onMounted(() => {
    ProductService.getProductsSmall().then(
        (data) => (products.value = data.slice(0, 9))
    );

    messages.value = [
        {
            id: '0001',
            message: 'Ceci est un message à afficher. (1)'
        },
        {
            id: '0002',
            message: 'Ceci est un autre message à afficher. (2)'
        },
        {
            id: '0003',
            message: 'Ceci est encore un autre message à afficher. (3)'
        }
    ]
})

const products = ref([]);
const messages = ref([]);

</script>


<style scoped>



</style>