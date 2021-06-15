<template>
  <div class=" text-right p-3" dir="rtl">
    <hr>
    <div class="text-center">
      <h2 @click="loadgroup" class="text-center  text-bold mt-5 mb-4 titlepage" v-text="$t('productsgroup')"></h2>

    </div>
    <ul v-if="group!=null" >
      <li class="listofaddtrss"  >
        <h5  v-text="group.name"></h5>
        <hr>
        <div class="row">
          <div v-for="(item,iv) in group.to_product" :key="iv" class="col-sm-3 col-xs-12  ">
            <div class="card" data-aos="flip-down"  data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
              <a :href="'/'+$i18n.locale+'/detail/'+item.url">

                <template v-if="item.tomaster_image">
                  <div class="myimage">
                    <img class="thumnail" style="height: 200px;" :src="$storage+'media/Product/'+item.id+'/medium/'+item.tomaster_image.file">

                  </div>
                </template>
                <div class="btn mnnmn pt-3" style="height: 100px; overflow: hidden;">
                  <h3 class="myttitlema" v-text="item.name"></h3>
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
  layout:'mainpage',
  name: "_group",
  data(){
    return{
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: '100%',
        height: '200px',
        class: 'my-5'
      },
      group:[]
    }
  },
  methods:{
    loadgroup(){
      let self=this;
      self.$axios.get(this.$url+'pgroup/'+this.$route.params.group)
        .then(function (res) {
          self.group=res.data;
        })
    }
  },
  mounted() {
    this.loadgroup();
  }
}
</script>

<style >
.myttitlemas{
  font-size: 16px;
  text-align: center;
  color: #fff;
  padding: 25px;

  width: 100%;
  margin: 5px;
}
.myitemss{
  border-radius: 15px;
}
.overlay {
  position: relative;
  width: 50%;
  margin-top: -300px;
  font-size: 100px;
  margin-right: auto;
  margin-left: auto;
  border-bottom: solid 1px #ffffff;
  border-top: solid 1px #ffffff;
  background-color: rgba(163, 163, 163, 0.27);
  padding: 25px;
  color: #fff;

}
.overlay *{
  font-size: 25px;
}
.myimage{
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.myimage img{
  width: 100%;
  height: 200px;
  border-radius: 15px;
}
.myimage img:hover{
  scale:1.1;
}
.mmm{
  margin-left: 20px;
  margin-right: 20px;
}

.myitemss a{
  text-decoration: none;
}
.myimage img{
 height: 120px;
}
.btn .myttitlema{
  text-align: right;
  font-weight: bold;
  font-size: 12px;
}
</style>
