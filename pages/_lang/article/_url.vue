<template>
  <div class="container artilces mt-3" >
    <template v-if="article!=null">

      <h1  v-text="article.name"></h1>
      <hr>

      <show-article :text="article.text"></show-article>
    </template>

  </div>
</template>

<script>
import ShowArticle from "~/components/view/articleshow";
export default {
  components: {ShowArticle},
  data(){
    return{
      article:null,
      description:null,
      keywords:null,
      title:null,
    }
  },

  name: "index",
  mounted() {
    let that=this;
    this.$axios.get(this.$url+'article/'+this.$route.params.url).then(function (res){
      that.article=res.data.data;
      that.title=res.data.data.name;
      that.description=res.data.data.description;
      that.description=res.data.data.keywords;
    });

  },

  head () {
    return {
       title: this.title,
      meta: [
      //    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content:this.description },
        { hid: 'keywords', name: 'keywords', content:this.keywords },
      ]
    }
  }
}
</script>

<style scoped>
.artilces *{
  text-align: right;
}
</style>
