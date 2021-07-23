<template>
	<footer id="footer" class="container">
		<div class="footer-wrapper">
			<div class="footer-dealer">
				<figure>
					<img
						src="~assets/img/logo-dealer.svg"
						alt="РОЛЬФ СПБ"
						class="img-responsive"
					/>
				</figure>
				<span>Официальный дилер Renault</span>
			</div>
			<div class="footer-info">
				<p>
					Обращаем ваше внимание на то, что данный интернет-сайт носит
					исключительно информационный характер и ни при каких условиях не
					является публичной офертой, определяемой положением ч. 2 ст. 437
					Гражданского кодекса Российской Федерации. Для получения подробной
					информации о стоимости автомобилей, пожалуйста, обращайтесь к
					менеджеру по продажам. Все цены на сайте указаны с учетом скидок.
					Условия на покупку автомобиля указаны по кредиту и включают в себя
					обязательные страховые продукты, которые оплачиваются отдельно.
				</p>
				<p>
					Предоставляя свои персональные данные и используя настоящий веб-сайт,
					Вы соглашаетесь с обработкой Ваших персональных данных и принимаете
					условия их обработки.
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="sass">
.footer-wrapper
	margin-top: 140px
	display: flex
	justify-content: space-between
.footer-dealer
	max-width: 300px
	width: 100%
	figure
		width: 108px
	span
		font-size: 14px
		color: #333
		line-height: 1.5
.footer-info
	font-size: 12px
	color: #999
	line-height: 1.3
	padding: 20px 0
	border-bottom: 1px solid #C5C6C5
@include lg-desktop
	.footer-wrapper
		margin-top: 50px
		margin-top: 50px
@include md-desktop
	.footer-wrapper
		flex-wrap: wrap
		justify-content: center
	.footer-dealer
		text-align: center
		order: 1
		padding: 20px 0
		figure
			margin-left: auto
			margin-right: auto
</style>
