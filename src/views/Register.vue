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
                <p>engin1218@hotmail.com</p>
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
                        <p class="help is-danger" v-if="!$v.form.password.minLength">{{REGISTER_HTML_MESSAGES["min_length"]}}</p>


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
                        <button class="button is-success" @click="newUser">Kayıt ol</button>
                    </div>
                </div>
                {{submitMessage}}

            </div>

        </section>


    </div>


</template>


<script>
    import {required, minLength, sameAs, email} from 'vuelidate/lib/validators'

    import {REGISTER_SUBMIT_MESSAGES, REGISTER_HTML_MESSAGES} from '../store/constants';

    export default {

        data() {
            return {
                form: {
                    eMail: '',
                    password: '',
                    passwordRepeat: '',
                },
                submitMessage: '',
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

        methods: {

            inputValidateBorder(validation) {
                return validation.$error === true ? 'is-danger' : '';
            },
            newUser() {
                //true gelirse alanlar hatalı
                if (!this.$v.form.$invalid) {
                    this.$store.dispatch("register", this.form).then((response) => {
                        if (response[0]) {
                            this.submitMessage = REGISTER_SUBMIT_MESSAGES["SUCCESS"];
                        } else {
                            //gelen response hata keyini ayıklamak için split ile böldük
                            var errorMessage = response[1].split(" ");
                            errorMessage = REGISTER_SUBMIT_MESSAGES[errorMessage[0]];
                            errorMessage = errorMessage ? errorMessage : errorMessage[1];


                            this.submitMessage = errorMessage;
                        }
                    })
                } else {
                    //form doldurulmadan kayıt olmaya çalışılıyorsa form inputlar hata verir
                    this.$v.$touch()
                    this.submitMessage = "";

                }
            }

        },


    }
</script>
