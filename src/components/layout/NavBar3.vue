<template>

    <Menubar :model="items" class="sticky-top">
        <template #start>
            <a class="navbar-brand" href="/"><img :src=logoClub.src :alt=logoClub.alt></a>
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
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

    <PopupConnection :visible="showPopupConnection" @popup-close="showPopupConnection=false" />

</template>

<script setup>

    import { ref } from 'vue';
    import Menubar from 'primevue/menubar';
    import Avatar from 'primevue/avatar';
    import PopupConnection from "@/components/PopupConnection.vue";

    const logoClub = {
        alt: "logo du club",
        // src: "../../assets/images/logo.png"
        src: "src\assets\images\logo.png"
    }

    const title = "Padel Club Pau";
    const connected = false;
    const showPopupConnection = ref(false);

    const items = [
        {
            label: 'Accueil',
            icon: 'pi pi-home',
            url: '/',
            head: true,
            // command: () => console.log('lien cliqué')
        },
        {
            label: 'Réservation',
            icon: 'pi pi-calendar',
            url: '/reservation',
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
                    url: '/evenements',
                    // command: () => console.log('lien cliqué')
                },
                {
                    label: 'Galerie',
                    // icon: 'pi pi-image',
                    url: '/galerie',
                    // command: () => console.log('lien cliqué')
                },
                {
                    label: 'Point du mois',
                    // icon: 'pi pi-crown',
                    url: '/concours',
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
                    label: 'sous-lien 1',
                    // icon: 'pi pi-wrench',
                    // command: () => console.log('lien cliqué')
                },
                {
                    label: 'sous-lien 2',
                    // icon: 'pi pi-comments',
                    // command: () => console.log('lien cliqué')
                },
                {
                    label: 'sous-lien 3',
                    // icon: 'pi pi-eye-slash',
                    // command: () => console.log('lien cliqué')
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-send',
            visible: 'true',
            url: '/reservation',
            head: true,
            // command: () => console.log('lien cliqué')
        }
    ];

</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');

    @font-face {
        font-family: SolViolette;
        src: url('../../assets/font/Solix-Light.otf');
    }

    

</style>