<template>
<div class=" text-right p-3" dir="rtl">
  <hr>
  <div class="text-center">
    <h2 @click="loadgroups" class="text-center  text-bold mt-5 mb-4 titlepage" v-text="$t('productsgroup')"></h2>

  </div>
  <div v-if="group!=null" dir="ltr" class="text-center">
    <b-button-group dir="ltr">
      <nuxt-link v-for="(i,g) in group" class="btn btn-dark" :key="g" :to="'#'+i.url">
          {{ i.name }}
      </nuxt-link>
    </b-button-group>
  </div>
  <ul v-for="(i,index) in group" :key="index">
      <li class="listofaddtrss"  >
        <h5 :id="i.url" v-text="i.name"></h5>
        <hr>
       <div class="row">
         <div v-for="(item,iv) in i.to_product" :key="iv" class="col-sm-3 col-xs-12  ">
                 <div class="card" data-aos="flip-down"  data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
              <a :href="'/'+$i18n.locale+'/detail/'+item.url">

                <template v-if="item.tomaster_image">
                  <div class="myimage">
                    <img class="thumnail" :src="$storage+'media/Product/'+item.id+'/medium/'+item.tomaster_image.file">

                  </div>
                </template>
                <div class="btn mnnmn ">
                  <h4 class="myttitlema" v-text="item.name"></h4>
                  <h5 class="myttitlemas text-left" v-text="item.model"></h5>

                </div>
              </a>
            </div>

         </div>
       </div>
      </li>

  </ul>

</div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            group:[]
          }
      },
      methods:{
          loadgroups(){
            let that=this;
            this.$axios.get(this.$url+'pgroup',{
              params:{
                lang:that.$route.params.lang
              }
            })
            .then(function (res) {
              that.group=res.data;
            })
          }
      },
      beforeMount() {


      },
      mounted() {
          this.loadgroups();
      },
      head () {
        return {
          title: this.$t('Grouplist'),
        }
      }

    }
</script>

<style scoped>
.backgroundcover{
  background-size: cover;
}
  .box {
    text-align: center;
  }
  .box div img{width: 100%;
  height: 400px;
  align-content: center;

  }
.box div img:hover{
  transform: scale(1.1);
  transition: transform  1s;

}
.box .myimage
{
  width: 100%;
  overflow: hidden;
  height: 400px;
  text-align: center;
  align-content: center;
}
.box div h3{
  font-size: 20px;
  margin-top: 20px;

}
  .nohref{
    color: #333333;
  }
.nohref:hover{
  text-decoration: none;
  color: #333333;
  font-weight: bold;
}
.mytexts{
  position: absolute;
  margin-top:-90px;
  background-color: #bbb8b894;
  z-index: 5000;
  height: 70px;
  text-align: right;
  padding: 6px;
  color: #333;
  font-weight: bold;
  width: 95%;
}
.mytexts h3{
  font-size: 12px;
  font-weight: bold;
}
.titlepage{
  font-weight: bold;
  font-size: 22px;
  border-bottom: solid 1px #a6a6a6;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
}
.titlepages{
  font-size: 14px;
  font-weight: bold;
  margin-top: -15px !important;
  color: rgb(1, 105, 109);
}
.mtss{
  border-radius: 15px;
}

.btn .myttitlema{
  text-align: right;
  font-weight: bold;
  font-size: 15px;
  text-align: right;
}
.myimage img{
  height: 220px;
  width: 100%;
}
.mnnmn{
  width: 100%;
}
.listofaddtrss >h5{
  background-color: #333;
  list-style: none;
  color:#fff;
  font-size: 15px;
  padding: 15px;
  border-radius: 15px;
  margin-top: 15px;
  text-align: center;
}
.listofaddtrss{
  list-style:none;
}
</style>
