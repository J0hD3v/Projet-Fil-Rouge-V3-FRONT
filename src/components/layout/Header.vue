<template>

    <header>
        <h1>{{ title }}</h1>
    </header>

</template>

<script setup>

    const title = "Padel Club Pau";

</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');

    @font-face {
        font-family: SolViolette;
        src: url('../../assets/font/Solix-Light.otf');
    }
    
    header {
        /* background-color: var(--vt-c-white-mute); */
        background-color: var(--vt-c-black-mute);
        padding: 2rem 0;
    }

    h1 {
        font-family: SolViolette;
        color: red;
        text-align: center;
        font-weight: bold;
        margin: 0;
    }

    @media (max-width: 992px) {
        header {
            display: none;
        }
    }

</style>