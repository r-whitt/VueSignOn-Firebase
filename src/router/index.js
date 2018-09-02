import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';

Vue.use(Router);

// let is correct as route will change depending on sigin
// eslint-disable-next-line
let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
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
