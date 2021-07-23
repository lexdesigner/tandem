<template>
	<main id="main">
		<div class="container">
			<div class="main-title">
				<h1>
					<!-- Грандиозная <br />распродажа <span class="title_accent">RENAULT</span> -->
					Только до конца {{ month }} <br />распродажа
					<span class="title_accent">RENAULT</span>
				</h1>
				<ul class="main-benefits">
					<li>В кредит от 0%</li>
					<li>КАСКО в подарок</li>
					<li>Скидки до {{ maxBenefit }} ₽</li>
					<li>Обмен на ваше авто!</li>
				</ul>
			</div>
		</div>

		<v-main-action />
	</main>
</template>

<script>
import vMainAction from "/components/vMainAction";
export default {
	components: {
		vMainAction
	},
	computed: {
		maxBenefit() {
			return this.$store.getters["cars/maxBenefit"].toLocaleString();
		},
		month() {
			const date = new Date();
			return this.$store.getters["info/months"](date.getMonth());
		}
	}
};
</script>

<style lang="sass">
#main
	margin-top: 131px
	background-image: url('~assets/img/bg.jpg')
	background-size: cover
	padding-top: 60px
	min-height: 540px
	padding-bottom: 50px
	margin-bottom: 196px
	position: relative
	background-position: center center
.main-title
	display: flex
	align-items: center
	justify-content: space-between
h1
	font-size: 48px
	line-height: 130%
	color: #333
	max-width: 510px
	width: 100%
.title_accent
	position: relative
	z-index: 1
	&::after
		content: ''
		bottom: 7px
		left: 0
		width: 100%
		height: 8px
		background-color: $accent
		z-index: -1
		position: absolute
.main-benefits
	list-style-type: none
	display: flex
	flex-wrap: wrap
	justify-content: flex-end
	li
		width: 270px
		position: relative
		font-size: 22px
		color: #333
		font-weight: bold
		line-height: 1.3
		margin: 10px 0
		&::before
			content: '•'
			color: $accent
			margin-right: 10px

@include lg-desktop
	#main
		min-height: 340px
		padding-top: 20px
		padding-bottom: 20px
	h1
		font-size: 36px
	.main-benefits li
		font-size: 16px
		margin: 5px 0
		width: 50%


@include md-desktop
	h1
		font-size: 24px
		max-width: 300px
	#main
		min-height: 238px
		margin-top: 70px


@include sm-tablets
	#main
		background-size: 500px
		background-repeat: no-repeat
		background-position: top center
		padding-top: 150px
	.main-title
		flex-wrap: wrap
		justify-content: center
	h1
		text-align: center
	.main-benefits
		justify-content: center
		li
			width: 100%
			text-align: center


@include sm-mobile
	#main
		margin-top: 45px
		margin-bottom: 280px
</style>
