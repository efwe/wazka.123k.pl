<template>
    <b-navbar toggleable="md" type="dark" variant="info" id="navbar">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#" @click="switchComponent('index')">123k.work</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item href="#" @click="switchComponent('wipuMap')">Map</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item href="#" @click="switchComponent('obelometer')">Obelometer</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <em>Other</em>
                    </template>
                    <b-dropdown-item href="#" @click="switchComponent('about')">About</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import {vm} from '../app.js';

    export default {
        name: "navbar",
        props: {
            currentComp: {
                type: String,
                required: true
            }
        },
        methods: {
            switchComponent(comp) {
                vm.$emit('switchComp', comp);
            }
        },
    }
</script>

<style scoped>

</style>