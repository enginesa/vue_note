<template>
        <section class="hero heroHome">
            <div class="hero-body">
                <div class="container">
                    <Intro></Intro>
                    <Level></Level>
                </div>
            </div>
        </section>


</template>

<script>

    import Intro from '../components/pages/Home/Intro';
    import Level from '../components/pages/Home/Level';

    export default {
        components: {
        Intro, Level
        },
    }
</script>
