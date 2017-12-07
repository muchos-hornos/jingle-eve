import Vue from 'vue';
import VueRouter from 'vue-router';
import Promise from 'promise';
import nprogress from 'nprogress';

import Questions from '../physician/questions.vue';

Vue.use(VueRouter);

const Physician = () => ({
  // Загружаемый компонент. Значение должно быть Promise
  component: new Promise((resolve, reject) => {
    nprogress.start();
    setTimeout(function () {
      import(/* webpackChunkName: "physician" */ '../physician/physician.vue').then(res => {
        nprogress.done();
        resolve(res);
      })
    }, 5000);
  })
});

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