// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Browse from '../components/pages/Browse.vue';

const routes = [
  {
    path: '/',
    name: 'Browse',
    component: Browse,
  },
  {
    path: '/ManageProfils',
    name: 'ManageProfils',
    component: Browse, // Réutilise le même composant mais avec un paramètre d'édition
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
