<template>
  <div class=" mt-3 mb-3 p-5">
  <div v-if="setting!=null">
  <div class="about-section">
  <h1>{{ $t('contactus') }}</h1>
</div>

<div class="row">
  <div class="column">
    <div class="card">
    <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=51.029884815216064%2C35.76714665753144%2C51.04342460632325%2C35.77492887568977&amp;layer=mapnik&amp;marker=35.77103786180268%2C51.03665471076965" style="border: 1px solid black"></iframe><br/><small></small>
      <div class="container">
        <p class="title text-center">
          <a ><img src="/pin.png" width="20"><strong v-text="$t('Address')"></strong>: <span v-text="setting.address"></span></a>

        </p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/0001.png" alt="Mike" style="width:100%; height:500px;" >
      <div class="container text-center pt-3 pb-5" dir="rtl">
             <div>    <a  class="text-black" :href="'tel:0098'+setting.phone">   <img src="/phone-call.png" width="20">  <strong v-text="$t('specialphone')"></strong>: <span v-text="setting.phone" dir="ltr"></span>  </a></div>
                          <div>    
                             <a  class="text-black" :href="'tel:00982632317891'">   <img src="/phone-call.png" width="20">  <strong v-text="$t('phone')"></strong>: <span v-text="'۰۲۶-۳۲۳۱۷۸۹۱-۴'" dir="ltr"></span> فکس داخلی ۵ </a>
            </div>
      </div>
    </div>
  </div>
  
  <div class="column">
   <div class="card">
      <img src="/0012.png" alt="Mike" style="width:100%; height:500px;" >
      <div class="container text-center pt-4 pb-5" dir="rtl">
            <a class="text-black" :href="'tel:info@diaco-sanat.com'" > <img src="/email.png" width="20"> <strong v-text="$t('Email')"></strong>:  <span v-text="'info@diaco-sanat.com'"></span>  </a>
    
      </div>
    </div>
  </div>
</div>

            
            </div>
    <br/>

 
  </div>
</template>

<script>
    export default {
      name: "contactus",
      data() {
        return {
          setting: {},

        }
      },
      beforeMount() {
        let that = this;
        this.$i18n.locale = this.$route.params.lang;

        that.$axios.get(this.$url + 'contactus', {
          params: {
            lang: that.$i18n.locale
          }
        })
          .then(function (response) {
            that.setting = response.data;
          })
      },
      head () {
        return {
          title: 'IOG ',
          meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content:'IOG' },
            { hid: 'keywords', name: 'keywords', content:'IOG'},
          ]
        }
      }
    }
</script>

<style scoped>
.list-group li{list-style: none;}
.text-black *{ color:#000 !important;}
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
