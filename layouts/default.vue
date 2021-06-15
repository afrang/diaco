<template>
  <div>
    <headers></headers>

    <nuxt />
    <footers></footers>

  </div>
</template>
<script>
  import headers from "~/components/layout/headers";
  import Footers from "~/components/view/footers";
  export default {
    components:{
      Footers,
      headers
    },
    beforeCreate() {
      if(this.$route.params.lang){
        this.$i18n.locale=this.$route.params.lang;

      }

    }

  }
</script>
<style>
  @import "http://test.diaco-sanat.com/icofont/icofont.min.css";
  @font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: normal;
    src: url('/IranSans/Farsi_numerals/webFonts/fonts/eot/IRANSansWeb(FaNum).eot');
    src: url('/IranSans/Farsi_numerals/webFonts/fonts/eot/IRANSansWeb(FaNum).eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
    url('/IranSans/Farsi_numerals/webFonts/fonts/woff2/IRANSansWeb(FaNum).woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
    url('/IranSans/Farsi_numerals/webFonts/fonts/woff/IRANSansWeb(FaNum).woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
    url('/IranSans/Farsi_numerals/webFonts/fonts/ttf/IRANSansWeb(FaNum).ttf') format('truetype');
  }

  html *{
    font-family: IRANSans !important;

  }
html {
  scroll-behavior: smooth;
}

</style>
