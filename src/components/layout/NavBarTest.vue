<template>

    <Drawer v-model:visible="visible" position="right">
        <template #container="{ closeCallback }">
            <div class="d-flex flex-column h-full">
                <div class="d-flex align-items-center justify-content-between px-6 pt-4 flex-shrink-0">
                    <span class="d-inline-flex align-items-center gap-2">
                        <img src="../../assets/images/logo.png" alt="logo" height="40">
                        <span class="font-semibold text-2xl text-primary">Padel Club Pau</span>
                    </span>
                    <span>
                        <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined></Button>
                    </span>
                </div>
                <div class="overflow-y-auto">
                    <ul class="list-none p-4 m-0">
                        <li>
                            <div
                                v-styleclass="{
                                    selector: '@next',
                                    enterFromClass: 'hidden',
                                    enterActiveClass: 'animate-slidedown',
                                    leaveToClass: 'hidden',
                                    leaveActiveClass: 'animate-slideup'
                                }"
                                class="p-4d-flex-align-items-center justify-content-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple"
                            >
                                <span class="font-medium">FAVORITES</span>
                                <i class="pi pi-chevron-down"></i>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                        <i class="pi pi-home me-2"></i>
                                        <span class="font-medium">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                        <i class="pi pi-bookmark me-2"></i>
                                        <span class="font-medium">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-styleclass="{
                                            selector: '@next',
                                            enterFromClass: 'hidden',
                                            enterActiveClass: 'animate-slidedown',
                                            leaveToClass: 'hidden',
                                            leaveActiveClass: 'animate-slideup'
                                        }"
                                        class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-chart-line me-2"></i>
                                        <span class="font-medium">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto"></i>
                                    </a>
                                    <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                        <li>
                                            <a
                                                v-styleclass="{
                                                    selector: '@next',
                                                    enterFromClass: 'hidden',
                                                    enterActiveClass: 'animate-slidedown',
                                                    leaveToClass: 'hidden',
                                                    leaveActiveClass: 'animate-slideup'
                                                }"
                                                class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-chart-line me-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                                <li>
                                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-table me-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-search me-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-line me-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                        <i class="pi pi-users me-2"></i>
                                        <span class="font-medium">Team</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                        <i class="pi pi-comments me-2"></i>
                                        <span class="font-medium">Messages</span>
                                        <span class="d-inline-flex align-items-center justify-center ml-auto bg-primary text-primary-contrast rounded-full" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                        <i class="pi pi-calendar me-2"></i>
                                        <span class="font-medium">Calendar</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog me-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-none p-4 m-0">
                        <li>
                            <div
                                v-styleclass="{
                                    selector: '@next',
                                    enterFromClass: 'hidden',
                                    enterActiveClass: 'animate-slidedown',
                                    leaveToClass: 'hidden',
                                    leaveActiveClass: 'animate-slideup'
                                }"
                                class="p-4d-flex-align-items-center justify-content-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple"
                            >
                                <span class="font-medium">APPLICATION</span>
                                <i class="pi pi-chevron-down"></i>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                        <i class="pi pi-folder me-2"></i>
                                        <span class="font-medium">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                        <i class="pi pi-chart-bar me-2"></i>
                                        <span class="font-medium">Performance</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex align-items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog me-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
            </div>
        </template>
    </Drawer>
    <Button icon="pi pi-bars" @click="visible = true" />

</template>

<script setup>

    import { ref } from 'vue';
    import 'primeicons/primeicons.css'
    import { Button } from 'primevue';
    import Avatar from 'primevue/avatar';
    import Drawer from 'primevue/drawer';

    const visible = ref(false);
    
    const closeCallback = () => {
        //
    }

</script>

<style scoped>



</style>