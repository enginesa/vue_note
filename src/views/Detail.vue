<template>
    <div class="container">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    {{item.header}}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    {{item.content }}
                </div>
            </div>
            <footer class="card-footer">
                <router-link :to="{ name: 'Edit', params: { id: $route.params.id } }" class="card-footer-item">Düzenle</router-link>
                <a class="card-footer-item" @click="deleteNote">Sil</a>
            </footer>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                item: ""
            }
        },
        methods:{
            deleteNote(){
            var isConfirm=confirm("Silmek istiyor musunuz?");
            if(isConfirm){
                this.$store.dispatch("deleteNote",this.$route.params.id).then((response)=>{
                    if(response){
                        this.$router.push({name:"Notes"})
                    }
                })
            }
            }
        },
        created() {
            this.$store.dispatch("noteDetail", this.$route.params.id).then((response) => {
                this.item = response;
            })
        }
    }
</script>