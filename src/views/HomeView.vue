<template>
    <div class="d-flex flex-column align-items-center min-vh-100 ">
        <!-- <h1 class="m-4">Home View</h1> -->

        <section class="backgroundImage">
            <Button label="Réserver un terrain" icon="pi pi-calendar" as="a" href="/reservation" raised class="shadowed p-3" />
        </section>

        <!-- <Carousel :content="products" :circular="true" :showIndicators="true" :showNavigators="true"/> -->
        
        <section class="containerTextCarousel d-flex justify-content-center">
            <Carousel :content="messages" :isTextOnly="true" :circular="true" :allowAutoplay="true" :show-navigators="true" :autoplayInterval="5000" />
        </section>
        
        <TextContainer :content="information" class="m-4" />

        <SpeedDial :model="socialMediasItems" direction="up" :style="{ position: 'fixed', left: '1rem', bottom: '0.75rem' }" :buttonProps="{ severity: '', rounded: true }" :tooltipOptions="{ position: 'right' }" />
        <SpeedDial :model="speedDialItems" direction="up" :style="{ position: 'fixed', right: '1rem', bottom: '0.75rem' }" :buttonProps="{ severity: 'info', rounded: true }" :tooltipOptions="{ position: 'left' }" />
        
        <Popup :visible="showPopup" @popup-close="showPopup=false" />
        <Toast />

    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";
import { ProductService } from "@/service/ProductService";
import Carousel from "@/components/Carousel.vue";
import TextContainer from "@/components/TextContainer.vue";
import Popup from "@/components/Popup.vue";
import Button from "primevue/button";
import { SpeedDial } from "primevue";

onMounted(() => {
    ProductService.getProductsSmall().then(
        (data) => (products.value = data.slice(0, 9))
    );

    messages.value = [
        {
            id: '0001',
            message: `Ouverture prochaine du club, restez connectés !`
        },
        {
            id: '0002',
            message: `Tournoi d'inauguration le 14 novembre, inscrivez-vous !`,
            link: 'http://localhost:5173/reservation'
        },
        {
            id: '0003',
            message: `Les cours débutent dès lundi, réservez votre place !`
        }
    ]
})

const speedDialItems = ref([
    {
        label: 'Ouvrir',
        icon: 'pi pi-external-link',
        command: () => {
            showPopup.value = true;
        }
    },
    {
        label: 'Darkmode',
        icon: 'pi pi-lightbulb',
        command: () => {
            document.documentElement.classList.toggle('my-app-dark');
        }
    }
]);

const socialMediasItems = ref([
    {
        label: 'Facebook',
        icon: 'pi pi-facebook bigIcon',
        command: () => {
            console.log('ouvre facebook');
        }
    },
    {
        label: 'Instagram',
        icon: 'pi pi-instagram bigIcon',
        command: () => {
            console.log('ouvre instagram');
        }
    }
])

const showPopup = ref(false);
const products = ref([]);
const messages = ref([]);

const information = [
    {
        title: "A propos de nous :",
        content: [
            `Bienvenue au Padel Club Pau, un lieu dédié aux passionnés de padel, débutants comme confirmés.\n
            Situé dans la périphérie ouest de la ville, notre club propose des installations modernes avec plusieurs terrains intérieurs et extérieurs.
            Nous offrons des cours pour tous les niveaux, des compétitions régulières et un espace convivial pour se détendre après les matchs.
            Que vous souhaitiez progresser, vous défouler ou simplement passer un bon moment entre amis, notre équipe vous accueille toute l'année dans une ambiance chaleureuse.
            Rejoignez notre communauté dynamique et vivez pleinement votre passion du padel !`
        ]
    },
    {
        title: "Horaires d'ouverture :",
        content: [
            "Du Lundi au samedi : de 10h à 19h", "Le dimanche : sur réservation"
        ]
    }
]

</script>


<style scoped>

    .containerTextCarousel {
        background-color: rgb(212, 115, 115);
        width: -webkit-fill-available;
    }

    .backgroundImage {
        background-image: url('../assets/images/background.png');
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 40vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .shadowed {
        box-shadow: 0 0 50px black;
    }

</style>