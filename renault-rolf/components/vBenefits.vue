<template>
	<div id="benefits" class="container">
		<h2 v-html="title"></h2>
		<div class="benefits-list">
			<div class="benefits-list--item">
				<img src="~assets/img/wallet.svg" alt="Скидка 10% по госпрограмме" />
				<p class="info">
					<b>СКИДКА<br />10%</b><br />по госпрограмме
				</p>
			</div>
			<div class="benefits-list--item">
				<img src="~assets/img/casco.svg" alt="КАСКО В ПОДАРОК" />
				<p class="info">
					<b>КАСКО В ПОДАРОК</b><br />при покупке нового авто в кредит
				</p>
			</div>
			<div class="benefits-list--item">
				<img src="~assets/img/rubber.svg" alt="ЗИМНЯЯ РЕЗИНА" />
				<p class="info"><b>Бонус по трейд-ин </b><br />до 100 000 руб.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["title"]
};
</script>

<style lang="sass">
.center-title h2
	max-width: 570px
	width: 100%
	padding: 48px 0
	background-image: url('~assets/img/mojno.jpg')
	background-size: contain
	background-repeat: no-repeat
	background-position: right center
	margin: 0 auto
	font-size: 36px
	line-height: 42px
	color: #333
.benefits-list
	display: flex
	justify-content: space-between
	margin-top: 42px
.benefits-list--item
	max-width: 370px
	width: 100%
	display: flex
	align-items: center
	> img
		width: 176px
		height: auto
		display: block
		margin-right: 24px
	p.info
		color: #333
		font-size: 14px
		line-height: 1.5
		b
			font-size: 24px
			line-height: 1.3
			text-transform: uppercase
@include lg-desktop
	.benefits-list--item
		width: 300px
	.benefits-list--item > img
		width: 100px
	.benefits-list--item p.info b
		font-size: 18px
@include md-desktop
	.center-title h2
		text-align: left
		background-size: 400px
	.benefits-title h2
		text-align: center
@include sm-tablets
	.benefits-list
		flex-wrap: wrap
		justify-content: center
	.benefits-list--item
		max-width: 300px
		width: 100%
		margin-bottom: 30px
@include sm-mobile
	.center-title h2
		font-size: 24px
		line-height: 1.3
		background-size: 200px
		padding: 20px 0
</style>
