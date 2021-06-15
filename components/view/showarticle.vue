<template>
<div >

  <template v-if="data!=null">
    <articleshow  :text="data.data.text"></articleshow>

  </template>
</div>
</template>

<script>
  import articleshow from "~/components/view/articleshow";
    export default {
        components:{
          articleshow
        },
        props:['url'],
        data(){
          return{
            data:null
          }
        },
        name: "showarticle",
        methods:{
          loadarticle(){
            let that=this;
            that.$axios.get(this.$url+'article/'+this.url)
            .then(function (response) {
              that.data=response.data
            })
          }
        },
        mounted() {
          this.loadarticle();
        }
    }
</script>

<style scoped>

</style>
