import { createRouter, createWebHistory } from 'vue-router';
import UserManagement from '../components/pages/UserManagement.vue';
import UserDetails from '../components/pages/UserDetails.vue';
import AddUser from '../components/pages/AddUser.vue';

const routes = [
  { 
    path: '/', 
    name: 'UserManagement',
    component: UserManagement 
  },
  { 
    path: '/user/:id', 
    name: 'UserDetails',
    component: UserDetails 
  },
  { 
    path: '/user/new', 
    name: 'AddUser',
    component: AddUser 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
