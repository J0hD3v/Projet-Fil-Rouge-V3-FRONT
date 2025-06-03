<script setup>

</script>

<template>

    <section class="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <section class="row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </section>
        <section class="row">
            <button>4</button>
            <button>5</button>
            <button>6</button>
        </section>
        <section class="row">
            <button>7</button>
            <button>8</button>
            <button>9</button>
        </section>
        <section class="row">
            <button>0</button>
        </section>
    </section>

</template>

<style>

    html, body {margin: 0; height: 100%; /* overflow: hidden */}

    .row {
        margin: 1rem 0;

        &>* {
           margin: 0 1rem; 
        }

        &>button {
            /* width: 15vw; */
            /* height: 15vw; */
            width: 100px;
            height: 100px;
            border-radius: 100%;
            border: none;
            background-color: red;
            color: yellow;
            font-family: SolViolette;
            font-size: 4rem;
            font-weight: bold;
    
            &:hover {
                background-color: brown;
            }
    
            &:active {
                background-color: rgb(206, 34, 34);
            }
        }
    }


</style>