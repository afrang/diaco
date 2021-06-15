<template>
  <div>
    <nuxt />
    <footers></footers>
  </div>
</template>

<script>

  import Footers from "~/components/view/footers";
    import Headers from "~/components/layout/headers";
    export default {
        name: "firstpage",
      components: {Headers, Footers},
      beforeCreate() {
        if(this.$route.params.lang){
          this.$i18n.locale=this.$route.params.lang;

        }

      }
    }
</script>

<style >

  @import "http://test.diaco-sanat.com/icofont/icofont.min.css";

  html {
  scroll-behavior: smooth;
}
</style>
