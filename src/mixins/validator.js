export default {

    methods:{
        inputValidateBorder(validation) {
            return validation.$error === true ? 'is-danger' : '';
        }
    }
}