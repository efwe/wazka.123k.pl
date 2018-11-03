import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import wazka from './img/wazka.jpg';

Vue.use(BootstrapVue);
new Vue({
    el: '#app',
    render: h => h(App)
})