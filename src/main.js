import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'


import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false


Vue.filter("maxLength", function (value) {

    // var test=value.splice(0,2);

    if (value.length > 500) {
        return value.slice(0,500)+"...";
    } else {
        return value;
    }

});


new Vue({
    store,
    router,
    render: h => h(App),

}).$mount('#app')
