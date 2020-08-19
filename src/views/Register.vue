<template>

    <div class="container box formBox">

        <section class="hero">
            <div class="hero-body">
                <h1 class="title">
                    Kayıt Ol
                </h1>
                <h2 class="subtitle">
                    Hemen notlarını oluşturmaya başla.
                </h2>
                <div class="field">
                    <label class="label">E-posta</label>
                    <div class="control">
                        <input :class="'input '+inputValidateBorder($v.form.eMail)" type="text" placeholder="E-posta"
                               v-model="$v.form.eMail.$model">
                        <p class="help is-danger" v-if="!$v.form.eMail.required">
                            {{REGISTER_HTML_MESSAGES["required"]}}</p>

                    </div>

                </div>
                <div class="field">
                    <label class="label">Şifre</label>
                    <div class="control">
                        <input :class="'input '+inputValidateBorder($v.form.password)" type="password"
                               placeholder="Şifre"
                               v-model="$v.form.password.$model">
                        <p class="help is-danger" v-if="!$v.form.password.required">
                            {{REGISTER_HTML_MESSAGES["required"]}}</p>
                        <p class="help is-danger" v-if="!$v.form.password.minLength">
                            {{REGISTER_HTML_MESSAGES["min_length"]}}</p>


                    </div>
                </div>
                <div class="field">
                    <label class="label">Şifre Tekrarı</label>
                    <div class="control">
                        <input :class="'input '+inputValidateBorder($v.form.passwordRepeat)" type="password"
                               placeholder="Şifre Tekrarı"
                               v-model="$v.form.passwordRepeat.$model">
                        <p class="help is-danger" v-if="!$v.form.passwordRepeat.required">
                            {{REGISTER_HTML_MESSAGES["required"]}}</p>
                        <p class="help is-danger"
                           v-if="!$v.form.passwordRepeat.sameAsPassword && $v.form.passwordRepeat.$model.length>0">
                            {{REGISTER_HTML_MESSAGES["same_as_password"]}}</p>

                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" checked disabled>
                            Site için geçerli <a href="#">şartları ve koşulları</a> kabul ediyorum.
                        </label>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-success" @click="auth">Kayıt ol</button>
                    </div>
                </div>
                {{submitMessage}}

            </div>
        </section>
    </div>
</template>


<script>
    import validatorMix from '../mixins/validator';
    import authMix from '../mixins/auth';
    import {required, minLength, sameAs, email} from 'vuelidate/lib/validators'
    import {REGISTER_HTML_MESSAGES} from '../store/constants';

    export default {
        mixins: [validatorMix,authMix],
        data() {
            return {
                form: {
                    eMail: '',
                    password: '',
                    passwordRepeat: '',
                },
                submitMessage: '',
                authType:"register",
                REGISTER_HTML_MESSAGES: REGISTER_HTML_MESSAGES
            }
        },
        validations: {
            form: {
                eMail: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                passwordRepeat: {
                    required,
                    sameAsPassword: sameAs('password')

                },
            }
        },




    }
</script>
