require('./bootstrap');

import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.component('Myheader', require('./components/HeaderComponent.vue'));
Vue.component('Myfooter', require('./components/FooterComponent.vue'));
//Vue.component('Add', require('./components/AddComponent.vue'));
//Vue.component('Home', require('./components/HomeComponent.vue'));
//Vue.component('About', require('./components/AboutComponent.vue'));


let Home = require('./components/HomeComponent.vue');
let About = require('./components/AboutComponent.vue');


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = new VueRouter({
    //mode: 'history',
    routes
  })

const app = new Vue({
    el: '#app',
    router
});
