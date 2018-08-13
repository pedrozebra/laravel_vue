require('./bootstrap');

import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.component('Myheader', require('./components/HeaderComponent.vue'));
Vue.component('Myfooter', require('./components/FooterComponent.vue'));


let Home = require('./components/HomeComponent.vue');
let About = require('./components/AboutComponent.vue');


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = new VueRouter({
    routes
  })

const app = new Vue({
    el: '#app',
    router
});

$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");  
    });
});
