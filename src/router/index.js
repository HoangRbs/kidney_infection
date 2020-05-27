import Vue from 'vue';
import VueRouter from 'vue-router';
import SymtomsForm from '../components/SymtomsForm';
import UsersDatabase from '../components/UsersDatabase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/UsersDatabase',
    name: 'UsersDatabase',
    component: UsersDatabase
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