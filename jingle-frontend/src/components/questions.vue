<template>
  <div>
    <app-nav></app-nav>
  
    <h3 class="text-center">Available questions</h3>
    <hr/>

    <div class="col-sm-4" v-for="question in questions">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ question.question_text }} </h3>
          <p><span class="badge alert-info"> Question: </span> {{ question.question_text }} </p>
          <select>
              <option disabled value="">Please select one</option>
              <option v-for="choice in question['choices']" >
                          {{ choice.text }}
              </option>
          </select>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import AppNav from './AppNav';
import { getQuestions } from './utils/questions-api';

////////////////////
import axios from 'axios'
////////////////////////////

export default {
  name: 'questions',
  components: {
    AppNav,
  },
  data() {
    return {
      questions: '',
      token: '',
    };
  },
  methods: {
    isLoggedIn() {
      // TODO(ssergey): local storage
      return this.token != '';
    },
    getQuestions() {
      console.log("jjj");
      getQuestions().then((data) => {;
        this.questions = data["_items"];
      });
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
      
    }
  },
  mounted() {
    this.getQuestions();
    this.login(this);
    //console.log("XXX sending post");
    //Vue.axios.post('https://localhost:5000/oauth/token', 
    //"client_id=lxsUe5fVf2oUhIZFj9DZA7rAw1eNrTLESYteQW3U&grant_type=password&username=ssergey&password=ss3rg3y", // the data to post
    //{ 
    //}).then(res => {
        //console.log('RES', res);
        
    //});
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
