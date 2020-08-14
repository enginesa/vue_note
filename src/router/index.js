import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store';

Vue.use(VueRouter)

const router = new VueRouter({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import( '../views/Home'),
            beforeEnter: (to, from, next) => {
                if (!store.getters.getToken) next();
                else next({name: "Notes"})
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import( '../views/Login'),
            beforeEnter: (to, from, next) => {
                if (!store.getters.getToken) next();
                else next({name: "Notes"})
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import( '../views/Register'),
            beforeEnter: (to, from, next) => {
                if (!store.getters.getToken) next();
                else next({name: "Notes"})
            }
        },
        {
            path: '/notes',
            name: 'Notes',
            component: () => import( '../views/Notes'),
            beforeEnter: (to, from, next) => {
                if (store.getters.getToken) {
                    next();
                } else {
                    router.push({name: "Register"})
                }
            }
        },
        {path: '*', redirect: {name: "Home"}}
    ]
})
//
// router.beforeEach((to, from, next) => {
//
//     console.log(store.getters.getToken);
//      next()
// })


export default router
