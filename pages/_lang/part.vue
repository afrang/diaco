<template>
      <div class="container-fluid mt-3">
        <blog-show norreadmore="true" :url="servicegroup[$i18n.locale]" ></blog-show>
      </div>
</template>

<script>
    import BlogShow from "~/components/view/BlogShow";
    export default {
        name: "services",
      components: {BlogShow},
      data(){
          return{
            servicegroup:{
              en:'parten',
              fa:'part',
              ar:'partar',
            },
          }
        },
      beforeMount() {
        this.$i18n.locale = this.$route.params.lang;

      }
    }
</script>

<style scoped>

</style>
