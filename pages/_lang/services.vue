<template>
      <div class="container mt-3">
           <show-article :text="abouttext.data.text"></show-article>
      </div>
</template>

<script>
   import ShowArticle from "~/components/view/articleshow";
    export default {
      name: "aboutus",
      components: {ShowArticle},
      async asyncData({ app,$axios  }) {
        try {
         let about={
            en: 'service_en',
              fa: 'service_fa',
              ar: 'service_ar',
          };

          let abouttext =
            await  $axios.$get(app.$url+'article/'+about[app.i18n.locale])
          return {
            abouttext
          }

        }

        catch(error){
        }

      },
      head () {
        return {
          title: this.abouttext.data.name,
          meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content:this.abouttext.data.description },
            { hid: 'keywords', name: 'keywords', content:this.abouttext.data.keywords },
          ]
        }
      }
    }
</script>

<style scoped>

</style>
