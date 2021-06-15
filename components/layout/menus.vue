<template>
<div>
<ul class="mainmen" dir="rtl">
  <li>
    <a href="/" v-text="$t('home')"></a>
  </li>
   <li>
  </li>
  <li v-if="prodcutlist!=null" @click="showmenuitem" @mouseleave="showmenuitems" >

    <a  class="showshub" >   {{ $t('product') }}  <span class="icofont icofont-curved-down"></span></a>
    <ul  dir="rtl" class="text-right mysubmenu" v-if="showmenu==true" :class="showitems">
          <li>  <a  class="text-white" > {{ $t('cranes') }}</a></li>
         <!-- <li  @click="mfirst"  @mouseleave="mfirstclose">
        <a  class="text-white" >    <span class="icofont text-white icofont-curved-left"></span>{{ $t('cranes') }}</a>
        <ul class="myendmenu" v-if="mf==true">
          <li :key="index" v-for="(item,index) in prodcutlist.find(obj => obj.url == productmenu[lang]['crane']).to_product" ><a  class="text-white" :href="'/'+lang+'/detail/'+item.url" v-text="item.name"></a></li>
        </ul>
      </li> -->
      <!-- :href="'/'+lang+'/detail/'+item.url" !-->
      <li  v-for="item in prodcutlist.find(obj => obj.url == productmenu[lang]['main']).to_product" ><a  class="text-white"  v-text="item.name"></a></li>
      <li  @click="showmenuitemsub"  @mouseleave="showmenuitemsubs">
        <a  class="text-white" >    <span class="icofont text-white icofont-curved-left"></span>{{ $t('cityservice') }}</a>
        <ul class="myendmenu" v-if="showmenuss==true">
          <li v-for="item in prodcutlist.find(obj => obj.url == productmenu[lang]['other']).to_product" ><a  class="text-white" :href="'/'+lang+'/detail/'+item.url" v-text="item.name"></a></li>
        </ul>
      </li>
    </ul>

  </li>
  <li v-for="(item,index) in menus"  :key="index">
    <a :href="item.url" v-text="$t(item.name)"></a>

  </li>

</ul>
</div>
</template>

<script>
    export default {
        name: "menus",
      data(){
          return{
            sub:0,
            showmenu:false,
            showmenuss:false,
            mf:false,
            subitem:0,
            prodcutlist:null,
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
            lang:this.$i18n.locale,
            menus:{

              2:{
                name:'after_sales_service',
                url:'/'+this.$i18n.locale+'/services'
              },
              3:{
                name:'news',
                url:'/'+this.$i18n.locale+'/news'
              },
              4:{
                name:'articles',
                url:'/'+this.$i18n.locale+'/articles'
              },
              5:{
                name:'contactus',
                url:'/'+this.$i18n.locale+'/contactus'
              },
            },
          }
      },
      methods:{
        showitems(){

        },
        showmenuitem(){
          this.showmenu=true;
        },
        showmenuitems(){
          this.showmenu=false;
        },
        showmenuitemsub(){
          this.showmenuss=true;
          this.showmenusss=false;
        },
        showmenuitemsubs(){
          this.showmenuss=false;
          this.showmenusss=false;
        },
        mfirst(){
          this.showmenuss=false;
          this.mf=true;
        },
        mfirstclose(){
          this.showmenuss=false;
          this.mf=false;
        },
      },
      mounted() {
          let self=this;

        self.$axios.get(this.$url+'pgroup',{
          params:{
            parent:0,
            lang:self.lang
          }
        })
          .then(function (res) {
            self.prodcutlist=res.data;
            self.$forceUpdate();
          });
      }
    }
</script>

<style scoped>

  .mainmen{
    padding-top: 15px;
    text-align: right;


  }
.mainmen li{
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;

  direction: rtl;
}
  .mainmen li *{
    font-size: 14px;
    text-align: right;

    font-weight: bold;
    color: #333333;
  }
  .mainmen li *:hover{
    text-decoration: none;
    color: black;
  }
  .mainmen {


  }
  .mainmen  li ul{
    position: absolute;
    background-color: #333333;
    z-index: 5000;
    padding: 0px;
    width: 200px;
  }
  .mainmen li ul li{
    display: block;
    color: #ffffff;

  }
  .mysubmenu{

  }
  .mysubmenu li{
    border-bottom: solid 1px #333333;

  }
  .myendmenu {
    position: absolute;
    margin-top: -20px;
    color: #fff;
    margin-right: 120px;
    text-align: right;
  }
  .mysubmenu li{
    padding:5px;
    background-color: #343434;
    width: 100%;
  }
  .mysubmenu li:hover{
    padding:5px;
    background-color: #111111;
    width: 100%;
  }
  .mainmen li{
    padding-bottom: 5px;
    margin: 0px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .mainmen li::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #22a7ad;
    transition: width .3s;
    margin-top: 5px;
  }

  .mainmen li:hover::after {
    width: 100%;
  //transition: width .3s;
  }

</style>

