<template>
  <div v-if="slider!=null">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fade
      indicators
      background="#000"


    >
      <!-- Text slides with image -->
        <b-carousel-slide
        :key="index"

        v-for="(item,index) in slider.todetail"

        :img-height="600"
        :img-src="$storage+'media/gallery/'+item.id+'/orginal/'+item.file"
      >
          <template v-slot:img>
            <img
              class="d-block class-name animate__animated animate__slower animate__pulse "
              style="max-height:750px;"
              width="100%"
              :src="$storage+'media/gallery/'+item.id+'/orginal/'+item.file"
              alt="image slot">
              <div class="imggrident">
              </div>
          </template>


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
        },

      },
      data(){
        return{
          slider:null
        }
      },
        methods:{
          loadslider(){
            let that=this;

            this.$axios.get(this.$url+'slider',{
              params:{
                url:this.name,
                id:this.id,
              }
            }).then(function (res) {
              that.slider=res.data;
              that.$forceUpdate();
            })
          }
        },
      mounted() {
          this.loadslider();
      }
    }
</script>

<style >
.carousel-indicators{
  margin-left: -140px;
  position: absolute;
  z-index: 6000;
}
.carousel-indicators li{

     background-color: #d8d6d6;
    width: 14px;
    height: 14px;
    border-radius: 15px;
    border: 1px solid #00a8ad;
}
.carousel-indicators .active {
  background-color: #005757;
  border: solid 1px #ffffff;
}

.mig img{
}
.navbarcss{
      position: relative;
-webkit-box-shadow: inset -9px -47px 26px -20px rgba(235,235,235,1);
-moz-box-shadow: inset -9px -47px 26px -20px rgba(235,235,235,1);
box-shadow: inset -9px -47px 26px -20px rgba(235,235,235,1);
  background-color: #ffffff;
}
.imggrident{
  background: rgb(65,65,65);
background: linear-gradient(0deg, rgb(68, 68, 68) 0%, rgba(41,41,41,0) 25%, rgba(75,75,75,0) 100%);
width: 100%;
height: 300px;
position: absolute;
margin-top: -300px;;
}
.carousel-control-prev{
  background-color: #005757;
  width: 45px;
  height: 45px;
  margin-top: 15%;
  border-radius: 15%;
  padding: 15px;
}
  .carousel-control-next{
    background-color: #005757;
    width: 45px;
    height: 45px;
    margin-top: 15%;
    border-radius: 15%;
    padding: 15px;
  }
</style>
