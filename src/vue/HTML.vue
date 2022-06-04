<template>
<section class="section-vue">
	<div class="container">
		<p class="section-vue__message section-vue__message_green">
			{{ message }}
		</p>
		<img class="section-vue__img" src="~@/img/vuejs-logo.jpg" :alt="message">
	</div>
</section>
</template>

<script>
export default {
	name: 'vue-html',
	data() {
		return {
			message: 'Vue HTML components',
		};
	},
	mounted() {
	},
};
</script>

<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';

.section-vue {
	text-align: center;
	min-height: 100px;
	// background-image: url('@/img/webpack-logo.svg');

	&__message {
		&_green {
			color: seagreen;
		}
	}

	&__img {
		max-width: 100px;
	}
}
</style>
