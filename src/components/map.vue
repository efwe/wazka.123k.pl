<template>
    <div id="map-container">
        map
    </div>
</template>

<script>
    import L from 'leaflet'

    export default {
        name: "wipuMap",
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