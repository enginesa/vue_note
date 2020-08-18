import axios from 'axios';
import router from '../router/index';

export default {
    initApp({commit, dispatch}) {
        var token = localStorage.getItem("token");
        var tokenExpires = localStorage.getItem("tokenExpires");
        var userId = localStorage.getItem("userId");

        if (token && tokenExpires && userId) {

            var nowDate = new Date(Date.now());
            var finishDate = new Date(tokenExpires);


            if (finishDate > nowDate) {
                var remainingTime = finishDate - nowDate;
                dispatch("timeOut", remainingTime);
                commit("setToken", token)
                commit("setUserId", userId)

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
                var userId = response.data.localId;

                commit("setToken", token)
                commit("setUserId", userId)
                commit("setAuthenticated", true)
                dispatch("setAuthLocalStorage", {
                    "token": token,
                    "expiresIn": expiresIn,
                    "userId": userId
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
                var userId = response.data.localId;


                commit("setToken", token)
                commit("setUserId", userId)
                commit("setAuthenticated", true)

                dispatch("setAuthLocalStorage", {
                    "token": token,
                    "expiresIn": expiresIn,
                    "userId": userId
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
        localStorage.setItem("userId", payLoad["userId"]);
        var expiresDate = new Date(Date.now() + payLoad["expiresIn"] * 1000);
        localStorage.setItem("tokenExpires", expiresDate);

    },


    logOut({commit}) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpires");
        localStorage.removeItem("userId");
        commit("setToken", "")
        commit("setAuthenticated", false)
        commit("setUserId", "")

    },

    timeOut({dispatch}, time) {
        setTimeout(function () {
            dispatch("logOut");
            router.push({"name": "Home"});
        }, time)
    },

    //NewNote
    newNote({state}, form) {
        var data = {header: form.header, content: form.content};
        axios.post(`https://note-33f3e.firebaseio.com/notes/${state.userId}.json`,
            data)
            .then(function (response) {
                if (response) {
                    router.push({name: "Notes"})
                }

            })
    },
    //*NewNote
    //Notes
    listNotes({state, commit}) {
        axios.get(`https://note-33f3e.firebaseio.com/notes/${state.userId}.json`)
            .then(function (response) {
                if (response.data) {

                    var responseData = [];
                    for (var dataKey in response.data) {
                        response.data[dataKey]["id"] = dataKey;
                        responseData.push(response.data[dataKey]);
                    }

                    commit("setNotes", responseData);

                }
            })

    },
    //*Notes

    //Detail
    noteDetail({state}, noteId) {
        return new axios.get(`https://note-33f3e.firebaseio.com/notes/${state.userId}/${noteId}.json`)
            .then(function (response) {
                if (response) {
                    return response.data;
                }
            })
    },
    //*Detail

    editNote({state}, form) {
        var data = {header: form.header, content: form.content};
        return new axios.put(`https://note-33f3e.firebaseio.com/notes/${state.userId}/${form.id}.json`,
            data)
            .then(function (response) {
                if (response.status === 200) {
                    return response
                }

            })
    },
    deleteNote({state},noteId){
        return new axios.delete(`https://note-33f3e.firebaseio.com/notes/${state.userId}/${noteId}.json`)
            .then(function (response) {
                if (response.status === 200) {
                    return response
                }
            })
    }

}

