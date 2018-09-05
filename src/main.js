// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';
import App from './App';
import router from './router';
import json from './firebaseConfig.json';

Vue.config.productionTip = false;

// Initialize Firebase
let app;
const config = json;

firebase.initializeApp(config);
// eslint-disable-next-line
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: {
        App,
      },
      template: '<App/>',
    });
  }
});

/* eslint-disable no-new */
/* Medium's main.js when you're not using Firebase. 
  Let's see how they initiate. Maybe remove the old firebase setup, comment for future reference?
new Vue ({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
*/
