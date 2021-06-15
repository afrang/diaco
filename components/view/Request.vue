<template>
  <div>
    <div  v-if="settingcomment!=null" class="container-fluid">
      <div class="row" >
        <div class="col-sm-3 col-xs-12">
          <div class="firstservicebox">
            <div v-text="$t('Request')"></div>
            <div v-text="$t('Form')"></div>
          </div>
          <div class="p-2">
            <p v-html="settingcomment.comment"></p>
          </div>
          <div>
          </div>
        </div>
        <div class="col-sm-9 col-xs-12">
          <div class="row">
            <form @submit.prevent="sendrequest" class="form">
              <div class="row m-2">
                <div class="col-sm-6">
                  <label class="text-gray labelss" v-text="$t('Name')+ '*'"></label>  <br>
                  <input required v-model="re.name" class="forminput w-100" type="text">

                </div>

                <div class="col-sm-6">
                  <label class="text-gray labelss" v-text="$t('LastName')+ '*'"></label>  <br>
                  <input required v-model="re.lastname"   class="forminput w-100" type="text">

                </div>
                <div class="col-sm-6">
                  <label class="text-gray labelss" v-text="$t('Email')+ '*'"></label>  <br>
                  <input  required v-model="re.email"  class="forminput w-100" type="email">

                </div>
                <div class="col-sm-6">
                  <label class="text-gray labelss" v-text="$t('phoneorwhatsapp')+ '*'"></label>  <br>
                  <input required  v-model="re.phone" class="forminput w-100" type="phone">

                </div>
                <div class="col-sm-6">
                  <label class="text-gray labelss" v-text="$t('selectcountry')+ '*'"></label>  <br>
                  <v-select required  v-model="re.country" :options="country" label="name"></v-select>

                </div>
                <div class="col-sm-6">
                  <label class="text-gray labelss" v-text="$t('Subject')+ '*'"></label>
                  <br>
                  <select required  class="form-control"  v-model="re.subject">
                    <option value="subject1" v-text="settingcomment.subject1"></option>
                    <option value="subject2" v-text="settingcomment.subject2"></option>
                    <option value="subject3" v-text="settingcomment.subject3"></option>
                    <option value="subject4" v-text="settingcomment.subject4"></option>
                  </select>
                </div>
                <div class="col-sm-12">
                  <label class="text-gray labelss" v-text="$t('Description')+ '*'"></label>
                  <br>
                  <textarea required v-model="re.text" class="form-control " rows="5"></textarea>
                </div>
                <div class="col-sm-2">
                  <input  class="forminput w-100 btn mt-4" type="submit" :value="$t('sendrequest')">
                <div v-if="error!=null">{{ error.errors }}</div>
                </div>

              </div>
              <div class="form-group">
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import json from '~/locales/listcountry.json';

  export default {
    name: "Request",
    props:['page'],
    data() {
      return {
        settingcomment:null,
        country: json,
        error:null,
        re:{
          name:null,
          lastname:null,
          email:null,
          phone:null,
          country:null,
          subject:null,
          text:null,
          page:this.page,

        }
      }
    },
    methods:{
      sendrequest(){
        let that=this;
        that.$axios.post(this.$url+'comment',this.re)
        .then(function (res) {

        }) .catch((error) => {
          that.error=error.errors;
        });
      },
      loadsettingcomment(){
        let that=this;
        this.$axios.get(this.$url+'commentsetting/'+this.$i18n.locale)
        .then(function (res) {
          that.settingcomment=res.data;
        })
      }
    },
    beforeMount() {
      this.loadsettingcomment();
    }

  }
</script>

<style scoped>

</style>
