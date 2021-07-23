<template>
	<section id="casco" class="container">
		<div class="casco-wrapper">
			<p class="title">КАСКО в подарок <span>на 1 год при покупке</span></p>
			<callback-form />
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
.casco-wrapper
	display: flex
	align-items: center
	justify-content: space-between
	padding: 40px 100px
	background: #FFFFFF
	box-shadow: 0px 14px 80px rgba(0, 0, 0, 0.1)
	border-radius: 5px
	p.title
		font-size: 29px
		line-height: 1.3
		color: #333
		font-weight: bold
		span
			display: block
			font-weight: normal
			font-size: 22px
	.el-form-item
		margin-bottom: 0
		&:first-child
			margin-right: 30px
		&:last-child
			margin-right: 0
	.el-input
		display: block
		width: 300px
@include lg-desktop
	.casco-wrapper .el-form-item:first-child
		margin-right: 0
		margin-left: auto
	.casco-wrapper .el-form-item:last-child
		margin-top: 10px
	.casco-wrapper .el-form
		text-align: right
@include md-desktop
	.casco-wrapper
		padding: 20px
		p.title
			font-size: 24px
			span
				font-size: 18px
@include sm-tablets
	.casco-wrapper
		flex-wrap: wrap
		justify-content: center
		.title
			text-align: center
			margin-bottom: 20px
		.el-form-item
			margin-bottom: 0
			margin-right: 0
		.el-form .el-button
			margin-top: 0
		.el-form-item:last-child
			margin-top: 0
		.el-input
			width: 270px

@include sm-mobile
	.casco-wrapper .el-form-item:last-child
		margin-top: 20px
		margin-left: auto
	.casco-wrapper .el-form
		text-align: center
</style>
