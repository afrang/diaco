import Vue from 'vue'

Vue.prototype.$storage ='http://api.diaco-sanat.com/';
Vue.prototype.$url ='http://api.diaco-sanat.com/api/';
import vSelect from 'vue-select';

Vue.component('v-select', vSelect);
import 'vue-select/dist/vue-select.css';
export default ({app}) => {
  app.$url = 'http://api.diaco-sanat.com/api/'
}
