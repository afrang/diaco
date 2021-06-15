<template>
<div class="text-center">
  <hr>
  <div class="container">
    <show-article :text="abouttext.text"></show-article>

  </div>
</div>
</template>

<script>
    import ShowArticle from "~/components/view/articleshow";
    export default {
      name: "aboutus",
      components: {ShowArticle},
      data() {
        return {
          abouttext: {},
          about: {
            en: 'Abouten',
            fa: 'Aboutfa',
            ar: 'Aboutar',
          },
        }
      },
      beforeMount() {

        let self = this;
        self.$axios.get(this.$url + 'article/' + this.about[this.$i18n.locale])
          .then(function (res) {
            self.abouttext = res.data.data;
          });

      },
      head () {
        return {
          title: this.abouttext.name,
          meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content:this.abouttext.name },
            { hid: 'keywords', name: 'keywords', content:this.abouttext.name },
          ]
        }
      }
    }
</script>

<style scoped>

</style>
