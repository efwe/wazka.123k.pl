<template>
    <div id="view">
        <navbar :current-comp="currentComp"></navbar>
        <main role="main">
            <component :is="currentComp"></component>
        </main>
    </div>
</template>

<script>
    import Navbar from './components/navbar.vue'
    import Index from './components/index.vue'
    import WipuMap from './components/map.vue'
    import About from './components/about.vue'

    import {bus} from './app.js'

    export default {
        el: '#app',

        data() {
            return {
                currentComp: 'index'
            };
        },

        created() {
            bus.$on('switchComp', comp => {
                this.currentComp = comp;
            })
        },
        components: {
            'wipuMap': WipuMap,
            'navbar': Navbar,
            'index': Index,
            'about': About
        }

    }
</script>

<style>
    @import './css/wazka.css';
</style>
