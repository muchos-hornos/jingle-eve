<template>
  <nav class="navbar navbar-default">
    <ul class="nav navbar-nav navbar-right">
      <li>
        <button class="btn btn-danger log" @click="handleLogout()">Log out </button>
        <button class="btn btn-info log" @click="login()">Log In</button>
      </li>
    </ul>
  </nav>
</template>

<script>
//import { isLoggedIn, login, logout } from '../utils/auth';
import axios from 'axios';
import Vue from 'vue';

export default Vue.component('app-nav', {
  methods: {
    handleLogin() {
      //login();
    },
    handleLogout() {
      //logout();
    },
    isLoggedIn() {
      return true;
      //return isLoggedIn();
    },
    login() {
      // the oauth token api exposed by eve.
      const auth_url = 'https://localhost:5000/oauth/token';
      // the client id generated manually by oauth/management api.
      // It is public and per application.
      const client_id = "lxsUe5fVf2oUhIZFj9DZA7rAw1eNrTLESYteQW3U";

      axios.post(auth_url, 
        "client_id=" + client_id + 
        "&grant_type=password" + 
        // We hardcore username and password for simplicity.
        // TODO(ssergey): obtain from login form.
        "&username=ssergey&password=ss3rg3y",
       {}).then(response => {
        this.token = response.data.access_token;
       });
      
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-right { margin-right: 0px !important}

.log {
  margin: 5px 10px 0 0;
}
</style>
