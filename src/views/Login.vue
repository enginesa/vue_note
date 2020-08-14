<template>

    <div class="container box formBox">
        <section class="hero">
            <div class="hero-body">
                <h1 class="title">
                    Giriş Yap
                </h1>
                <h2 class="subtitle">
                    Devam edebilmek için giriş yapın.
                </h2>
                engin1218@hotmail.com


                <div class="field">
                    <label class="label">E-posta</label>
                    <div class="control">
                        <input :class="'input '+inputValidateBorder($v.form.eMail)" v-model="$v.form.eMail.$model"
                               type="text" placeholder="E-posta" autofocus>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Şifre</label>
                    <div class="control">
                        <input :class="'input '+inputValidateBorder($v.form.password)" v-model="$v.form.password.$model"
                               type="password" placeholder="Şifre">
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-success" @click="auth">Giriş yap</button>
                    </div>
                </div>
                {{submitMessage}}
            </div>
        </section>
    </div>
</template>
<script>
    import validatorMix from "../mixins/validator";
    import authMix from '../mixins/auth';
    import {required} from 'vuelidate/lib/validators'

    export default {
        mixins: [validatorMix,authMix],
        data() {
            return {
                form: {
                    eMail: '',
                    password: '',
                },
                submitMessage: '',
                authType: "login",
            }
        },
        validations: {
            form: {
                eMail: {
                    required,
                },
                password: {
                    required,
                }
            }
        },



    }
</script>
