<template>
  <div class="container-fluid">
    <h1 class="text-center" v-text="$t(blog.name)"></h1>
    <hr>
   
    <div class="container">
      <div class="row mt-3" v-if="blog.article!=null">


          <div :key="i" v-for="(item,i) in blog.article.data" class="card col-sm-4 col-xs-12 mt-4" >
            <img class="imgservice" :src="$storage+'media/Articles/'+item.id+'/orginal.png'">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <a v-if="norreadmore!='true'" :href="'/'+$i18n.locale+'/article/'+item.url" class="btn btn-primary" v-text="$t('readmore')"></a>
            </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
    import Showarticle from "~/components/view/showarticle";
    import ShowArticle from "~/components/view/articleshow";
    export default {
        name: "BlogShow",
      components: {ShowArticle, Showarticle},
      props:{
       norreadmore:{
          default: false

        },
        url:{

        },



      },
      data(){
          return{
            blog:{}
          }
      },
      beforeMount() {
        let self=this;
        self.$axios.get(this.$url+'blog/'+this.url)
          .then(function (res) {
            self.blog=res.data;
          });
      },


      head () {
        return {
          title: this.blog.name,
          meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content:this.blog.description },
            { hid: 'keywords', name: 'keywords', content:this.blog.keywords },
          ]
        }
      }
    }
</script>

<style scoped>
.imgservice{height: 300px; width: 100%;}
</style>
