// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// Initialize Firebase
let app;
const config = {
  apiKey: 'AIzaSyBpeZdJAPx2sQXKXhZs6do5fcl1C0g2c7c',
  authDomain: 'vue-firebase-77f45.firebaseapp.com',
  databaseURL: 'https://vue-firebase-77f45.firebaseio.com',
  projectId: 'vue-firebase-77f45',
  storageBucket: 'vue-firebase-77f45.appspot.com',
  messagingSenderId: '277731115208',
};

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
