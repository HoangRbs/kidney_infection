import Vue from 'vue';
import VueRouter from 'vue-router';
import SymtomsForm from '../components/SymtomsForm';
import UsersDatabase from '../components/UsersDatabase';
import AdminPage from '../components/AdminPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/UsersDatabase',
    name: 'UsersDatabase',
    component: UsersDatabase
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: AdminPage
  },
  {
    path: '/',
    name: 'Home',
    component: SymtomsForm
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;