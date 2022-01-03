import Vue from 'vue/dist/vue.esm';

Vue.config.productionTip = false;
Vue.component('vue-html', require('@/vue/HTML.vue').default);

// eslint-disable-next-line no-new
new Vue({
	el: '.wrapper',
});
