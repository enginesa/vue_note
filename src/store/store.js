import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from "./actions";

const store = new Vuex.Store({
    state: {
        apikey: "AIzaSyAXhrsyMdcO4ZvED0fcn1yiLTAXhkATBpE"
    },
    getters: {},
    mutations: {},
    actions
})


export default store;