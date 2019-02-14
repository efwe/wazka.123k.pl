import Vue from 'vue'
import dayJs from 'dayjs'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

export const bus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
});

export const formatDate = function (value) {
    if (value) {
        return dayJs(value).format('DD/MM/YYYY HH:MM');
    }
};

Vue.filter('formatDate', formatDate);
