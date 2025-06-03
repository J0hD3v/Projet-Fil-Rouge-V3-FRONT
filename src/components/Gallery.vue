<template>

    <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
        <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
        </template>
        <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </template>
    </Galleria>
    
</template>

<script setup>
    
import { ref } from 'vue';
import { Galleria } from 'primevue';

const images = ref([
    {
        itemImageSrc: 'https://www.grapheine.com/wp-content/uploads/2014/10/billet-design-graphisme.jpg',
        thumbnailImageSrc: 'https://picsum.photos/200',
        alt: 'Description 1'
    },
    {
        itemImageSrc: 'https://img.colleconline.com/artefactimg/0d1cbae9dc304862bc7571305f9d041e/32e373ab010f4660b7f3be4abb8d66e6.jpg',
        thumbnailImageSrc: 'https://picsum.photos/200',
        alt: 'Description 2'
    },
    {
        itemImageSrc: 'https://www.museedelabanqueducanada.ca/wp-content/uploads/2016/04/livsrommet_100_front.jpg',
        thumbnailImageSrc: 'https://picsum.photos/200',
        alt: 'Description 3'
    }
]);

const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
    
</script>

<style scoped>

.p-galleria {
    width: 100vw;
}

.galleria-container {
    max-width: 640px;
    margin: 0 auto;
    overflow: hidden;
}

.p-galleria-thumbnail-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 10px 0;
}

.p-galleria-thumbnail-item {
    flex: 0 0 auto;
    margin-right: 10px;
}

.p-galleria-thumbnail-item img {
    width: 100px;
    height: auto;
    object-fit: cover;
}

</style>