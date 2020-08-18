import Vue from 'vue'
import store from '../store/store';
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import( '../views/Home'),
            meta: {requiresAuth: false},

        },
        {
            path: '/login',
            name: 'Login',
            component: () => import( '../views/Login'),
            meta: {requiresAuth: false},

        },
        {
            path: '/register',
            name: 'Register',
            component: () => import( '../views/Register'),
            meta: {requiresAuth: false},

        },
        {
            path: '/notes',
            name: 'Notes',
            component: () => import( '../views/Notes'),
            meta: {requiresAuth: true},
        },
        {
            path: '/notes/detail/:id',
            name: 'Detail',
            component: () => import( '../views/Detail'),
            meta: {requiresAuth: true},

        },
        {
            path: '/notes/detail/:id/edit',
            name: 'Edit',
            component: () => import( '../views/Edit'),
            meta: {requiresAuth: true},

        },
        {
            path: '/new-note',
            name: 'NewNote',
            component: () => import( '../views/NewNote'),
            meta: {requiresAuth: true},

        },

        {path: '*', redirect: {name: "Home"}}
    ]
})

router.beforeEach((to, from, next) => {

    //timeout yapmamızın sebebi router vuexden önce çalışıyor vuex yerine oturmadığı için problem oluşuyor
    //bizde asny yaptık
    setTimeout(function () {
        var authControl = to.meta.requiresAuth;
        var token = store.getters.getToken;
//token varsa
        if (token) {
            if (authControl) {
                next();
            }
            //auth olup auth dışı yere giriyorsa notesa atsın
            else {
                next({name: "Notes"});
            }
        }
        //token yoksa
        else {
            //auth işlemli yere giriyorsa kayıt sayfasına
            if (authControl) {
                next({name: "Register"});
            } else {
                next();
            }

        }

    })
})


export default router
