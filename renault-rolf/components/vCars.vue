<template>
	<div id="cars">
		<div class="container">
			<h2>Модельный ряд</h2>
			<br />
			<h2><span class="label">Седаны</span></h2>
			<div class="cars-list" id="sedans">
				<v-car v-for="car in sedans" :key="car.id" :car="car" />
			</div>
			<h2><span class="label">Хэтчбеки</span></h2>
			<div class="cars-list" id="hatchbacks">
				<v-car v-for="car in hatchbacks" :key="car.id" :car="car" />
			</div>
			<h2><span class="label">Кроссоверы</span></h2>
			<div class="cars-list" id="crossovers">
				<v-car v-for="car in crossovers" :key="car.id" :car="car" />
			</div>
			<!-- <h2><span class="label">Внедорожники</span></h2>
			<div class="cars-list" id="suvs">
				<v-car v-for="car in suvs" :key="car.id" :car="car" />
			</div> -->
		</div>
	</div>
</template>

<script>
import vCar from "/components/vCar";
export default {
	components: {
		vCar
	},
	data() {
		return {};
	},
	computed: {
		crossovers() {
			return this.$store.getters["cars/getCarsOfType"]("crossover");
		},
		sedans() {
			return this.$store.getters["cars/getCarsOfType"]("sedan");
		},
		hatchbacks() {
			return this.$store.getters["cars/getCarsOfType"]("hatchback");
		},
		suvs() {
			return this.$store.getters["cars/getCarsOfType"]("suv");
		}
	}
};
</script>

<style lang="sass">
h2
	font-weight: bold
	font-size: 36px
	line-height: 1.2
	color: #333
	display: flex
	align-items: center
	position: relative
	z-index: 2
	.label
		display: block
		margin-left: 42px
		background-color: $accent
		font-size: 18px
		color: #333
		padding: 10px 26px 10px 10px
		position: relative
		border-radius: 0px 5px 5px 0px
		text-align: center
		font-weight: 400
		line-height: 1
		&::after
			content: ''
			position: absolute
			top: 50%
			right: 7px
			transform: translateY(-50%)
			width: 8px
			height: 8px
			background-color: #fff
			border-radius: 50%
		&::before
			content: ''
			display: block
			width: 0
			height: 0
			border-top: 19px solid transparent
			border-right: 17px solid $accent
			border-bottom: 19px solid transparent
			right: 100%
			top: 0
			position: absolute
.cars-list
	display: flex
	flex-wrap: wrap
	border-bottom: 1px solid rgba(197,198,197,.3)
	padding-bottom: 40px
	margin-bottom: 70px
@include md-desktop
	h2
		justify-content: center
		text-align: center
		font-size: 24px
	.cars-list
		justify-content: center

	h2
		flex-wrap: wrap
		.label
			margin-left: 17px
			margin-top: 10px
</style>
