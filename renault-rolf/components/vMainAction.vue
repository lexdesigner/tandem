<template>
	<div class="main-form">
		<div class="container main-form__wrapper">
			<p>
				<!-- Забронируйте свой новый RENAULT <br />на лучших условиях уже сейчас! -->
				Только до конца {{ month }} <br />большие скидки в РОЛЬФ до
				<b>{{ maxBenefit }}</b> руб.
			</p>
			<!-- <callback-form /> -->
			<v-timer />
		</div>
	</div>
</template>

<script>
// import callbackForm from "/components/forms/callbackForm";

import vTimer from "/components/vTimer";
export default {
	components: {
		// callbackForm
		vTimer
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
.main-form
	position: absolute
	left: 0
	width: 100%
	bottom: -96px
	z-index: 2
.main-form__wrapper
	display: flex
	background-color: #fff
	box-shadow: 0px 14px 80px rgba(0, 0, 0, 0.1)
	border-radius: 5px
	padding: 30px 100px
	align-items: center
	justify-content: space-between
	p
		font-size: 24px
		line-height: 1.3
		color: #333
	form
		.el-input__inner
			width: 356px
		.el-form-item
			margin-bottom: 0
@include lg-desktop
	.main-form__wrapper
		padding: 20px
	.main-form
		bottom:0
		transform: translateY(100%)
@include md-desktop
	.main-form__wrapper
		flex-wrap: wrap
		justify-content: center
		text-align: center
		p
			width: 100%
			margin-bottom: 20px
@include sm-mobile
	.main-form__wrapper form .el-input__inner
		width: 290px
		display: block
		margin-left: auto
</style>
