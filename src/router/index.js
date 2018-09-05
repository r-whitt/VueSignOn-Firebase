import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';

import Auth from '@/views/Auth';
import Dashboard from '@/views/Dashboard';
import Home from '@/views/Home';

Vue.use(Router);

// let is correct as route will change depending on sigin
// eslint-disable-next-line
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: {
        guestOnly: true,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // let is correct as currentUser could change
  // eslint-disable-next-line
  let currentUser = firebase.auth().currentUser;
  // let is correct as requiresAuth could change depending on route selected
  // eslint-disable-next-line
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('hello');
  else next();
});

export default router;
