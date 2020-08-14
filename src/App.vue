<template>
    <div id="app">
        <Navbar></Navbar>

        <router-view></router-view>

    </div>
</template>


<script>
    import Navbar from '../src/components/shared/Navbar';


    export default {
        components: {
            Navbar
        },
        created() {
            this.$store.dispatch("initApp");
        }
    }
</script>


<style>
    @import '~bulma/css/bulma.css';
    @import './assets/custom.css';
</style>
