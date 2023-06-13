import {createRouter, createWebHistory} from 'vue-router';
import AppHome from './App.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    }
  ]
})