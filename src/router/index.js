// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Browse from '../components/pages/Browse.vue';
import ManageProfils from '../components/pages/ManageProfils.vue';

const routes = [
  {
    path: '/',
    name: 'Browse',
    component: Browse,
  },
  {
    path: '/ManageProfils',
    name: 'ManageProfils',
    component: ManageProfils, // Réutilise le même composant mais avec un paramètre d'édition
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
