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
                    <label class="label">Ad</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Ad">
                    </div>
                </div>
                <div class="field">
                    <label class="label">E-posta</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="E-posta">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Şifre</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Şifre">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Şifre Tekrarı</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="Şifre Tekrarı">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox">
                            Site için geçerli <a href="#">şartları ve koşulları</a> kabul ediyorum.
                        </label>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question">
                            Yes
                        </label>
                        <label class="radio">
                            <input type="radio" name="question">
                            No
                        </label>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-success">Kayıt ol</button>
                    </div>

                </div>
            </div>

        </section>

    </div>

</template>

