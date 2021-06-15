<template>
<div class="bgbgg mt-3">
  <div class="linebar"></div>
  <div v-if="setting!=null" class="linefootbar">
      <div class="">
        <div class="row m-0 pt-3 ">
          <div class="col-sm-5  col-xs-12">
               <div class="boxfooter boxfooter2">
              <div class="text-center pt-4">
                <a :href="'/'+$i18n.locale+'/contactus'">
                         <img class="maps" src="/map.png"  width="90%">
                </a>

              </div>
             </div>

          </div>
            <div class="col-sm-2  col-xs-12">
              <div class="text-center">
                <img src="/machine.png" width="150">
            <div>
              <hr>
              <img  class="rotate-vert-center"  :src="$storage+'/media/setting/1/orginal/logo.png?=5710'" width="150px">
              <h4 class="text-white" style="font-size: 12px; margin-top: 10px;"><strong>Notrika Sanat Diaco Company</strong></h4>

            </div>
              </div>
          </div>
           <div class="col-sm-5  col-xs-12">

  <div class="boxfooter">a

     <ul class="myfootrtlist" dir='rtl'>
              <li ><a><img src="/asset/pin.svg" width="20px">  <strong v-text="$t('Address')"></strong>: <span v-text="setting.address"></span></a></li>
              <li ><a class="text-white" :href="'tel:info@diaco-sanat.com'" > <img src="/asset/email.svg" width="20px"> <strong v-text="$t('Email')"></strong>:  <span v-text="'info@diaco-sanat.com'"></span>  </a></li>
              <li ><a  class="text-white" :href="'tel:0098'+setting.phone"><img src="/asset/outgoing-call.svg" width="20px">    <strong v-text="$t('specialphone')"></strong>: <span v-text="setting.phone" dir="ltr"></span>  </a></li>
              <li ><a  class="text-white" :href="'tel:00982632317891'">  <img src="/asset/fax.svg" width="20px">   <strong v-text="$t('phone')"></strong>: <span v-text="'۰۲۶-۳۲۳۱۷۸۹۱-۴'" dir="ltr"></span> </a></li>


            </ul>
    <div class=" text-center nnn">
    <div class="">
           <a :href="setting.instagram" class="p-1"   >  <img src="/asset/newicon/instagram-symbol.png" width="20px" > </a>
      <a :href="setting.whatsapp"  class="p-1"  ><img src="/asset/newicon/whatsapp(2).png" width="20px" ></a>
      <a :href="setting.linkedin"  class="p-1"   ><img src="/asset/newicon/linkedin.png" width="20px" ></a>
      <a :href="setting.twitter"  class="p-1"   ><img src="/asset/newicon/twitter(2).png" width="20px" ></a>
      <a :href="setting.telegram" class="p-1"    > <img src="/asset/newicon/telegram(2).png" width="20px"></a>
      <a :href="setting.facebook"  class="p-1"   ><img src="/asset/newicon/facebook-app-symbol.png" width="20px" ></a>

      <a href="https://www.aparat.com/diaco.sanat"  class="p-1"   ><img src="/aparatw.png" width="20px"></a>

    </div>
    </div>
                </div>
          </div>



        </div>
      </div>
  </div>
  <div class="linebar linebar2">
    Powered By AfrangArt &copy; TISS Engine 2  <span v-text="new Date().getFullYear()"></span>
  </div>

</div>
</template>

<script>
  import Showarticle from "~/components/view/showarticle";
    export default {
        name: "footers",
      components: {Showarticle},
      data(){
          return{
            setting:null,
            service:null,
            footer:null,
            mission:{
              en:'our_mission_en',
              fa:'our_mission_en',
              ar:'our_mission_en',
            },
            services:{
              en:'sectionen',
              fa:'sectionfa',
              ar:'sectionar',
            }
          }
      },
      methods:{
          loadsetting(){
          let that=this;
            that.$axios.get(this.$url+'contactus',{
              params:{
                lang:that.$i18n.locale
              }
            })
            .then(function (response) {
                that.setting=response.data;
            })
            that.$axios.get(this.$url+'blog/'+this.services[that.$i18n.locale],{
              params:{
                lang:that.$i18n.locale
              }
            })
              .then(function (response) {
                that.service=response.data;
              })
          }
      },
      beforeMount() {
      },
      mounted() {
          this.loadsetting();
      }
    }
</script>

<style scoped>
.bgbgg{
  background-color: #333f48;
}
.linebar{

}
.linebar2{
text-align: center;
color:#fff;
font-size: 10px;
font-family: Arial, Helvetica, sans-serif,'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

.boxfooter{
  background: #00a7ac;

  box-shadow: inset 189px 10px 107px 14px rgb(32, 182, 182);
  margin-top: -16px;
  width: 100%;
  height:350px;
  color:#fff;
  border-radius: 0px 0px 25px 0px;
}
.boxfooter2{
    border-radius: 0px 0px 0px 25px;

}
.boxfooter2 img{
  border-radius: 15px;;
  height: 70%;
}
  .mylistfooter{
    list-style: none;

  }
.mylistfooter li a{color:black; text-decoration: none; color: darkred;}
.mylistfooter li a:hover{font-weight: bold;}
  .lasttitlefootertext{ font-size: 25px;}
  .myfootrtlist {
    text-align: right;;
    padding: 15px;
    list-style: none;
  }
  .myfootrtlist li{
    direction: rtl;
    margin-top: 5px;
    padding-bottom: 15px;



  }
  .myfootrtlist li {

  }
  .myfootrtlist li div::after{

  }
  .maps{
  }
.nnn a span {
  font-size: 30px;
  color: #fff;
}
  .nnn a {

    color: #ffffff;
    font-size: 15px;
    text-align: center;
    margin: 0px;
    text-align: center;

  }
  .myfootrtlist *{
    font-size: 20px;
  }
  .text-white:hover{
    text-decoration: none;
  }
.rotate-vert-center {
  -webkit-animation: rotate-vert-center 10s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
  animation: rotate-vert-center 10s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
}
@keyframes rotate-vert-center{0%{transform:rotateY(0)}100%{transform:rotateY(360deg)}}
</style>
