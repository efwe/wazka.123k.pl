<template>
    <div class="row no-gutters">

        <b-modal id="loadingModal" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
                <span class="fa fa-spinner fa-spin fa-3x"></span>
            </div>
        </b-modal>

        <b-alert v-if="error" variant="danger" show>Data Loading Failed</b-alert>

        <div class="col-md-2">
            <b-list-group v-for="route in items">
                <b-list-group-item href="#" active class="flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{{ route.title}}</h5>
                        <small>{{route.start}}}</small>
                    </div>
                    <p class="mb-1">
                        {{route.description}}
                    </p>
                    <small>{{route.transport}}</small>
                </b-list-group-item>
            </b-list-group>
        </div>
        <div class="col-md-10">
            <div id="map-container">
                map
            </div>
        </div>
    </div>


</template>

<script>
    import L from 'leaflet'
    import {axios} from '../app.js'
    import httpAdapter from 'axios/lib/adapters/http';

    export default {
        name: "wipuMap",
        data() {
            return {
                counter: 0,
                loading: false,
                error: null,
                routes: []
            }
        },
        created() {
            this.loadRoutes()
        },
        mounted() {
            this.initMap();
        },
        methods: {
            initMap() {
                let myMap = L.map('map-container').setView([50.8, 20.1], 13);
                let osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                });
                osmLayer.addTo(myMap);
            },
            loadRoutes() {
                this.$root.$emit('bv::show::modal', 'loadingModal');
                axios.get('http://localhost:8080/map/tracks', {responseType: 'stream', adapter: httpAdapter})
                    .then((response) => {
                        console.log(response.data);
                        this.routes.push(response.data);
                        console.log(this.counter++);
                    })
                    .finally(() => this.$root.$emit('bv::hide::modal', 'loadingModal'))
                    .catch(error => {
                        this.error = error;
                        console.log(error);
                    });
            }
        },
    }
</script>
<style>
    @import '~leaflet/dist/leaflet.css';


    #map-container {
        position: relative;
        padding: 0;
        width: max-content;
        height: 1000px;
    }
</style>