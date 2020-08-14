import {REGISTER_SUBMIT_MESSAGES} from "../store/constants";

export default {
    methods: {
        auth() {
            //true gelirse alanlar hatalı
            if (!this.$v.form.$invalid) {
                this.$store.dispatch(this.authType, this.form).then((response) => {
                    if (response[0]) {
                        var authSuccess = "";
                        if (this.authType === "login") authSuccess = "SUCCESS_LOGIN"
                        else authSuccess = "SUCCESS_REGISTER"
                        this.submitMessage = REGISTER_SUBMIT_MESSAGES[authSuccess];

                        setTimeout(() => {
                            this.$router.push({name: "Notes"});
                        }, 250)
                    } else {
                        //gelen response hata keyini ayıklamak için split ile böldük
                        var errorMessage = response[1].split(" ");
                        errorMessage = REGISTER_SUBMIT_MESSAGES[errorMessage[0]];
                        errorMessage = errorMessage ? errorMessage : errorMessage[1];
                        this.submitMessage = errorMessage;
                    }
                })
            } else {
                //form doldurulmadan kayıt olmaya çalışılıyorsa form inputlar hata verir
                this.$v.$touch()
                this.submitMessage = "";

            }
        }

    },
}