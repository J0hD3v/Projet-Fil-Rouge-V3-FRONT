<template>

    <section v-show="visible">
        <div class="background">

            <Card class="card">
                <!-- <template #header>
                    <img alt="user header" src="../assets/images/background.png" class="w-100 rounded-top" />
                </template> -->
                <template #title>Inscription</template>
                <template #subtitle>
                    <span>Déjà inscrit ? </span>
                    <a @click="changeToConnection()" href="#" class="text-decoration-none">Connexion</a>
                </template>
                <template #content>
                    <section class="d-flex flex-column justify-content-center align-items-center">
                        <div class="form-container">
                            <form action="" method="post" id="inscriptionForm" @submit.prevent="connexion()">
                                <div class="form-group">
                                    <FloatLabel variant="on">
                                        <label for="newUserName">Nom</label>
                                        <InputText v-model="username" type="text" id="newUserName" name="newUsername" required autocomplete="off" style="color: black;" />
                                    </FloatLabel>
                                </div>
                                <div class="form-group">
                                    <FloatLabel variant="on">
                                        <label for="newUserPassword">Mot de passe</label>
                                        <InputText v-model="password" type="password" id="newUserPassword" name="newPassword" required style="color: black;" />
                                    </FloatLabel>
                                </div>
                            </form>
                        </div>
                    </section>
                </template>
                <template #footer>
                    <div class="d-flex gap-4 mt-1">
                        <Button type="reset" name="resetInscriptionForm" label="Annuler" @click="closePopup()" severity="secondary" outlined class="w-full" />
                        <Button type="submit" name="submitInscriptionForm" form="inscriptionForm" label="Inscription" @click="" class="w-full" />
                    </div>
                </template>
            </Card>


        </div>

    </section>

</template>

<script setup>

    import { ref, defineEmits } from 'vue';
    import axios from 'axios';
    import Card from 'primevue/card';
    import InputText from 'primevue/inputtext';
    import FloatLabel from 'primevue/floatlabel';
    import { Button } from 'primevue';
    import { useToast } from 'primevue';

    const toast = useToast();

    const props = defineProps({
        visible: {
            title: Boolean,
            required: false,
            default: false
        }
    });

    const emit = defineEmits([
        "popup-close",
        "changeToConnection"
    ]);

    function closePopup() {
        resetForm();
        emit('popup-close');
    }
    
    function changeToConnection() {
        resetForm();
        emit('changeToConnection');
    }

    function resetForm() {
        username.value = '';
        password.value = '';
    }

    const username = ref('');
    const password = ref('');

    const connexion = async () => {
        const params = new URLSearchParams();
        params.append('username', username.value);
        params.append('password', password.value);

        try {
            const res = await axios.post('http://localhost:3000/login', params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true // Important pour la session (cookie)
            });
            console.log(res.data);
            if (res.data == 'Connexion réussie.') {
                closePopup();
                showSuccess();
            }
            else if (res.data == 'Échec de connexion.') {
                resetForm();
                showWarning();
            }
            else showError();
        } catch (err) {
            console.error('Erreur de connexion', err.response?.data || err);
            showError();
            closePopup();
        }
    };

    const showSuccess = () => {
        toast.add({
            severity: 'success',
            summary: 'Bienvenue',
            detail: 'Bienvenue "prénom" !',
            life: 4000
        });
    };
    const showWarning = () => {
        toast.add({
            severity: 'warn',
            summary: 'Erreur',
            detail: 'Identifiants incorrects.',
            life: 4000
        });
    };
    const showError = () => {
        toast.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Le serveur est temporairement indisponible, merci de patienter et de réessayer.',
            life: 4000
        });
    };

</script>

<style scoped>

    .background {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card {
        /* width: 20vw;
        min-width: 250px;
        min-height: 400px; */
    }
    
    @media (max-width: 250px), (max-height: 550px) {
        .card {
            min-width: fit-content;
            min-height: auto;
            height: 50vh;
            overflow: scroll;
        }
    }



    .form-container {
        margin: 0 auto;
        padding: 20px;
        /* border: 1px solid #ccc; */
        border-radius: 5px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
    }

    .form-group input {
        width: 100%;
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

</style>