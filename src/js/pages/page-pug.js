import preloader from '@/js/modules/preloader';
import { createApp } from 'vue';
import VuePUGComponent from '@/vue/PUG.vue';

const AppSelector = document.querySelector('#vue-app');

if (AppSelector) createApp(VuePUGComponent).mount(AppSelector);

document.addEventListener('DOMContentLoaded', () => {
	preloader.init();
});
