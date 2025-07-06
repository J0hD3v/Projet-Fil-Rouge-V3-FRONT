<template>

    <div class="d-flex flex-column align-items-center min-vh-100 ">
        <Stepper value="1" linear class="w-75">
            <StepList>
                <Step value="1">Header I</Step>
                <Step value="2">Header II</Step>
                <Step value="3">Header III</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <section class="d-flex flex-column justify-content-center align-items-center mt-4">
                        <div class="form-container">
                            <h2>Connexion</h2>
                            <form action="" method="post" @submit.prevent="connexion()">
                                <div class="form-group">
                                    <label for="name">Nom:</label>
                                    <input v-model="username" type="text" id="name" name="username" placeholder="..." required autocomplete="off" style="color: black;">
                                </div>
                                <div class="form-group">
                                    <label for="password">Mot de passe:</label>
                                    <input v-model="password" type="password" id="password" name="password" placeholder="..." required style="color: black;">
                                </div>
                                <button type="submit" class="submit-btn">Connexion</button>
                            </form>
                        </div>
                        <p>
                            Pas de compte ?
                            <a href="#" class="text-decoration-none">Rejoignez-nous !</a>.
                        </p>
                    </section>
                    <div class="d-flex pt-6umn justify-end">
                        <Button label="Next" icon="pi pi-arrow-right" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <section class="d-flex flex-column justify-content-center align-items-center mt-4">
                        <div class="form-container">
                            <h2>Connexion</h2>
                            <form action="" method="post" @submit.prevent="connexion()">
                                <div class="form-group">
                                    <label for="name">Nom:</label>
                                    <input v-model="username" type="text" id="name" name="username" placeholder="..." required autocomplete="off" style="color: black;">
                                </div>
                                <div class="form-group">
                                    <label for="password">Mot de passe:</label>
                                    <input v-model="password" type="password" id="password" name="password" placeholder="..." required style="color: black;">
                                </div>
                                <button type="submit" class="submit-btn">Connexion</button>
                            </form>
                        </div>
                        <p>
                            Pas de compte ?
                            <a href="#" class="text-decoration-none">Rejoignez-nous !</a>.
                        </p>
                    </section>
                    <div class="d-flex pt-6umn justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <section class="d-flex flex-column justify-content-center align-items-center mt-4">
                        <div class="form-container">
                            <h2>Connexion</h2>
                            <form action="" method="post" @submit.prevent="connexion()">
                                <div class="form-group">
                                    <label for="name">Nom:</label>
                                    <input v-model="username" type="text" id="name" name="username" placeholder="..." required autocomplete="off" style="color: black;">
                                </div>
                                <div class="form-group">
                                    <label for="password">Mot de passe:</label>
                                    <input v-model="password" type="password" id="password" name="password" placeholder="..." required style="color: black;">
                                </div>
                                <button type="submit" class="submit-btn">Connexion</button>
                            </form>
                        </div>
                        <p>
                            Pas de compte ?
                            <a href="#" class="text-decoration-none">Rejoignez-nous !</a>
                        </p>
                    </section>
                    <div class="pt-6">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>

        <section class="d-flex flex-column justify-content-center align-items-center min-vh-100">
            <div class="form-container">
                <h2>Connexion</h2>
                <form action="" method="post" @submit.prevent="connexion()">
                    <div class="form-group">
                        <label for="name">Nom:</label>
                        <input v-model="username" type="text" id="name" name="username" placeholder="Saisissez votre nom" required autocomplete="off" style="color: black;">
                    </div>
                    <div class="form-group">
                        <label for="password">Mot de passe:</label>
                        <input v-model="password" type="password" id="password" name="password" placeholder="Saisissez votre mot de passe" required style="color: black;">
                    </div>
                    <button type="submit" class="submit-btn">Connexion</button>
                </form>
            </div>
            <p>
                Pas de compte ?
                <a href="#" class="text-decoration-none">Rejoignez-nous !</a>
            </p>
        </section>
    </div>

</template>

<script setup>

    import { ref } from 'vue';
    import axios from 'axios';
    import Stepper from 'primevue/stepper';
    import StepList from 'primevue/steplist';
    import Step from 'primevue/step';
    import StepPanels from 'primevue/steppanels';
    import StepPanel from 'primevue/steppanel';
    import Button from 'primevue/button';

    const username = ref('');
    const password = ref('');

    // const connexion = async () => {
    //     const data = {
    //         username: username.value,
    //         password: password.value
    //     };
    //     console.log(data);
    //     axios.post('http://localhost:3000/login', { params: data }).then((res) => {
    //         console.log(res);
    //         console.log(res.data);
    //     });
    // }
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
        } catch (err) {
            console.error('Erreur de connexion', err.response?.data || err);
        }
    }

</script>

<style>


    h2, p {
        text-align: center;
        margin-bottom: 30px;
        color: white;
    }

    .form-container {
        /* width: 300px; */
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
        color: white;
    }

    .form-group input {
        width: 100%;
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    .submit-btn {
        display: block;
        width: 100%;
        padding: 10px;
        background-color: #472dbb;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .submit-btn:hover {
        background-color: #4565a0;
    }

    p {
        margin-top: 15px;
    }

</style>