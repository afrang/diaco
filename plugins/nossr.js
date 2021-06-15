import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import scrollaniamtion from "~/plugins/scrollaniamtion";
Vue.directive('scrollaniamtion',scrollaniamtion);
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import carousel from 'v-owl-carousel'

Vue.component('icarousel', carousel);
