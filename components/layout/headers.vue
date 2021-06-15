<template>
<div class="mmmms ">
    <div class="row m-0 " v-if="setting!=null">
      <div class="col-sm-1"></div>
      <div class="col-sm-2">
        <div>
          <div class="row">
            <div class="col-sm-6">

            </div>
            <div class="col-sm-6 pt-4" v-if="contactus!=null">
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 text-center">
          <menus></menus>
      </div>
      <div class="col-sm-2 text-center">
        <img class="m-4" :src="this.$storage+'media/setting/1/orginal/'+setting.logo" width="50%">
      </div>
      <div class="col-sm-1"></div>
    </div>
  <hr>
</div>
</template>

<script>
    import Menus from "~/components/layout/menus";
    export default {
        name: "headers",
      components: {Menus},
      data(){
          return{
            active:false,
            setting:null,
            contactus:null,
            productgroup:null,
            productshow:null,
            menus:{
              0:{
                name:'home',
                url:'/'
              },
              1:{
                name:'product',
                url:'/'+this.$i18n.locale+'/product'
              },
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
            }
          }
      },
      methods:{
        showitem(index){

          this.active=true;
          this.productshow=this.productgroup[index];
        },
        loadsetting(){
          let that=this;
          this.$axios.get(this.$url+'setting').then(function (res) {
            that.setting=res.data;
          });

        },
        loadproductgroup(){
          let that=this;
          that.$axios.get(this.$url+'contactus',{
            params:{
              lang:that.lang
            }
          })
            .then(function (response) {
              that.contactus=response.data;
            });
          this.$axios.get(this.$url+'pgroup',{
            params:{
              parent:0
            }
          }).then(function (res) {
            that.productgroup=res.data;
          })

        }
      },
      mounted() {
          this.loadsetting();
          this.loadproductgroup();
      }
    }
</script>

<style scoped>
.menuitem li{
  float: right;
  padding: 15px;
  list-style: none;
  color: #333333;
}
.menuitem{
  text-align: center;
  width: 100%;
  align-content: center;
}
  .menuitem li a{
    color: #333333;;
  }
  .text-bold{
    font-weight: bold;
    margin-top: 20px;
  }
  .mmmms{
  }
  .bg-gray{
    background-color: grey;
    color:#fff;
  }
</style>
