<template>

    <h1>Billets</h1>

    <form action="">
        <!-- user 1 -->
        <label for="user1">ID émetteur</label>
        <br>
        <input type="number" v-model="idUser1" name="user1" id="user1" placeholder="Id Utilisateur 1">
        <br>
        <!-- user 2 -->
        <label for="user2">ID destinataire</label>
        <br>
        <input type="number" v-model="idUser2" name="user2" id="user2" placeholder="Id Utilisateur 2">
        <br>
        <!-- billet -->
        <label for="item">ID billet</label>
        <br>
        <input type="number" v-model="idItem" name="item" id="item" placeholder="Id Billet">
        <br>
        <!-- validation -->
        <input type="button" value="Send" @click="createTransaction()">
    </form>

</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                // component data
                url_api_transactions: 'http://localhost:3000/transactions',
                idUser1: undefined,
                idUser2: undefined,
                idItem: undefined
            }
        },

        created() {
        },

        methods: {
            // component methods
            async createTransaction() {
                const data = {
                    idUser1: this.idUser1,
                    idUser2: this.idUser2,
                    idItem: this.idItem,
                }
                // update item owner
                axios.put(this.url_api_transactions, data).then((res) => {
                    console.log(res.data);
                    // create new transaction
                    axios.post(this.url_api_transactions, data).then((res) => {
                        console.log(res.data);
                    });
                });
            }
        }
    }
</script>

<style scoped>

    

</style>