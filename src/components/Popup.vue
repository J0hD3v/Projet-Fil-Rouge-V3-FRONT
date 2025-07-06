<template>

    <section v-show="visible">
        <div class="background">

            <Card class="card">
                <template #header>
                    <img alt="user header" src="../assets/images/background.png" class="w-100 rounded-top" />
                </template>
                <template #title>Advanced Card</template>
                <template #subtitle>Card subtitle</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
                <template #footer>
                    <div class="d-flex gap-4 mt-1">
                        <Button label="Fermer" @click="closePopup()" severity="secondary" outlined class="w-full" />
                        <Button label="Valider" @click="" class="w-full" />
                    </div>
                </template>
            </Card>


        </div>

    </section>

</template>

<script setup>

    import Card from 'primevue/card';
    import { Button } from 'primevue';

    const props = defineProps({
        visible: {
            title: Boolean,
            required: false,
            default: false
        }
    });

    const emit = defineEmits(["popup-close"]);

    function closePopup() {
        emit('popup-close')
    }

</script>

<style scoped>

    .background {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card {
        width: 20vw;
        min-width: 250px;
        min-height: 400px;
    }
    
    @media (max-width: 250px), (max-height: 550px) {
        .card {
            min-width: fit-content;
            min-height: auto;
            height: 50vh;
            overflow: scroll;
        }
    }

</style>