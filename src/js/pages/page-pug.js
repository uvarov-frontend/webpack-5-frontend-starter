import Vue from 'vue/dist/vue.esm';
import preloader from '@/js/modules/preloader';

Vue.config.productionTip = false;
Vue.component('vue-pug', require('@/vue/PUG.vue').default);

// eslint-disable-next-line no-new
new Vue({
	el: '.wrapper',
});

document.addEventListener('DOMContentLoaded', () => {
	preloader.init();
});
