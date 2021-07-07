<template>
  <div class=" mt-5" v-scrollaniamtion>
  <pre>{{ items }}</pre>
      <div       class="row m-0 line1" v-if="sliders!=null">
        <div

        class="col-sm-4 text-center  boxes col-xs-12 "
        :key="index" v-for="(item,index) in sliders[$i18n.locale]"

        >
          <div        :style="{backgroundImage:'url('+item.icon+')'}">
            <a :href="item.url" class="text-white mylinek">

            <div class="boxess1">
                <span  v-text="$t(item.name)"></span>

            </div>
            </a>
          </div>

        </div>
      </div>


  </div>
</template>

<script>
export default {
  name: "groupslider",
  props:['url'],
  components: {
  },
  data(){
    return{
      data:null,
      langselect:{
          fa:'boxfa',
          en:'boxen',
          ar:'boxar'
      },
      items:null,
      sliders: {
        fa:{
          0:{
            icon:'/g.svg',
            url:'/fa/article/citizen_product',
            name:'Municipalـserviceـcar'
          },

          1:{
            icon:'/02.png',
            url:'/fa/article/fassipdf',
            name:'FASSI جرثقیل '
          },
          3:{
            icon:'/mobile_crane.png',
            //url:'/fa/article/cranefa',
            name:'جرثقیل و بالابر دیاکو صنعت'
          }
        }
      }
    }
  },
  methods:{
    loadgroup(){
     let that=this;
      this.$axios.get(this.$url+'slider/'+this.langselect[this.$i18n.locale])
        .then(function (res){
          that.items=res.data;
        })
    }
  },

  mounted() {
    this.loadgroup();
  }

}
</script>

<style scoped>
.text-blue{
  color: lightseagreen;
}
.boxes{
  min-height: 210px;


}
.boxes > div{
  border: solid 1px #efefef;
  margin: 2px;
  height: 200px;
  border-radius: 15px;
  padding-top: 20px;
-webkit-box-shadow: 4px 4px 36px -7px rgba(184,182,184,1);
-moz-box-shadow: 4px 4px 36px -7px rgba(184,182,184,1);
box-shadow: 4px 4px 36px -7px rgba(184,182,184,1);}
.boxess1{
  display: none;
 background-color: rgba(0, 158, 141, 0.78);
  width: 100%;
  height: 60px;
  overflow: hidden;
    border-radius:  0px 0px 15px 15px;
    padding-top: 15px;
    margin-top: 120px;

}
.boxes:hover .boxess1 {  display: block; }
.enter .line1{
  animation-name: scale-up-hor-top-line;
height: 0%;

  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
}
@keyframes scale-up-hor-left-line {
  0%{
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    height: 0%;

  }
  100%{
    height: 100%;

    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
  }

}
  .boxes div{
    background-size: 100% 100%;
  }
  .mylinek:hover{
    text-decoration: none;
    font-weight: bold;
    color: yellow;
  }
</style>

