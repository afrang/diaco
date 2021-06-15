<template>
<div>
  <template  v-if="product!=null">


    <div class="container text-right">
         <div v-if="product!=null" dir="rtl">
           <div class="row">
             <div class="col-sm-6">
               <strong><h1 v-text="product.name"></h1>  <span v-text="product.model"></span></strong>

             </div>
             <div class="col-sm-6">
               <div class="col-sm-12" v-if="product!=null">


               </div>

           </div>

        <hr>

           </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-xs-12 text-center">
            <template v-if="product.tomaster_image!=null">
              <b-img id="masterimage"  style="width: 70%;" :src="firstpic"  fluid :alt="product.name"></b-img>

            </template>
            <div class="row">
              <div    class="col-sm-2" v-for="(i,index) in product.to_image"  :key="index">
                 <b-card
                      style="height: 100px;"
                      class="m-1 mb-1"

                      :img-src="$storage+'media/Product/'+product.id+'/thump/'+i.file"
                      img-alt="Image"
                      img-top
                      @click="firstpic=$storage+'media/Product/'+product.id+'/orginal/'+i.file ; "

              >

              </b-card>
              </div>

            </div>

          </div>

          <div class="col-sm-12 col-xs-12 mt-4">
     <b-card no-body dir="rtl">
            <b-tabs  justified >
              <b-tab :title="$t('Technical Specifications')" active>
                <b-card-text class="p-4" :dir="$t('rtl')" >
                    <h5   class="text-right "  v-text="$t('Technical Specifications')"></h5>
                  <hr>
                  <show-article class="text-right" :dir="$t('rtl')" :text="product.review"></show-article>
                    <h5   class="text-right "  v-text="$t('moreinfo')"></h5>
                  <hr>
                  <show-article class="text-right" :dir="$t('rtl')" :text="product.description"></show-article>
                 


                </b-card-text>
              </b-tab>

              <b-tab :title="$t('catalog')">
                <b-card-text>
                  <div class="m-3">
                    <h4   class="text-right text-danger"  v-text="$t('catalog')"></h4>
                    <hr>
                        <show-article class="text-right" :dir="$t('rtl')" :text="product.help"></show-article>
                    <b-table dir="rtl"  stacked :items="items">
                                

                      <template v-slot:cell()="data">
                        <span :dir="$t('rtl')" class="text-right" v-html="data.value"></span>
                      </template>

                    </b-table>

                  </div>


                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
          </div>

        </div>
        <div class="text-right container mt-5">

        </div>
        <div class="container mt-5" :dir="$t('rtl')">

        </div>

      </div>

    </div>
    <hr>

    </div>

  </template>


</div>
</template>

<script>
import ShowArticle from "~/components/view/articleshow";
export default {
name: "_url",
  components: {ShowArticle},
  data(){
  return{
    firstpic:null,
    product:null,
    items: [
      {},
    ]
    }
  },
  methods:{
      loadproduct(){
        let that=this;
        this.$axios.get(this.$url+'psearch/'+this.$route.params.url)
        .then(function (res){
          that.product=res.data;
         that.firstpic= that.$storage+'media/Product/'+that.product.id+'/orginal/'+that.product.tomaster_image.file;
        })
      }
  },
  watch: {
    product:function (val){
      let that=this;
      if (val!=null){
        val.to_feature.map(function (value,key) {
          let s=that.$t(value.to_attr.name);
          that.items['0'][s]=value.value;
        });


      }
    }
  },
  mounted() {
  this.loadproduct();
  }
}
</script>

<style >
.modal-content{
 background-color: transparent;
}
.boxinformation{
  width: 300px;
  background-color: rgba(255,0,48,0.66);
  border: solid 1px #c82333;
  text-align: right;
  padding: 25px;
  position: absolute;
  margin-top: -200px;
  right: 100px;
}
.boxinformation h1{color: #fff; font-size: 24px;}
.boxinformation h3{
  font-size: 20px;
}
</style>

