import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import Axios from 'axios'
import JQuery from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

export const axios = Axios;
export const bus = new Vue();

window.$ = JQuery;
window.JQuery = JQuery;

new Vue({
    el: '#app',
    render: h => h(App)
});