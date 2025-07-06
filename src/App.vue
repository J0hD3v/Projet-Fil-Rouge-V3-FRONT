<script setup>
    import Header from './components/layout/Header.vue'
    import NavBar from './components/layout/NavBar.vue'
    import NavBarTest from './components/layout/NavBarTest.vue'
    import NavBar3 from './components/layout/NavBar3.vue'
    import Footer from './components/layout/Footer.vue'
    import { RouterView } from 'vue-router'

    import { useWindowSize } from '@vueuse/core'
    import { ref } from 'vue'
    const screenSize = ref(useWindowSize().width.value);
</script>

<template>
    <Header />
    <NavBar3 v-if="screenSize > 800" />
    <NavBarTest v-else />
    <!-- <NavBar /> -->
    <!-- <NavBarTest /> -->
    <RouterView />
    <Footer />
</template>

<style scoped>

</style>