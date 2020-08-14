import axios from 'axios';
import router from '../router/index';

export default {
    initApp({state, dispatch}) {
        var token = localStorage.getItem("token");
        var tokenExpires = localStorage.getItem("tokenExpires");

        if (token && tokenExpires) {
            state.tokenId = token;
            router.push({name: "Notes"});


            var nowDate = new Date(Date.now());
            var finishDate = new Date(tokenExpires);


            if (finishDate > nowDate) {
                // var remainingTime = 2000;
                var remainingTime = finishDate-nowDate;
                dispatch("timeOut", remainingTime);

            }else{
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
    },

    timeOut({dispatch}, time) {
        setTimeout(function () {
            dispatch("logOut");
            router.push({"name": "Home"});
        }, time)
    }
}

