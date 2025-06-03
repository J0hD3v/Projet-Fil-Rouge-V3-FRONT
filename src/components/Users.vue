<template>

    <h1>Utilisateurs</h1>

    <section v-for="(user) in users">
        <p>{{ user.pseudo }} - {{ user.email }}</p>
    </section>

    <form action="">
        <label for="name">Pseudo utilisateur</label>
        <br>
        <input type="text" v-model="searchedUserName" name="name" id="name" placeholder="User name">
        <input type="button" value="Search" @click="getUserByName()">
    </form>

    <section v-if="user.pseudo">
        <p>
            Pseudo : {{ user.pseudo }}
        </p>
        <p>
            Email  : {{ user.email }}
        </p>
    </section>
    <section v-else>
        Aucun utilisateur
    </section>

</template>

<script>

    import axios from 'axios';

    export default {
        data() {
            return {
                // component data
                url_api_users: 'http://localhost:3000/users',
                url_api_userbyname: 'http://localhost:3000/userbyname',
                users: [],
                user: {},
                searchedUserName: ''
            }
        },

        created() {
            this.getUsers();
        },

        methods: {
            // component methods
            async getUsers() {
                console.log('loading');
                // (ajouter bool loading=true)
                axios.get(this.url_api_users).then((res) => {
                    this.users = res.data;
                });
            },
            async getUserByName() {
                console.log('loading');
                // (ajouter bool loading=true)
                const data = {
                    userName: this.searchedUserName
                }
                axios.get(this.url_api_userbyname, { params: data }).then((res) => {
                    this.user = res.data[0];
                });
            }
        }
    }

</script>

<style scoped>

    

</style>