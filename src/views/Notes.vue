<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <Card></Card>
            </div>
            <div class="column">
                Second column
            </div>
            <div class="column">
                Third column
            </div>
            <div class="column">
                Fourth column
            </div>
        </div>

    </div>
</template>
<script>
    import Card from '../components/pages/Notes/Card';
    export default {
        components:{
            Card
        }
    }
</script>