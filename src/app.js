import Vue from 'vue'
import dayJs from 'dayjs'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

export const bus = new Vue();

let map_api_endpoint = 'https://map.123k.org';

if (process.env.NODE_ENV !== "production") {
    map_api_endpoint = 'http://localhost:8080'
}
export default map_api_endpoint;


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
