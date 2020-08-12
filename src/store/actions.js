const action = {


    register(){
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXhrsyMdcO4ZvED0fcn1yiLTAXhkATBpE',
            {email:"test@hotmai1l.com",password:"1218620",returnSecureToken:true})
            .then(function (response) {
                // handle success
                console.log(response);
            })
    },

    login(){

    }
}


export default action;