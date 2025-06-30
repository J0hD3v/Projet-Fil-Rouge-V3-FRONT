<template>

    <h1>Utilisateurs</h1>

    <section v-for="(user) in users">
        <p>{{ user.pseudo }} - {{ user.email }}</p>
    </section>

    <form action="">
        <label for="myname">Pseudo utilisateur</label>
        <br>
        <input type="text" v-model="searchedUserName" name="myname" id="myname" placeholder="User name">
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




    <div class="form-container">
        <h2>Login</h2>
        <form action="" method="post" @submit.prevent="connexion()">
          <div class="form-group">
            <label for="name">Name:</label>
            <input v-model="username" type="text" id="name" name="username" placeholder="Enter your name" required autocomplete="off" style="color: black;">
          </div>
          <div class="form-group">
            <label for="password">password:</label>
            <input v-model="password" type="password" id="password" name="password" placeholder="password" required style="color: black;">
          </div>
          <button type="submit" class="submit-btn">Login</button>
        </form>
    </div>

</template>

<script>

    import axios from 'axios';
    import { ref } from 'vue';

    export default {
        data() {
            return {
                // component data
                url_api_users: 'http://localhost:3000/users',
                url_api_userbyname: 'http://localhost:3000/userbyname',
                users: [],
                user: {},
                searchedUserName: '',

                username: ref(''),
                password: ref('')
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
            },
            // async connexion() {
            //     const data = {
            //         username: this.username,
            //         password: this.password
            //     };
            //     console.log(data);
            //     axios.post('http://localhost:3000/login', { params: data }).then((res) => {
            //         console.log(res);
            //         console.log(res.data);
            //     });
            // }
            async connexion() {
                const params = new URLSearchParams();
                params.append('username', this.username);
                params.append('password', this.password);

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
        }
    }

</script>

<style scoped>

    * {
        color: white;
    }



    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}


h2 {
    text-align: center;
    margin-bottom: 30px;
  }

.form-container {
    width: 300px;
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