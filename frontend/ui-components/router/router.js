import Vue from 'vue';
import VueRouter from 'vue-router';
// import Physician from './physician/physician.vue';
// import Recruiter from './recruiter/recruiter.vue';
import Questions from '../physician/questions.vue';

Vue.use(VueRouter);

const Physician = { template: '<div><div class="alert alert-info">Physician App</div><router-link to="/physician/questions" class="navbar-brand">Open questions list</router-link><router-view/></div>' };
const Recruiter = { template: '<div><div class="alert alert-info">Recruiter App</div><router-view/></div>' };

export default new VueRouter({
  routes: [
    {
      path: '/physician', component: Physician,
      children: [
        {
          path: 'questions', component: Questions
        }
      ]
    },
    {
      path: '/recruiter', component: Recruiter
    }
  ]
});