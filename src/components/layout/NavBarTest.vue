<template>

    <Drawer v-model:visible="visible" position="right">
        <template #container="{ closeCallback }">
            <div class="d-flex flex-column h-full overflow-y-auto">

                <div class="d-flex align-items-center justify-content-between px-2 pt-4 mb-4">
                    <span class="d-inline-flex align-items-center gap-2">
                        <img src="../../assets/images/logo.png" alt="logo" height="40">
                        <span class="navBarTitle">Padel Club Pau</span>
                    </span>
                    <span>
                        <Button type="button" @click="closeCallback" icon="pi pi-times" class="me-2" rounded outlined></Button>
                    </span>
                </div>

                <Splitter style="height: 50px" class="mb-2">
                    <SplitterPanel class="d-flex align-items-center justify-content-center">
                        <Button label="Connexion" icon="pi pi-user" as="a" href="/users" />
                    </SplitterPanel>
                    <SplitterPanel class="d-flex align-items-center justify-content-center">
                        <a href="#" class="navBarLink menu h-100 w-100 d-flex align-items-center justify-content-center">Truc <span class="menu pi pi-user ms-2" /></a>
                    </SplitterPanel>
                </Splitter>
                
                <div class="overflow-y-auto">
                    <!-- <PanelMenu :model="items" multiple /> -->
                    <PanelMenu :model="items" multiple>
                        <template #item="{ item }">
                            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                                <a v-ripple :class="item.head ? 'menu':'submenu'" class="navBarLink d-flex align-items-center cursor-pointer px-4 py-2" :href="href" @click="navigate">
                                    <span :class="item.icon" />
                                    <span class="ms-2">{{ item.label }}</span>
                                </a>
                            </router-link>
                            <a v-else v-ripple class="navBarLink menu d-flex align-items-center cursor-pointer px-4 py-2" :href="item.url" :target="item.target">
                                <span :class="item.icon" />
                                <span class="ms-2">{{ item.label }}</span>
                                <span v-if="item.items" class="pi pi-angle-down ms-auto" />
                                <!-- <span v-if="item.items" class="pi pi-sort-down-fill ms-auto" /> -->
                            </a>
                        </template>
                    </PanelMenu>
                </div>
                
            </div>
        </template>
    </Drawer>
    <Button icon="pi pi-bars" @click="visible = !visible" />

</template>

<script setup>

    import { ref } from 'vue';
    import 'primeicons/primeicons.css'
    import { Button } from 'primevue';
    import Avatar from 'primevue/avatar';
    import Drawer from 'primevue/drawer';
    import PanelMenu from 'primevue/panelmenu';
    import Splitter from 'primevue/splitter';
    import SplitterPanel from 'primevue/splitterpanel';

    const visible = ref(false);

    const items = [
        {
            label: 'Accueil',
            icon: 'pi pi-home',
            route: '/home',
            head: true
        },
        {
            label: 'Réservation',
            icon: 'pi pi-calendar',
            route: '/home',
            head: true
        },
        {
            label: 'Evènements',
            icon: 'pi pi-bolt',
            items: [
                {
                    label: 'Programme',
                    icon: 'pi pi-calendar-clock',
                    route: '/reservation',
                    command: () => visible.value = false
                },
                {
                    label: 'Galerie',
                    icon: 'pi pi-image',
                    route: '/galerie',
                    command: () => visible.value = false
                },
                {
                    label: 'Point du mois',
                    icon: 'pi pi-crown',
                    route: '/concours',
                    command: () => visible.value = false
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
                    icon: 'pi pi-wrench',
                    command: () => visible.value = false
                },
                {
                    label: 'sous-lien 2',
                    icon: 'pi pi-comments',
                    command: () => visible.value = false
                },
                {
                    label: 'sous-lien 3',
                    icon: 'pi pi-eye-slash',
                    command: () => visible.value = false
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-send',
            visible: 'true',

        }
    ]

</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');

    @font-face {
        font-family: SolViolette;
        src: url('../../assets/font/Solix-Light.otf');
    }
    
    .navBarTitle {
        font-family: SolViolette;
        font-size: 1.5rem;
    }
    
    .navBarLink {
        color: inherit;
    }
    
    .menu {
        font-size: 1.25rem;
    }
    
    .submenu {
        font-size: 1.1rem;
    }

</style>