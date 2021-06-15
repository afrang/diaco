<template>
  <div v-if="slider!=null">

    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      controls
      indicators
      img-width="1024"
      img-height="480"

    >
      <b-carousel-slide
        v-for="item in slider.article.data"
        :img-src="$storage+'media/Articles/'+item.id+'/orginal.png'"
      >
        <a class="btn btn-dark" :href="$i18n.locale+'/article/'+item.url" v-text="$t('readmore')"></a>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
    export default {
        name: "slider",
      props:{
        name:{
          type:String,
          default:null

        },
        height:{
          type:String,
          default: '800px'

        },
        id:{
          type:String,
          default: null
        }
      },
      data(){
        return{
          slider:null,
          services:{
            en:'sectionen',
            fa:'sectionfa',
            ar:'sectionar',
          }
        }
      },
        methods:{
          loadslider(){
            let that=this;
            that.$axios.get(this.$url+'blog/'+this.services[that.$i18n.locale],{
              params:{
                lang:that.$i18n.locale
              }
            })
              .then(function (response) {
                that.slider=response.data;
              });
          }
        },
      mounted() {
          this.loadslider();
      }
    }
</script>

<style scoped>

</style>
