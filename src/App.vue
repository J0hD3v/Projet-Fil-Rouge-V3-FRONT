<script setup>
    import Header from './components/layout/Header.vue'
    import NavBar from './components/layout/NavBar.vue'
    import NavBarMobile from './components/layout/NavBarMobile.vue'
    import Footer from './components/layout/Footer.vue'
    import { RouterView } from 'vue-router'

    import { useWindowSize } from '@vueuse/core'
    import { ref } from 'vue'
    const screenSize = ref(useWindowSize().width.value);
</script>

<template>
    <Header />
    <NavBar v-if="screenSize > 800" />
    <NavBarMobile v-else />
    <RouterView />
    <Footer />
</template>

<style scoped>

</style>