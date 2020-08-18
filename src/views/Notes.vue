<template>
    <div class="container">
        <div class="columns is-12 is-multiline">

                    <div class="column is-4" v-for="(item,index) in getNotes" :key="index">
                        <Card :item="item"></Card>
                    </div>
        </div>



    </div>
</template>
<script>
    import Card from '../components/pages/Notes/Card';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            Card
        },
        computed: {
            ...mapGetters([
                "getNotes"
            ])
        },
        created() {
            this.$store.dispatch("listNotes")
        }
    }
</script>