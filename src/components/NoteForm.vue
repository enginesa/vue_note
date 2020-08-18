<template>
    <div class="container">
        <div class="field">
            <div class="control">
                <input :class="'input is-medium '+inputValidateBorder($v.form.header)" type="text" placeholder="Başlık"
                       v-model="$v.form.header.$model">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <textarea :class="'textarea is-medium '+inputValidateBorder($v.form.content)" placeholder="Açıklama"
                          rows="15" v-model="$v.form.content.$model"></textarea>
            </div>
        </div>
        <button class="button is-primary is-medium" @click="newNote" v-if="type==='newNote'">Oluştur</button>
        <button class="button is-primary is-medium" @click="editNote" v-if="type==='editNote'">Kaydet</button>

    </div>
</template>


<script>
    import {required} from 'vuelidate/lib/validators'
    import validatorMix from "../mixins/validator";

    export default {
        mixins: [validatorMix],

        props: ["type"],
        data() {
            return {
                form: {
                    header: '',
                    content: '',
                },
                submitMessage: '',
            }
        },
        validations: {
            form: {
                header: {
                    required,
                },
                content: {
                    required,
                }
            }
        },
        methods: {
            newNote() {
                if (!this.$v.form.$invalid) {
                    this.$store.dispatch("newNote", this.form)

                } else {
                    this.$v.$touch()
                }
            },
            editNote() {
                if (!this.$v.form.$invalid) {
                    this.form["id"]=this.$route.params.id;
                    this.$store.dispatch("editNote", this.form).then((response)=>{
                      if(response){
                          this.$router.go(-1);
                      }
                    })
                } else {
                    this.$v.$touch()
                }
            },
        },
        created() {
            if(this.type==="editNote"){
                this.$store.dispatch("noteDetail", this.$route.params.id).then((response) => {
                    if(response){
                        this.form.header=response.header;
                        this.form.content=response.content;
                    }
                })
            }
        }
    }
</script>
