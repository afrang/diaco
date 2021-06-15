<template>
      <div class="container-fluid mt-3">
        <blog-show :url="servicegroup[$i18n.locale]" ></blog-show>
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
              en:'newsen',
              fa:'newsfa',
              ar:'newsar',
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
