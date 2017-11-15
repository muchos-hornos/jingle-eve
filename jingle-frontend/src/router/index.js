import Vue from 'vue';
import Router from 'vue-router';
import Questions from '@/components/questions';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: Questions,
    },
  ],
});