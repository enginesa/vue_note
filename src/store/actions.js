import axios from 'axios';
import router from '../router/index';

export default {
    initApp({commit, dispatch}) {
        var token = localStorage.getItem("token");
        var tokenExpires = localStorage.getItem("tokenExpires");

        if (token && tokenExpires) {

            var nowDate = new Date(Date.now());
            var finishDate = new Date(tokenExpires);


            if (finishDate > nowDate) {
                var remainingTime = finishDate - nowDate;
                dispatch("timeOut", remainingTime);
                commit("setToken", token)
                commit("setAuthenticated", true)

            } else {
                dispatch("logOut");
                router.push({"name": "Home"});
            }

        }
    },

    register({state, commit, dispatch}, form) {
        return new axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + state.apikey,
            {email: form.eMail, password: form.password, returnSecureToken: true})
            .then(function (response) {
                var token = response.data.idToken;
                var expiresIn = response.data.expiresIn;

                commit("setToken", token)
                commit("setAuthenticated", true)
                dispatch("setAuthLocalStorage", {
                    "token": token,
                    "expiresIn": expiresIn,
                })
                dispatch("timeOut", expiresIn * 1000)
                return [true, response];
            }).catch((error) => {
                return [false, error.response.data.error.message];
            })
    },

    login({commit, state, dispatch}, form) {

        return new axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + state.apikey,
            {email: form.eMail, password: form.password, returnSecureToken: true})
            .then(function (response) {
                var token = response.data.idToken;
                var expiresIn = response.data.expiresIn;


                commit("setToken", token)
                commit("setAuthenticated", true)

                dispatch("setAuthLocalStorage", {
                    "token": token,
                    "expiresIn": expiresIn,
                })
                dispatch("timeOut", expiresIn * 1000)
                return [true, response];
            })
            .catch((error) => {
                return [false, error.response.data.error.message];
            })
    },


    setAuthLocalStorage(_, payLoad) {
        localStorage.setItem("token", payLoad["token"]);
        var expiresDate = new Date(Date.now() + payLoad["expiresIn"] * 1000);
        localStorage.setItem("tokenExpires", expiresDate);

    },


    logOut({commit}) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpires");
        commit("setToken", "")
        commit("setAuthenticated", false)

    },

    timeOut({dispatch}, time) {
        setTimeout(function () {
            dispatch("logOut");
            router.push({"name": "Home"});
        }, time)
    }
}

