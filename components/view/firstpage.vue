<template>
  <div dir="ltr">
    <div v-if="setting!=null" class="">
      <slider  :name="slider[lang]" ></slider>

      <div class="mig text-center" style="position:absolute; z-index: 5000;">
        <div >
          <a  href="#tom" class="mt1"><img   src="/down.png" ></a>
        </div>
      </div>
      <div class="navbarcss bg-white">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-5">
              <div class="row">
                <div class="col-sm-6 text-left pt-2 animate__animated animate__bounce pt-2">
                  <a :href="setting.instagram" class="p-1"   >  <img src="/asset/newicon/instagram-symbol(1).png" width="20px" > </a>
                  <a :href="setting.whatsapp"  class="p-1"  ><img src="/asset/newicon/whatsapp(1).png" width="20px" ></a>
                  <a :href="setting.twitter"  class="p-1"   ><img src="/asset/newicon/twitter(3).png" width="20px" ></a>
                  <a :href="setting.facebook"  class="p-1"   ><img src="/asset/newicon/facebook(1).png" width="20px" ></a>
                  <a :href="setting.telegram" class="p-1"    > <img src="/asset/newicon/telegram(1).png" width="20px"></a>
                  <a href="https://www.aparat.com/diaco.sanat"  class="p-1"   ><img src="/aparat.png" width="20px"></a>
                </div>
                <div class="col-sm-6   animate__animated animate__bounce">
                  <a href="/"><img class="mt-3" style="border-radius:5px;" src="/fa.png" height="20"></a>
                  <a href="/en"> <img  class="mt-3" style="border-radius:5px;"   src="/en.png" height="20"></a>
                  <a href="/ar">   <img  class="mt-3" style="border-radius:5px;"  src="/ar.png" height="20"></a>
                </div>
              </div>
            </div>
            <div class="col-sm-2 text-center">
              <a href="#main" class="glyphicon glyphicon-menu-down"></a>            </div>
            <div class="col-sm-5">
              <menus ></menus>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center dootted" id="tom">
      <div class="dooteddpoint"></div>
      <div class="cyrcless ">
        <img src="/info.png" width="90">
      </div>
      <div class="colorblue animate__backInUp"><strong>{{ $t('AboutDicao') }}</strong></div>
    </div>
    <div class="container mt-4 dddddd">
      <diiv class="row m-0">
        <div class="col-sm-3 col-xs-12 p-4 text-center">
          <img :src="$storage+'media/setting/1/orginal/logo.png?=5710'" width="200">
        </div>
        <div class="col-sm-8 col-xs-12 text-right" dir="rtl" v-if="abouttext!=null">
          <show-article class="color-grey" :text="abouttext.data.text"></show-article>
        </div>
      </diiv>
    </div>
    <div class=" container">
      <gslisers :url="lang"></gslisers>
    </div>
    <div class="gallerybase text-center">
      <p class="mddddds" v-text="$t('Gallery')"></p>

      <img src="/curve.png">
      <div class="row">
        <div class="col-sm-4 col-xs-12"></div>
        <div class="col-sm-4 col-xs-12"></div>
        <div class="col-sm-4 col-xs-12">
          <ul class="itemgallery">
            <li  @click="loadgallery(m)" :class="reditem(m)"  v-for="(m,i) in itemgallery" :key="i"><a>{{ $t(m) }}</a></li>

          </ul>
        </div>
      </div>
      <b-modal id="modal-1" hide-header  hide-footer size="lg"  >
        <p class="my-4">
          <img :src="bigimage" width="100%" @click="$bvModal.hide('modal-1')">
        </p>
      </b-modal>
      <div v-if="gallery!=null" class="mb-4 pb-5 m-3">
        <b-carousel

          :interval="4000"

          indicators
          style="
          margin-left: 4em;
          margin-right: 4em;
          text-shadow: 1px 1px 2px #333;"

        >
          <template v-for="(ie,inex) in gallery">
            <b-carousel-slide   :key="inex">
              <template #img >

                <div class="row m-0" :key="inex">
                  <div  v-for="(i,indexs) in ie" :key="indexs" class="col-sm-3 mt-2">
                    <img   v-b-modal.modal-1  @click="bigimage=$storage+'media/gallery/'+i.id+'/orginal/'+i.file" style="border-radius: 15px; height: 210px;"
                           :src="$storage+'media/gallery/'+i.id+'/thump/'+i.file"  width="100%" >
                  </div>
                </div>
              </template>
            </b-carousel-slide>


          </template>
        </b-carousel>

      </div>




    </div>
    <div class="container mt-4">
      <div class="row mynewbar">
        <div class="col-sm-6 dirtrl animate__flip" >

          <h4 >  <img src="/news.png" width="25px">  | {{ $t('news') }} </h4>
          <b-list-group>
            <template v-if="lastnews!=null">
              <template v-if="lastnews.article!=null">


              </template>
            </template>
          </b-list-group>

          <template v-if="lastnews!=null">
            <template v-if="lastnews.article!=null">
              <b-carousel
                id="carousel-1"
                :interval="4000"

                indicators
                background="#eee"
                img-width="1024"
                img-height="480"
              >

                <b-carousel-slide style="background-color:#fff;" v-for="(i,index) in lastnews.article.data" :key="index">
                  <template #img>
                    <div class=" m-4 mb-5 ">
                      <div class="row">

                        <div class="col-sm-5">
                          <img width="100%" :src="$storage+'media/Articles/'+i.id+'/thump.png'">
                        </div>
                        <div class="col-sm-6 text-right">
                          <h6 class="text-right mlink"><a class="text-grey" :href="'/'+$i18n.locale+'/article/'+i.url">{{ i.name }}</a></h6>
                          <hr>

                          <template v-if="i.description==null">
                            <span v-html="i.description"></span>

                          </template>
                        </div>
                      </div>

                    </div>
                  </template>
                </b-carousel-slide>

              </b-carousel>

            </template>
          </template>
        </div>

        <div class="col-sm-6 dirtrl">
          <h4 >   <img src="/front.jpg" width="25px">  |  {{ $t('articles') }} </h4>

          <div>
            <template v-if="media!=null">
              <template v-if="media.article!=null">
                <b-carousel
                  id="carousel-1"
                  :interval="4000"

                  indicators
                  background="#eee"
                  img-width="1024"
                  img-height="480"
                >
                  <!-- Text slides with image -->

                  <!-- Slides with img slot -->
                  <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                  <b-carousel-slide style="background-color:#fff;" v-for="(i,index) in media.article.data" :key="index">
                    <template #img >

                      <div class=" m-4 mb-5 ">
                        <div class="row">
                          <div class="col-sm-5">
                            <img width="100%" :src="$storage+'media/Articles/'+i.id+'/thump.png'">
                          </div>
                          <div class="col-sm-7 ">
                            <h6 class="text-right mlink"><a class="text-grey" :href="'/'+$i18n.locale+'/article/'+i.url">{{ i.name }}</a></h6>
                            <hr>

                            <template v-if="i.description==null">
                              <span v-html="i.description"></span>

                            </template>
                          </div>
                        </div>

                      </div>

                    </template>
                  </b-carousel-slide>

                </b-carousel>

              </template>
            </template>
          </div>

        </div>
      </div>
      <div>

      </div>
    </div>
    <div  v-if="media!=null" class="container">
      <template v-if="partses!=null">
        <!--    <div v-html="partses.data"></div> -->
        <show-article :text="partses.data['text']"></show-article>


        <hr>
      </template>

    </div>

  </div>



</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

import sliderarticle from "~/components/layout/sliderarticle";
import ShowArticle from "~/components/view/articleshow";
import Slider from "~/components/layout/slider";
import gslisers from "~/components/view/gslisers";
import Menus from "~/components/layout/menus";
export default {
  components: {
    Menus,
    Slider,
    ShowArticle,
    sliderarticle,
    gslisers,
    Hooper,
    Slide


  },
  data(){
    return{
      bigimage:null,
      show:5,
      setting: {},
      abouttext:null,
      servicetext:null,
      lastnews:null,
      partses:null,
      gallery:null,

      prodcutlist:null,
      servicecat:null,
      hooperSettings: {
        infiniteScroll: true,
        centerMode: true,
        autoPlay: true,
        itemsToShow:5,
        playSpeed: 3500,
        breakpoints: {
          2400: {
            itemsToShow: 6
          },
          1800: {
            itemsToShow: 6
          },
          1500: {
            itemsToShow: 6
          },
          1100: {
            itemsToShow: 6
          },
          0: {
            itemsToShow:6
          }
        }
      },
      itemgallery:{
        0:'all', 1:'cranes', 2:'elevators', 3:'CityServices', 4:'projects'
      },
      productmenu:{
        fa:{
          main:'masterfa',
          other:'citizen_product',
          crane:'cranefa',
        },
        en:{
          main:'main',
          other:'encitizenproduct',
          crane:'craneen',
        },
        ar:{
          main:'mainar',
          other:'citizenar',
          crane:'cranear',

        },
      },
      slider:{
        en:'slideren',
        fa:'sliderfa',
        ar:'sliderar',
      },
      servicegroup:{
        en:'ServicesEn',
        fa:'ServicesFa',
        ar:'ServicesEn',
      },
      lang:this.$i18n.locale,
      about:{
        en:'Abouten',
        fa:'anoutfa',
        ar:'aboutar',
      },
      service:{
        en:'serviceen',
        fa:'servicefa',
        ar:'servicear',
      },
      media:{
        en:'mediaen',
        fa:'mediafa',
        ar:'mediaar',
      },
      news:{
        en:'newsen',
        fa:'newsfa',
        ar:'newsar',
      },
      parts:{
        en:'parten',
        fa:'partfa',
        ar:'partar',
      },
      images:{
        en:'firstmenuen',
        fa:'firstmenufa',
        ar:'firstmenuar',
      },
      adverss:{
        en:'firstmenuen',
        fa:'firstmenufa',
        ar:'firstmenuar',
      },
    }
  },
  methods:{
    reditem(i){
      if(this.show==i){
        return 'reditem';
      }else{
        return  '';
      }
    },
    loadfirstpage(){
      let self=this;
      self.$axios.get(this.$url+'article/'+this.about[this.lang])
        .then(function (res) {
          self.abouttext=res.data;
        });
      self.$axios.get(this.$url+'article/'+this.service[this.lang])
        .then(function (res) {
          self.servicetext=res.data;
        });
      self.$axios.get(this.$url+'blog/'+this.servicegroup[this.lang])
        .then(function (res) {
          self.servicecat=res.data;
        });
      self.$axios.get(this.$url+'article/'+this.parts[this.lang])
        .then(function (res) {
          self.partses=res.data;
        });
      self.$axios.get(this.$url+'pgroup',{
        params:{
          parent:0,
          other:this.productmenu[self.lang]
        }
      })
        .then(function (res) {
          self.prodcutlist=res.data;
          self.$forceUpdate();
        });

    },
    loadgallery(filter){

      let self=this;
      self.gallery=filter;
      self.show=filter;
      self.$axios.get(this.$url+'slider',{
        params:{
          url:'Gallery',
          slice:8,
          filter:filter
        }
      })
        .then(function (res) {
          self.gallery=res.data;
        });

    }
  },

  beforeMount() {
    let self=this;
    self.$axios.get(this.$url+'blog/'+this.media[this.lang])
      .then(function (res) {
        self.media=res.data;
      });
    self.$axios.get(this.$url+'blog/'+this.news[this.lang])
      .then(function (res) {
        self.lastnews=res.data;
      });
    self.$axios.get(this.$url+'contactus',{
      params:{
        lang:self.$i18n.locale
      }
    })
      .then(function (response) {
        self.setting=response.data;
      });
    self.loadgallery(null);

  },
  mounted() {
    this.loadfirstpage();

  },



}
</script>

<style>
.carousel-1___BV_indicators_{
  position: absolute;
  z-index: 50000;
}
.reditem{
  color: red !important;
}
.navbarcss{
  height: 46px;
}
.mig{

  width: 100%;
  height: 38px;
  display: block;
  background: url('/bgslider.png') center bottom no-repeat;
  margin: -38px auto 0;
  z-index: 0;
  position: relative;
  text-align: -moz-center;
  text-align: -webkit-center;
  text-align: center;

}
.myfirstsection{
  height: 400px;
  background-size: cover;
}
.mymenu{
  position: absolute;
  z-index: 5000;
}
.mainmenu{
  margin-top: 20px;
}
.mainmenu li{
  float: right;
  list-style: none;
  margin-left: 20px;
}
.mainmenu li a{
  color: #ffffff;
}
.mainmenu li a{
  text-decoration: none;
}
.mainmenu li a:hover{
  font-weight: bold;
}
.blueline{
  height: 60px;
  padding: 7px;
  padding-right: 25px;
  font-size: 32px;
  text-align: right;
  font-weight: bold;
  color: #fff;
  width: 100%;
  background: rgb(241,241,244);
  background: linear-gradient(90deg, rgba(241,241,244,1) 0%, rgba(83,147,183,1) 100%);
}
.myfirstsection div{
  background-color: rgba(51, 51, 51, 0.6);
  width: 200px;
  height: 200px;
  margin-top: 20%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 20px;
}
.myfirstsection div *{
  font-size: 70px;
  color: #fff;
  line-height: 50px;
  font-weight: bold;
}
.liner2{
  height: 20px;
}
.myimg{
  width: 100%;
  height: 200px;
  margin-top: 50px;
  border-radius: 15px 0px 0px 15px;
  border: solid 1px #00C3DA;
}
.firstservicebox{
  background: #444444;
  width: 100%;
  height: 200px;
}
.firstservicebox div{
  font-size: 50px;
  color:#fff;
  font-weight: bold;
  padding-top: -10px;
}
.text-gray{
  color: gray;;

}
.boxradios{
  border: solid 3px #909090;
  height: 300px;
  border-radius: 15px;
  background-color: #f1f1f1;;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.imgservice{
  width: 100%;
  height: 220px;
  border-radius: 15px;
}
.myitems *{
  color:grey !important;;
  text-decoration: none;
}
.labelss{
  display:inline-block;
  font-size: 14px;
  margin-top: 20px;
}
.forminput {
  padding: 7px;
  font-size: 16px;
  border-width: 1px;
  border-color: #CCCCCC;
  background-color: #FFFFFF;
  color: #000000;
  border-style: solid;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(66,66,66,.75);
  text-shadow: 0px 0px 5px rgba(66,66,66,.75);
  width: 300px;

}
.forminput:focus {
  outline:none;
}
.myitems li{
  display: inline-block;
}
.myitems{
  text-align: center;
}
.myitems li *{
  font-size: 15px;
}
.menubar li{
  display: inline-block;
  margin-left: 10px;
  margin-right: 4px;
  font-weight: bold;
}
.menubar{
  direction: rtl;
}
.mmmm{
  background-color: red;
  position: absolute;
  margin-top: 10px;
}
.text-black{
  color: #444444 !important;
}
.dootted{
  margin-top: 20px;

}
.dooteddpoint{
  width: 100%;
  border-bottom: dashed 1px #7F828B;
  height: 1px;;
  margin-top: 45px;
  position: absolute;
}
@media only screen and (max-width: 600px) {
  .dootted{
    width: 100%;
    border-bottom: dashed 1px #7F828B;
    height: 1px;;
    margin-top: 100px;
    position: absolute;
  }
  .dddddd{
    margin-top: 240px !important;
  }
}

.dootted img{
  background-color: #fff;
  z-index: 1000;
  padding: 7px;
  border-radius: 35px;
  position: relative;
}
.cyrcless{
  background-color: #fff;

}
.color-grey *{
  color: #444;
}
.colorblue{
  color:lightseagreen;
}
.gallerybase{
  background-color: #f3f3f3;
  background-image: url("/part2.png");
  background-size: 100% 100%;

  width: 100%;
  min-height: 200px;

  margin-bottom: 10px;

  margin-top: 20px;
}
.dirtrl{
  direction:rtl;
}
.mynewbar * h4{
  font-size: 14px;
  font-weight: bold;
  color: rgb(128, 128, 128);
  border-bottom: solid 1px rgb(69, 73, 78);
  padding-bottom: 10px;
  direction: rtl;
  text-align: right;

}
.list-group li{
  text-align: right;
}
.text-grey{
  color:grey;
}
.mt1 img{
  margin-top: 20px;
}
.mt1 img:hover{
  margin-top: 25px;
  cursor: pointer;
  opacity: 0.8;
}
.itemgallery li{

  display: inline-block;
  margin: 5px;
}
.itemgallery{
  direction: rtl;
  margin-top: 0px;
}
.itemgallery li{
  cursor: pointer;
}
body{
  overflow-x: hidden;
}
.text-grey:hover{
  color: #3b8070 !important;
  text-decoration: none;
}
.mddddds{
  position: absolute;
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin-top: 100px;
  color: #3b8070 !important;
}
.mlink{
  font-size: 12px;
}
</style>

