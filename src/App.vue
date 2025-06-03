<script setup>
    import Header from './components/layout/Header.vue'
    import NavBar from './components/layout/NavBar.vue'
    import Footer from './components/layout/Footer.vue'
    import { RouterView } from 'vue-router'
</script>

<template>
    <Header />
    <NavBar />
    <RouterView />
    <Footer />
</template>

<style scoped>

</style>