<template>
<section class="section">
	<div class="container">
		<p class="section__message section__message_green">
			{{ message }}
		</p>
		<img class="section__img" src="~@/img/vuejs-logo.jpg" :alt="message">
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
