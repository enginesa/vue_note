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
                <div class="field">
                    <label class="label">E-posta</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="E-posta" autofocus>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Şifre</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Şifre">
                    </div>

                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-success">Giriş yap</button>
                    </div>
                </div>
            </div>
        </section>
    </div>


</template>

<script>
    // import axios from 'axios';
    export default {
        created() {
            // axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXhrsyMdcO4ZvED0fcn1yiLTAXhkATBpE',
            //     {email:"test@hotmai1l.com",password:"1218620",returnSecureToken:true})
            //     .then(function (response) {
            //         // handle success
            //         console.log(response);
            //     })

        }
    }
</script>
