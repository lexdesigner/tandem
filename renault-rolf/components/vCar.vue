<template>
	<div :id="car.id" :class="[car.sale ? 'sale' : '', 'cars-list-item']">
		<div class="sale-label" v-if="car.sale">SALE</div>
		<nuxt-link :to="`/${car.id}`">
			<figure>
				<img
					:src="require(`~/assets/img/cars/${car.id}/card.png`)"
					:alt="car.name"
					class="img-responsive"
				/>
			</figure>
			<client-only>
				<p class="car-name"><span v-if="car.new">Новый</span> {{ car.name }}</p>
			</client-only>

			<ul class="car-config">
				<li v-if="car.power">
					<img
						src="~assets/img/power.svg"
						alt="Мощность"
						class="img-responsive"
					/>{{ car.power }}
					л.с
				</li>
				<li v-if="car.speed">
					<img
						src="~assets/img/speed.svg"
						alt="Разгон до 100"
						class="img-responsive"
					/>{{ car.speed }}
					с.
				</li>
				<li v-if="car.gasoline">
					<img
						src="~assets/img/gasoline.svg"
						alt="Расход"
						class="img-responsive"
					/>{{ car.gasoline }}
					л.
				</li>
			</ul>
		</nuxt-link>
		<div class="car-price">
			<div>
				<p v-show="car.price && showPrice">
					<span>Цена конфигурации от:</span>
					<b
						:class="{
							lineThrough:
								lineThrough && car.id !== 'kaptur' && car.id !== 'duster-new'
						}"
						>{{ car.price.toLocaleString() }} ₽</b
					>
				</p>
				<p v-show="car.benefit">
					<span>Выгода до:</span>
					<b>{{ car.benefit.toLocaleString() }} ₽</b>
				</p>
			</div>
			<el-button
				type="primary"
				@click.prevent="
					openPopup(
						'callBack',
						`Получите лучшее предложение по кредиту на ${car.name}`,
						false,
						car.pushId,
						car.id
					)
				"
				>Получить скидку</el-button
			>
		</div>
	</div>
</template>

<script>
export default {
	props: ["car"],
	computed: {
		showPrice() {
			return this.$store.getters["info/showPrice"];
		},
		lineThrough() {
			return this.$store.getters["info/lineThrough"];
		}
	}
};
</script>

<style lang="sass">
.cars-list-item
	max-width: 360px
	width: 100%
	//transform: translateY(-27px)
	margin-right: 30px
	&.sale
		position: relative
		&::before
			content: ''
			position: absolute
			width: 220px
			height: 220px
			top: 56px
			left: 50%
			transform: translateX(-50%)
			border-radius: 50%
			box-shadow: 0 0 30px 10px rgba($accent, .8)
	a
		text-decoration: none !important
	figure
		padding: 43px 0
		background-image: url('~assets/img/card-bg.svg')
		background-repeat: no-repeat
		background-size: contain
		background-position: center center
		transform: translateY(27px)
		img
			margin: 0 auto
	.car-name
		font-size: 24px
		color: #333
		font-weight: bold
		line-height: 1.3
		position: relative
		z-index: 2
	.sale-label
		position: absolute
		padding: 5px 10px
		background-color: red
		color: #fff
		font-weight: bold
		right: 0
		top: 0
	.car-config
		display: flex
		list-style-type: none
		align-items: center
		justify-content: space-between
		margin-top: 15px
		border-top: 1px solid rgba(197,198,197,.3)
		padding: 15px 0
		li
			display: flex
			align-items: center
			font-size: 14px
			color: #333
			img
				margin-right: 12px
	.car-price
		display: flex
		align-items: center
		justify-content: space-between
		margin-top: 15px
		p
			font-size: 14px
			line-height: 1.4
			color: #333
			b
				display: block
				font-size: 22px
				line-height: 1.3
			.lineThrough
				text-decoration: line-through
@include sm-mobile
	.cars-list-item
		margin-right: 0
		&.sale
			&::before
				width: 180px
				height: 180px
				top: 60px
		.car-price
			flex-wrap: wrap
			justify-content: center
			text-align: center
			p
				margin-bottom: 15px
</style>
