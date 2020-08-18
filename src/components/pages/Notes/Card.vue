<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{item.header}}
            </p>

        </header>
        <div class="card-content">
            <div class="content">
                {{item.content | maxLength}}
            </div>
        </div>
        <footer class="card-footer">
<!--            <a href="#" class="card-footer-item">Aç</a>-->
            <router-link :to="{ name: 'Detail', params: { id: item.id } }" class="card-footer-item">Aç</router-link>
        </footer>
    </div>
</template>

<script>
    export default {
        props:["item"],

    }
</script>