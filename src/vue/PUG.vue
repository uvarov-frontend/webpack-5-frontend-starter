<template lang="pug">
section.b-section
	.container
		p.__message._green {{ message }}
		img(src="~@/img/vuejs-logo.jpg", :alt="message").__img
</template>

<script>
export default {
	name: 'vue-pug',
	data() {
		return {
			message: 'Vue PUG components',
		};
	},
	mounted() {
	},
};
</script>

<style lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';

.section {
	text-align: center;
	min-height: 100px;
	// background-image: url('@/img/webpack-logo.svg');

	&__message {
		&_green {
			color: $green;
		}
	}

	&__img {
		max-width: 100px;
	}
}
</style>
