import { createApp } from 'vue';
import VuePUGComponent from '@/vue/PUG.vue';

const AppSelector = document.querySelector('#vue-app');

if (AppSelector) createApp(VuePUGComponent).mount(AppSelector);

document.addEventListener('DOMContentLoaded', () => {
	const preloader = {
		preloader: document.querySelector('#preloader'),
		progress: undefined,

		loaded() {
			const loader = setInterval(() => {
				if (this.progress.value === this.progress.max) {
					clearInterval(loader);
					this.preloader.classList.add('is-loaded');
				} else {
					this.progress.value += 1;
				}
			}, 5);
		},

		init() {
			if (!this.preloader) return;
			this.progress = this.preloader.querySelector('progress');

			this.loaded();
		},
	};

	preloader.init();
});
