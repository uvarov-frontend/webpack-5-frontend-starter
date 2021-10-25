import '../modules/js-test';

// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue/dist/vue.esm';

Vue.config.productionTip = false;
// eslint-disable-next-line import/no-unresolved
Vue.component('vue-pug', require('@/vue/PUG.vue').default);

// eslint-disable-next-line no-new
new Vue({
	el: '.wrapper',
});

console.log('JS для PUG страницы');
