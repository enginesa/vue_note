import axios from 'axios';

export default {
    // context
    register(_, form) {

        return new axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXhrsyMdcO4ZvED0fcn1yiLTAXhkATBpE',
            {email: form.eMail, password: form.password, returnSecureToken: true})
            .then(function (response) {
                // handle success

                return [true,response];
            }).catch((error) => {
                return [false,error.response.data.error.message];
            })
    },

    login() {

    }
}

