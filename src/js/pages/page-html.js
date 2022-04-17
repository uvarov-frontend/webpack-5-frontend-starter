import { createApp } from 'vue';
import VueHTMLComponent from '@/vue/HTML.vue';

const AppSelector = document.querySelector('#vue-app');

if (AppSelector) createApp(VueHTMLComponent).mount(AppSelector);
