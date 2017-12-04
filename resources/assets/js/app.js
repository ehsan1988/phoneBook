/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

let appHeader = require('./components/layout/AppHeader');
let appFooter = require('./components/layout/AppFooter');
let appHome = require('./components/page/Home');
const routes = [
    {path: '/home', component: appHome}
];
const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router,
    components: {appHeader, appFooter}
});
