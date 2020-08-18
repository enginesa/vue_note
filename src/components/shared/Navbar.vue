<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link :to='{name:"Home"}' class="navbar-item">
                <img src="../../assets/logo.png">
            </router-link>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link :to='{name:"NewNote"}' class="button is-danger" v-if="authControl"><strong>Yeni not</strong></router-link>
                        <div class="button is-light" v-if="authControl" @click="logOut"><strong>Çıkış yap</strong></div>
                        <router-link :to='{name:"Register"}' class="button is-primary" v-if="!authControl"><strong>Kayıt ol</strong></router-link>
                        <router-link :to='{name:"Login"}' class="button is-light" v-if="!authControl">Giriş yap</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import $ from 'jquery';

    export default {
        mounted() {
            $(".navbar-burger").click(function () {

                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");

            });
        },
       computed:{
            authControl(){
                return this.$store.getters.getToken;
            }
       },
        methods:{
            logOut(){
                this.$store.dispatch("logOut");
                setTimeout( ()=>{
                    this.$router.push({name:"Home"})
                })
            }
        }
    }
</script>

<style scoped>
    nav {
        margin-bottom: 30px;
    }
</style>