<template>
  <div>
    <firstpage lang="fa"></firstpage>
  </div>
</template>

<script>
import Firstpage from "../components/view/firstpage";
export default {
  name: "index",
  components: {Firstpage},
  layout:'firstpage',
  beforeMount() {
    this.$i18n.locale = 'fa';
  },

  async asyncData({ app,$axios  }) {
    try {
      let setting = await  $axios.$get(app.$url+'setting',
        {params:{lang:app.i18n.locale } })
      return {
        setting
      }
    }

    catch(error){
    }

  },
  head(){
    return{
      title: this.setting.webname,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.setting.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.setting.keywords
        },
      ],
    }
  }


}
</script>

<style scoped>

</style>
