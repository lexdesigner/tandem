<template>
	<section id="news" class="container news">
		<h2>Наши достижения</h2>
		<ul class="news-list">
			<li class="news-list--item">
				<figure>
					<img
						src="~assets/img/news-1.jpg"
						alt="Новость 1"
						class="img-responsive"
					/>
				</figure>
				<div class="news-info">
					<p class="news-info--title">
						Renault является 6-ти кратным победителем в номинации «Автомобиль
						года» в Европе
					</p>
					<p class="news-info--text">
						Целых 6 побед – именно столько раз Renault становился лауреатом в
						главном европейском автомобильном конкурсе «Автомобиль года».
						Естественно, что первым это почетное звание в 1966 году получил
						первый же в мире хэтчбек автомобиль Renault 16 (напомним, что именно
						Renault первым в мире выпустила в серию машину с таким кузовом).
						Далее, в 1982 году Renault 9 завоевал этот почетный титул во второй
						раз. Следующей «ласточкой», сумевшей стать «Автомобилем года», была
						модель Renault Clio. В 1997 году лауреатом стал семейный автомобиль
						Renault Scenic. В 2003 году победа досталась Renault Megane. Таков
						вот титулованный французский бренд Renault.
					</p>
				</div>
			</li>
			<li class="news-list--item">
				<div class="news-info">
					<p class="news-info--title">
						Первый не только на обычных дорогах, но и на трассах Formula 1
					</p>
					<p class="news-info--text">
						Formula 1 – элитное спортивное состязание, где, как правило,
						выступают марки, которые изначально себя позиционируют как
						спортивные, например Ferrari, McLaren, Lotus, Williams или BMW.
						Появление же в Королевских гонках производителя, который считается
						все-таки производителем автомобилей массового пользования, без
						какой-либо спортивной составляющей – редкое событие. И, тем не
						менее, Renault не только участвовала в Formula 1, но дважды подряд
						становилась победителем в 2005 и 2006 годах. К примеру, такие же
						массовые производители, как Toyota или Honda не смогли даже
						приблизиться к подобным показателям.
					</p>
				</div>
				<figure>
					<img
						src="~assets/img/news-2.jpg"
						alt="Новость 2"
						class="img-responsive"
					/>
				</figure>
			</li>
			<li class="news-list--item">
				<figure>
					<img
						src="~assets/img/news-3.jpg"
						alt="Новость 3"
						class="img-responsive"
					/>
				</figure>
				<div class="news-info">
					<p class="news-info--title">
						Первый среди европейских автопроизводителей по количеству продаж в
						России
					</p>
					<p class="news-info--text">
						По итогам прошлого 2017 года Renault заняла третью строчку в
						рейтинге самых продаваемых автомобилей, уступив лишь двум корейским
						маркам. А если будем судить только лишь о марках, которые
						представляют европейский континент, то Renault значительно превзошла
						своих конкурентов и «земляков». Французский бренд за 2017 смог
						реализовать практически 137 000 машин. Для сравнения немецкий
						Volkswagen продал менее 90 000, что примерно в 1,5 раза меньше от
						количества проданных машин Renault. Самым продаваемым же автомобилем
						от французской марки стал Renault Duster.
					</p>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
export default {};
</script>

<style lang="sass">
.news
	margin-top: 100px
	background-color: rgba(197,198,197,.15)
	padding: 50px 70px
.news-list--item
	margin-top: 60px
	list-style-type: none
	display: flex
	justify-content: space-between
	align-items: center
	figure
		width: 370px
		min-width: 370px
		border-radius: 5px
		overflow: hidden
		filter: drop-shadow(0px 6px 40px rgba(0, 0, 0, 0.15))
.news-info
	padding-left: 30px
	&:nth-child(odd)
		padding-right: 30px
		padding-left: 0
.news-info--title
	font-size: 24px
	font-weight: bold
	line-height: 1.3
	color: #333
	margin-bottom: 12px
.news-info--text
	font-size: 14px
	line-height: 1.5
	color: #333
@include md-desktop
	.news-list--item figure
		min-width: 290px
		width: 290px
	.news-list--item
		align-items: flex-start
@include sm-tablets
	.news
		margin-top: 50px
		padding: 25px 15px
	.news-list--item
		flex-wrap: wrap
		justify-content: center
		text-align: center
		figure
			margin-bottom: 20px
			order: -1
	.news-info
		padding-left: 0
	.news-info:nth-child(odd)
		padding-right: 0
</style>
