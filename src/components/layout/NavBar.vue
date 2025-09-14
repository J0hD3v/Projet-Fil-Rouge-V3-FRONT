<template>

    <Menubar :model="items" class="sticky-top">
        <template #start>
            <a class="navbar-brand" href="/"><img :src=logoClub.src :alt=logoClub.alt style="height: 75px"></a>
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <section class="d-flex flex-column align-items-center justify-center">
                        <span :class="item.icon" style="font-size: xx-large" />
                        <span>{{ item.label }}</span>
                    </section>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
                </a>
            </router-link>
            <!-- <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" style="font-size: xx-large" />
                <span>{{ item.label }}</span>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
            </a> -->
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <section class="d-flex flex-column align-items-center justify-center">
                    <span :class="item.icon" style="font-size: xx-large" />
                    <span>{{ item.label }}</span>
                </section>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
            </a>
        </template>
        <template #end>
            <div v-if="connected" class="d-flex align-items-center gap-2">
                <a v-ripple href="#" @click="navigate" class="d-flex align-items-center justify-center gap-2 rounded">
                    <span style="color: initial; font-size: 1.25rem;">Coucou</span>
                    <Avatar image="https://thispersondoesnotexist.com/" shape="circle" size="large" />
                </a>
                <a v-ripple href="#" @click="navigate" class="d-flex align-items-center justify-center gap-2 rounded" style="height: -webkit-fill-available">
                    <span style="color: initial; font-size: 1.25rem;">Déconnexion</span>
                    <span class="pi pi-sign-out"></span>
                </a>
            </div>
            <div v-else class="d-flex align-items-center gap-2">
                <a v-ripple href="#" @click="navigate, showPopupConnection=true" class="d-flex align-items-center justify-center gap-2 rounded p-2" style="height: -webkit-fill-available">
                    <span style="color: initial; font-size: 1.25rem;">Connexion</span>
                    <span class="pi pi-sign-in" style="color: initial"></span>
                </a>
            </div>
        </template>
    </Menubar>

    <PopupConnection :visible="showPopupConnection" @popup-close="showPopupConnection=false" @changeToInscription="onChangeToInscription()" />
    <PopupInscription :visible="showPopupInscription" @popup-close="showPopupInscription=false" @changeToConnection="onChangeToConnection()" />

</template>

<script setup>

    import { ref } from 'vue';
    import Menubar from 'primevue/menubar';
    import Avatar from 'primevue/avatar';
    import PopupConnection from "@/components/PopupConnection.vue";
    import PopupInscription from "@/components/PopupInscription.vue";

    import logo from '@/assets/images/logo.png';

    const logoClub = {
        alt: "logo du club",
        // src: "../../assets/images/logo.png"
        src: logo
    }

    const title = "Padel Club Pau";
    const connected = false;
    const showPopupConnection = ref(false);
    const showPopupInscription = ref(false);

    const items = [
        {
            label: 'Accueil',
            icon: 'pi pi-home',
            route: '/',
            head: true,
            // command: () => console.log('lien cliqué')
        },
        {
            label: 'Réservation',
            icon: 'pi pi-calendar',
            route: '/reservation',
            head: true,
            // command: () => console.log('lien cliqué')
        },
        {
            label: 'Evènements',
            icon: 'pi pi-bolt',
            items: [
                {
                    label: 'Programme',
                    // icon: 'pi pi-calendar-clock',
                    route: '/evenements',
                    // command: () => console.log('lien cliqué')
                },
                {
                    label: 'Galerie',
                    // icon: 'pi pi-image',
                    route: '/galerie',
                    // command: () => console.log('lien cliqué')
                },
                {
                    label: 'Point du mois',
                    // icon: 'pi pi-crown',
                    route: '/concours',
                    // command: () => console.log('lien cliqué')
                }
            ]
        },
        {
            label: 'Manager',
            icon: 'pi pi-cog',
            visible: true,
            items: [
                {
                    label: 'Planning',
                    // icon: 'pi pi-wrench',
                    // command: () => console.log('lien cliqué')
                },
                {
                    label: 'Membres',
                    // icon: 'pi pi-comments',
                    // command: () => console.log('lien cliqué')
                },
                {
                    label: 'Communication',
                    // icon: 'pi pi-eye-slash',
                    // command: () => console.log('lien cliqué')
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-send',
            visible: 'true',
            route: '/reservation',
            head: true,
            // command: () => console.log('lien cliqué')
        }
    ];

    function onChangeToConnection() {
        // open Connection popup
        showPopupInscription.value = false;
        showPopupConnection.value = true;
    }

    function onChangeToInscription() {
        // open Inscription popup
        showPopupConnection.value = false;
        showPopupInscription.value = true;
    }

</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');

    @font-face {
        font-family: SolViolette;
        src: url('../../assets/font/Solix-Light.otf');
    }

    

</style>