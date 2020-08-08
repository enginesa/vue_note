<template>
  <div>
      <Navbar></Navbar>
      <section class="hero">
          <div class="hero-body">
              <div class="container">
                  <div class="columns">
                      <div class="column is-two-fifths">
                          <div class="item-intro">
                              <h1 class="title">
                                  <strong>Not Defteri</strong>
                                  Hemen giriş yap ve web üzerinde notlarını tutmaya başla, <strong>deneme</strong>
                                  amaçlı
                                  oluşturulmuş
                                  bir sayfadır.
                              </h1>

                              <div class="item-info">
                                  <h5><i class="fas fa-exclamation-triangle has-text-warning"></i> Üye olduktan sonra
                                      not tutulabilir.</h5>
                                  <h5><i class="icon fas fa-shield-alt has-text-success"></i> Güvenli bir şekilde
                                      notlarınız tutulur.</h5>
                              </div>

                          </div>


                      </div>
                      <div class="column is-half">
                          <div class="box">
                              <article class="media">
                                  <img src="https://p4.wallpaperbetter.com/wallpaper/557/797/113/background-blank-book-business-wallpaper-preview.jpg">
                              </article>
                          </div>
                      </div>
                  </div>


                  <nav class="level">
                      <div class="level-item has-text-centered">
                          <div>
                              <p class="heading">Tweets</p>
                              <p class="title">3,456</p>
                          </div>
                      </div>
                      <div class="level-item has-text-centered">
                          <div>
                              <p class="heading">Following</p>
                              <p class="title">123</p>
                          </div>
                      </div>
                      <div class="level-item has-text-centered">
                          <div>
                              <p class="heading">Followers</p>
                              <p class="title">456K</p>
                          </div>
                      </div>
                      <div class="level-item has-text-centered">
                          <div>
                              <p class="heading">Likes</p>
                              <p class="title">789</p>
                          </div>
                      </div>
                  </nav>

              </div>
          </div>


      </section>
  </div>


</template>

<script>

    import Navbar from '../components/shared/Navbar';

    export default {
        components: {
            Navbar
        },
    }
</script>
