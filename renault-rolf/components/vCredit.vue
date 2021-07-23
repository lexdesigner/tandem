<template>
	<section id="credit">
		<div class="credit-wrapper">
			<figure>
				<img
					src="~assets/img/credit-image.png"
					alt="Кредит"
					class="img-responsive"
				/>
			</figure>
			<div class="credit-info">
				<h2>Авто в кредит за 20 минут</h2>
				<p>
					Хотите купить авто сегодня и получить максимальную скидку
					на автомобиль без дополнительных усилий?
				</p>
				<callback-form button="Получить скидку" />
			</div>
		</div>
	</section>
</template>

<script>
import callbackForm from "/components/forms/callbackForm";
export default {
	components: {
		callbackForm
	}
};
</script>

<style lang="sass">
.credit-wrapper
	display: flex
	align-items: center
	justify-content: center
	margin-top: 100px
	figure
		max-width: 448px
		width: 100%
	.credit-info
		max-width: 522px
		width: 100%
		color: #333
		p
			margin: 12px 0
			font-size: 14px
			line-height: 1.5
		.el-form
			margin-top: 26px
		.el-input__inner
			width: 290px
@include lg-desktop
	.credit-wrapper
		margin-top: 50px
@include md-desktop
	.credit-wrapper
		text-align: right
		padding-right: 15px
		h2
			text-align: right
			justify-content: flex-end
@include sm-mobile
	.credit-wrapper .credit-info p
		text-align: center
	.credit-wrapper
		padding: 0
		flex-wrap: wrap
		h2
			justify-content: center
			text-align: center
		figure
			order: 1
</style>
