<template>
	<section id="sales" class="container">
		<h2>Получите максимальную скидку!</h2>
		<div class="sales-list">
			<div class="sales-list_item" v-if="car.benefit">
				<p>
					Спецпредложение<br /><b class="title_accent"
						>{{ car.benefit.toLocaleString() }} ₽</b
					>
				</p>
				<span>Специальное предложение от автосалона на {{ car.name }}</span>
			</div>
			<div class="sales-list_item">
				<p>В кредит<br /><b class="title_accent">от 0%</b></p>
				<span>Дополнительная скидка на автомобиль при оформлении в кредит</span>
			</div>
			<div class="sales-list_item">
				<p>Программа лояльности<br /><b class="title_accent">40 000 ₽</b></p>
				<span
					>Дополнительная скидка при прохождении ТО в нашем сервис-центре</span
				>
			</div>
			<div class="sales-list_item">
				<p>Trade-in<br /><b class="title_accent">150 000 ₽</b></p>
				<span
					>Дополнительная скидка при приеме вашего старого авто в счет
					покупки</span
				>
			</div>
		</div>
		<el-button
			type="primary"
			@click.prevent="
				openPopup('callBack', `Получите максимальную скидку на ${car.name}`)
			"
			>Узнать подробнее</el-button
		>
	</section>
</template>

<script>
export default {
	props: ["car"]
};
</script>

<style lang="sass">
#sales
	margin-top: 60px
	margin-bottom: 100px
	text-align: center
#sales h2
	display: block
	position: relative
	&::after
		content: ''
		position: absolute
		left: 50%
		bottom: -7px
		height: 2px
		width: 60px
		background-color: $accent
		transform: translateX(-50%)
.sales-list
	display: flex
	justify-content: space-between
	margin-top: 70px
	margin-bottom: 40px
.sales-list_item
	width: 270px
	p
		font-size: 18px
		line-height: 1.3
		color: #333
		font-weight: bold
		margin-bottom: 10px
		b
			font-size: 24px
			line-height: 1.3
		.title_accent::after
			height: 6px
			bottom: 4px
	span
		font-size: 14px
		line-height: 1.5
		color: #333
@include md-desktop
	.sales-list
		flex-wrap: wrap
		justify-content: space-around
		margin-bottom: 0
	.sales-list_item
		margin-bottom: 30px
</style>
