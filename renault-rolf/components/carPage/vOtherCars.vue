<template>
	<section id="otherCars" class="container">
		<h2>Другие автомобили Renault</h2>
		<div class="otherCars-list">
			<v-car v-for="car in otherCars" :key="car.id" :car="car" />
		</div>
	</section>
</template>

<script>
import vCar from "/components/vCar";
export default {
	props: ["model"],
	components: {
		vCar
	},
	data() {
		return {
			otherCars: []
		};
	},
	created() {
		let otherCars = [];
		const cars = this.$store.getters["cars/cars"];
		const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

		while (otherCars.length != 3) {
			let index = getRandomInt(cars.length);
			if (cars[index].id !== this.model.id) {
				otherCars.push(cars[index]);
			}
			otherCars = otherCars.filter((v, i, arr) => arr.indexOf(v) == i);
		}
		setTimeout(() => {
			this.otherCars = otherCars;
		}, 100);
	}
};
</script>

<style lang="sass">
#otherCars
	margin-top: 100px
.otherCars-list
	display: flex
	justify-content: space-between
@include md-desktop
	.otherCars-list
		flex-wrap: wrap
		justify-content: center
	h2
		text-align: center
		line-height: 1.2
</style>
