<template>
	<div class="photos-wrapper">
		<div
			v-for="(img, index) in photos"
			:key="img"
			v-show="index <= 3"
			@click.prevent="openPopup('gallery', false, links(index))"
			class="photos-image"
			:style="{
				backgroundImage: `url(${require(`~/assets/img/cars/${car}/photos/${img}.jpg?width=130`)})`
			}"
		></div>
	</div>
</template>

<script>
export default {
	props: ["photos", "car"],
	computed: {},
	methods: {
		links(index) {
			let arr = {
				photos: [],
				active: index
			};
			for (let i = 1; i <= this.photos; i++) {
				const link = require(`~/assets/img/cars/${this.car}/photos/${i}.jpg?width=720`);
				arr.photos.push(link);
			}
			return arr;
		}
	}
};
</script>

<style lang="sass">
.photos-wrapper
	display: flex
	justify-content: space-between
	flex-wrap: wrap
	.photos-image
		border-radius: 5px
		overflow: hidden
		cursor: pointer
		position: relative
		margin-bottom: 10px
		width: 130px
		height: 78px
		background-size: cover
		background-position: center center
		&::after
			content: ''
			position: absolute
			right: -6px
			bottom: -6px
			width: 48px
			height: 48px
			background-image: url('~assets/~assets/img/play.svg')
			background-size: contain
			background-repeat: no-repeat
			background-position: center center
</style>
