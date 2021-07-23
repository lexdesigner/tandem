<template>
	<section id="credit" class="container page-credit">
		<div class="credit-wrapper">
			<figure>
				<img
					src="~assets/img/credit-image2.png"
					alt="Кредит"
					class="img-responsive"
				/>
			</figure>
			<div class="credit-info">
				<h2>Получите специальное выгодное <br />предложение в кредит</h2>
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
.page-credit
	.credit-wrapper
		figure
			max-width: 626px
			width: 100%
		.credit-info
			max-width: 100%
			width: 100%
			padding-left: 30px
			h2
				font-size: 24px
@include sm-tablets
	.page-credit
		.credit-wrapper
			flex-wrap: wrap
			figure
				order: 1
			.credit-info
				padding: 0
				text-align: center
				h2
					text-align: center
					justify-content: center
					line-height: 1.2
					margin-bottom: 20px
			.el-form-item
				margin-bottom: 0
				margin-right: 0
			.el-form .el-button
				margin-top: 0
@include sm-mobile
	.page-credit .credit-wrapper .credit-info h2
		line-height: 1.3
		margin-bottom: 20px
	.page-credit .credit-wrapper
		.el-input
			display: block
			width: 290px
		.el-form .el-button
				margin-top: 0
				margin-top: 20px
</style>
