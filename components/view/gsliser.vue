<template>
  <div class="container-fluid mt-5">

    <template v-if="sliders!=null">
      <carousel :perPage="3">
        <slide v-for="(item,index) in sliders" :key="index">
          <b-card

            img-alt="Image"
            img-top
            tag="article"

            class="mb-2 text-center"
          >

            <template v-if="item.image!=null">

              <b-img-lazy  height="300"  :src="$storage+'media/GroupProduct/'+item.id+'/thump/'+item.image" > </b-img-lazy>
            </template>
            <template v-if="item.image==null">

              <b-img-lazy  width="100%" height="250px"   :src="'/noimage.png'" > </b-img-lazy>
            </template>

            <b-card-title  style="font-size: 25px; margin-top: 20px; height: 60px;" :title="item.name"></b-card-title>

            <b-button :href="'/'+$i18n.locale+'/product/'+item.url"  class="btn btn-light" v-text="$t('readmore')"></b-button>
          </b-card>

        </slide>

      </carousel>
    </template>


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
      sliders:null
    }
  },
  methods:{
    loadgroup(){
      let that=this;
      this.$axios.get(this.$url+'pgroup',{
        params:{
          lang:that.url
        }
      })
        .then(function (res){
          that.sliders=res.data;
        })
    }
  },

  mounted() {
    this.loadgroup();
  }

}
</script>

<style scoped>

</style>
