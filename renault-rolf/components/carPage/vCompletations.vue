<template>
	<section id="completations" class="container completations">
		<h2>
			<span>Комплектации и цены</span>
			Выберите свой {{ car.name }}
		</h2>
		<div class="table">
			<div class="table-head">
				<div class="table-column name-col">Комплектация</div>
				<div class="table-column transmission-col">КПП</div>
				<div class="table-column engine-col">Объём</div>
				<div class="table-column power-col">Мощность</div>
				<div class="table-column price-col">Цена</div>
			</div>
			<div
				class="table-body"
				v-for="(cfg, index) in configs"
				:key="index"
				v-show="index < showAllCompl"
			>
				<div class="table-title">{{ cfg }}</div>
				<div
					class="table-row"
					v-for="({ name, transmission, engine, power, price },
					index) in complCfg(cfg)"
					:key="index"
				>
					<div class="table-column name-col">{{ name }}</div>
					<div class="table-column transmission-col">{{ transmission }}</div>
					<div class="table-column engine-col">{{ engine }}</div>
					<div class="table-column power-col">{{ power }}</div>
					<div class="table-column price-col">
						<span>{{ (price + car.benefit).toLocaleString() }}&nbsp;₽</span
						><br /><b>{{ price.toLocaleString() }} ₽</b>
					</div>
					<div class="table-column buttons-col">
						<el-button
							type="primary"
							@click.prevent="
								openPopup(
									'callBack',
									`Получите лучшее предложение по кредиту на ${car.name}`
								)
							"
							>В кредит</el-button
						>

						<el-button
							icon="el-icon-refresh"
							@click.prevent="
								openPopup(
									'callBack',
									`Получите лучшее предложение по трейд-ин на ${car.name}`
								)
							"
							>В Trade-in</el-button
						>
					</div>
				</div>
			</div>
		</div>
		<el-button
			icon="el-icon-refresh-right"
			@click="showAllCompl = car.completations.length"
			v-if="showAllCompl != car.completations.length"
			class="showMore"
			>Показать еще</el-button
		>
	</section>
</template>

<script>
export default {
	props: ["car"],
	data() {
		return {
			showAllCompl: 2
		};
	},
	methods: {
		complCfg(cfg) {
			return this.car.completations.filter(compl => compl.config === cfg);
		}
	},
	computed: {
		configs() {
			return [...new Set(this.car.completations.map(a => a.config))];
		}
	},
	mounted() {}
};
</script>

<style lang="sass">
.completations
	margin-top: 100px
	h2
		text-align: center
		display: block
		span
			font-size: 22px
			line-height: 1.3
			color: #333
			display: block
			text-align: center
.table
	margin-top: 45px
.table-head
	background: #F3F5F6
	border-radius: 5px
	padding: 20px
	display: flex
	align-items: center
.name-col
	max-width: 170px
	width: 100%
	padding-right: 30px
.transmission-col
	max-width: 130px
	width: 100%
	margin-right: 30px
.engine-col
	max-width: 80px
	width: 100%
	margin-right: 30px
	text-align: center
.power-col
	max-width: 120px
	width: 100%
	margin-right: 30px
	text-align: center
.price-col
	max-width: 130px
	width: 100%
	margin-right: 30px
.table-body
	margin-top: 40px
	color: #333
	.name-col
		font-weight: bold
		color: #333
		line-height: 1.3
		font-size: 18px
	.price-col
		span
			font-size: 14px
			line-height: 1.5
			color: #999
		b
			font-size: 22px
			line-height: 1.3
			color: #333
.table-row
	display: flex
	padding: 15px
	border-bottom: 1px solid rgba(197,198,197,.3)
	align-items: center
	.table-column:last-child
		margin-left: auto
.table-title
	font-weight: bold
	line-height: 1.3
	font-size: 18px
	color: #999
.showMore
	margin-top: 20px
	display: block
	margin-left: auto
	margin-right: auto
	border: none
@include lg-desktop
	.buttons-col
		text-align: center
		.el-button
			margin: 0
		.el-button + .el-button
			margin-top: 10px
@include md-desktop
	.table-row
		flex-wrap: wrap
	.transmission-col
		max-width: 116px
	.engine-col
		max-width: 50px
	.power-col
		max-width: 100px
	.buttons-col
		text-align: center
		width: 100%
@include sm-tablets
	.table-head
		display: none
	.table-body
		text-align: center
		.table-column
			max-width: 100%
	.engine-col,
	.power-col
		display: none
	.table-body .name-col
		padding: 0
	.transmission-col,
	.price-col
		margin: 0
@include sm-mobile
	.completations h2
		line-height: 1.4
	.completations h2 span
		font-size: 16px
	.price-col
		padding: 10px 0
	.table-body .price-col span
		font-size: 16px
</style>
