<template>
    <div class="row no-gutters">

        <b-modal v-model="modalShow" hide-footer hide-header>
            <div class="d-block text-center">
                <small>Loading...</small>
            </div>
        </b-modal>

        <b-modal id="loadingModal" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
                <span class="fa fa-spinner fa-spin fa-3x"></span>
            </div>
        </b-modal>

        <b-alert v-if="error" variant="danger" show>Data Loading Failed</b-alert>

        <div class="col-md-2">
            <b-list-group v-for="route in routes" :key="route.start">
                <b-list-group-item href="#" v-bind:id="route.id" v-on:click="showRoute(route)"
                                   v-bind:class="{ 'active' : isSelected(route) }"
                                   class="flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{{ route.title}}</h5>
                    </div>
                    <small>{{route.start | formatDate }}</small>
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
    export default {
        name: "wipuMap",
        data() {
            return {
                error: null,
                modalShow: false,
                selected: null,
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
                let eventSource = new EventSource('http://localhost:8080/map/tracks');
                let that = this;
                this.modalShow = true;

                eventSource.onerror = function () {
                    eventSource.close();
                    that.modalShow = false;
                };
                eventSource.addEventListener('track', function (e) {
                    let data = JSON.parse(e.data);
                    that.routes.push(data);
                }, false);
            },
            showRoute(route) {
                console.log(route.id);
                this.selected = route.id;
            },
            isSelected(route) {
                return route.id === this.selected;
            }
        }
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