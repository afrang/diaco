<template>
  <div>
    <template v-if="product!=null">
      <template v-if="product['data']">
        <b-card
          :img-src="$storage+'media/Product/'+product['data']['id']+'/thump/'+product['data']['image']"
          img-alt="Image"
          img-top
          tag="article"
        img-height="350"
          class=" text-center "
        >


          <b-button :href="'/product/'+product['data']['url']"  class="text-center w-100" dir="rtl" variant="light">
            <span>{{ product['data']['name'] }}</span>
          </b-button>
        </b-card>
      </template>
    </template>
  </div>

</template>

<script>
  import VueNumeric from 'vue-numeric';

  export default {
        name: "thumpproductfirstpage",
        props:['product'],
    components: {
      VueNumeric
    }
    }
</script>

<style scoped>

</style>
