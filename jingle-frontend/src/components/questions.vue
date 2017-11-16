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
      getQuestions().then((data) => {;
        this.questions = data["_items"];
      });
    },
  },
  mounted() {
    this.getQuestions();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
