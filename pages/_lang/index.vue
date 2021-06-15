<template>
<div>
  <firstpage :lang="$route.params.lang"></firstpage>

</div>
</template>
fa
<script>
    import Firstpage from "~/components/view/firstpage";
    export default {
        name: "index",
      components: {Firstpage},
      layout:'firstpage',

      beforeMount() {
        this.$i18n.locale = this.$route.params.lang;

        }

    }
</script>

<style scoped>en
html *{
  font-family: Arial !important;
}
</style>
