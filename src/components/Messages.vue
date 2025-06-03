<template>

    <h1>Messages</h1>

    <p v-for="(message) in messages">{{ message }}</p>


    <form action="">
        <label for="message">Nouveau message</label>
        <br>
        <input type="text" v-model="newMessage" name="message" id="message" placeholder="Your message">
        <input type="button" value="Save" @click="sendMessages()">
    </form>

</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                // component data
                url_api: 'http://localhost:3000/messages',
                messages: [],
                newMessage: ''
            }
        },

        created() {
            this.getMessages();
        },

        methods: {
            // component methods
            async getMessages() {
                console.log('loading');
                // (ajouter bool loading=true)
                axios.get(this.url_api).then((res) => {
                    this.messages = res.data;
                });
            },
            async sendMessages() {
                // formatting payload
                const data = {
                    newMessage: this.newMessage
                }

                /* --version avec format FormData--
                // const data = new FormData();
                // data.append('my_field', 'my value');
                // console.log(data.get('my_field'));
                */

                try {
                    axios.post(this.url_api, data).then((res) => {
                        this.getMessages();
                        this.newMessage = '';
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style scoped>

    form {
        margin: 5rem 0;
    }

</style>