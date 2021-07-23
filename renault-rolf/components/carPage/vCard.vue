<template>
	<div id="car-fullCard" class="container">
		<div class="fullCard-wrapper">
			<div class="fullCard-image">
				<client-only>
					<div class="fullCard-name">
						<span class="new-label" v-if="car.new">Новый</span>
						<p class="title">{{ car.name }}</p>
					</div>
				</client-only>
				<figure>
					<img
						:src="
							require(`~/assets/img/cars/${car.id}/colors/${car.colors[activeColor]}.png`)
						"
						:alt="car.name"
						class="img-responsive"
					/>
				</figure>
				<ul class="fullCard-colors">
					<li
						v-for="(color, index) in car.colors"
						:key="color"
						:class="[index === activeColor ? 'active' : '', color]"
						:data-color="color"
						@click.prevent="changeColor(index)"
					>
						<span class="color-check" v-if="index === activeColor">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								viewBox="0 0 11.425781 9.1289062"
							>
								<path
									d="m10 0-6.1621 6.2734-2.4121-2.455-1.4258 1.4023 3.8379 3.9082 7.5881-7.7266z"
								></path>
							</svg>
						</span>
					</li>
				</ul>
			</div>
			<div class="fullCard-info">
				<p class="benefit" v-if="car.benefit">
					<span>Выгода до:</span>
					<br /><b>{{ car.benefit.toLocaleString() }} ₽</b>
				</p>
				<p
					:class="[
						'title_accent price',
						{
							lineThrough:
								lineThrough && car.id !== 'kaptur' && car.id !== 'duster-new'
						}
					]"
					v-show="car.price && showPrice"
				>
					от {{ car.price.toLocaleString() }} ₽
				</p>
				<div class="fullCard-photos" v-if="car.photos">
					<p class="title">В наличии</p>
					<v-card-gallery :photos="car.photos" :car="car.id" />
				</div>
				<ul class="fullCard-config">
					<li v-if="car.power">
						<img
							src="~assets/img/power-yellow.svg"
							alt="Мощность"
							class="img-responsive"
						/>
						<span>Мощность</span>
						<b>{{ car.power }}л.с</b>
					</li>
					<li v-if="car.speed">
						<img
							src="~assets/img/speed-yellow.svg"
							alt="Разгон до 100"
							class="img-responsive"
						/>
						<span>Разгон</span>
						<b>{{ car.speed }}с.</b>
					</li>
					<li v-if="car.gasoline">
						<img
							src="~assets/img/gasoline-yellow.svg"
							alt="Расход"
							class="img-responsive"
						/>
						<span>Расход</span>
						<b>{{ car.gasoline }}л.</b>
					</li>
				</ul>
			</div>
			<div class="fullCard-form">
				<p class="title">Кредит от {{ car.credit.toLocaleString() }} ₽/мес</p>
				<p class="sub-title">на {{ car.name }} при заявке с сайта</p>
				<callback-form button="Получить скидку" input-name="true" />
			</div>
		</div>
		<v-main-action />
	</div>
</template>

<script>
import callbackForm from "/components/forms/callbackForm";
import vCardGallery from "/components/carPage/vCardGallery";
import vMainAction from "/components/vMainAction";
export default {
	props: ["car"],
	components: {
		callbackForm,
		vCardGallery,
		vMainAction
	},
	data() {
		return {
			activeColor: 0
		};
	},
	computed: {
		showPrice() {
			return this.$store.getters["info/showPrice"];
		},
		lineThrough() {
			return this.$store.getters["info/lineThrough"];
		}
	},
	methods: {
		scrollTo(id) {
			document
				.getElementById(id)
				.scrollIntoView({ block: "center", behavior: "smooth" });
		},
		changeColor(color) {
			this.activeColor = color;
		}
	}
};
</script>

<style lang="sass">
#car-fullCard
	margin: 96px auto
	padding-top: 94px
	padding-bottom: 120px
	margin-bottom: 140px
	position: relative
.fullCard-wrapper
	display: flex
	justify-content: space-between
	align-items: center
.fullCard-info
	max-width: 270px
	width: 100%
	margin-left: auto
	margin-right: 30px
	.benefit
		span
			font-size: 14px
			color: #333
			line-height: 1.5
		b
			font-size: 22px
			color: red
			line-height: 1.3
	.price
		font-size: 36px
		color: #333
		line-height: 42px
		display: inline-block
		font-weight: bold
	.lineThrough
		text-decoration: line-through
.fullCard-photos
	margin-top: 30px
	.title
		font-size: 18px
		line-height: 1.3
		font-weight: bold
		margin-bottom: 10px

.fullCard-config
	margin-top: 32px
	display: flex
	list-style-type: none
	justify-content: space-between
	li
		text-align: center
		img
			margin-left: auto
			margin-right: auto
			margin-bottom: 8px
		span
			font-size: 12px
			line-height: 1.3
			color: #333
		b
			font-size: 18px
			line-height: 1.3
			color: #333
			font-weight: bold


.fullCard-form
	max-width: 370px
	width: 100%
	padding: 72px 35px
	background-color: #fff
	box-shadow: 0px 6px 40px rgba(0, 0, 0, 0.15)
	text-align: center
	.title
		font-size: 22px
		color: #333
		line-height: 1.3
		margin-bottom: 10px
		font-weight: bold
	.sub-title
		font-size: 16px
		line-height: 1.5
		color: #333
	.el-form
		margin-top: 24px
		div
			display: block
			width: 100%
			margin-right: 0
		.el-form-item
			margin-bottom: 5px
		.el-button
			width: 100%
			margin-top: 15px


.fullCard-image
	max-width: 395px
	width: 100%
	text-align: right
	.fullCard-name
		display: inline-block
		text-align: left
	.new-label
		font-size: 18px
		color: #333
		line-height: 1
		position: relative
		z-index: 2
	.title
		font-size: 36px
		line-height: 42px
		color: #333
		font-weight: bold
		position: relative
		z-index: 2
	figure
		position: relative
		z-index: 1
		margin: 26px 0
		&::after
			content: ''
			z-index: -1
			position: absolute
			width: 570px
			height: 570px
			background-image: url('~assets/img/card-bg.svg')
			background-size: contain
			background-repeat: no-repeat
			background-position: center center
			top: -167px
			left: -92px
.fullCard-colors
	display: flex
	list-style-type: none
	flex-wrap: wrap
	justify-content: center
	margin-top: 20px
	position: relative
	z-index: 2
	li
		width: 24px
		height: 24px
		margin: 7px 9px
		position: relative
		border-radius: 50%
		cursor: pointer
		overflow: hidden
		display: flex
		align-items: center
		justify-content: center
		&::after
			content: ''
			position: absolute
			left: 0
			top: 0
			right: 0
			bottom: 0
			background: linear-gradient(138.01deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 95.26%)
			mix-blend-mode: hard-light
			z-index: 2
			border-radius: 50%
.color-check
	path
		fill: $accent
	svg
		width: 10px
		height: 10px

.biege
	background-color: #939185
.black
	background-color: #000
.black-white
	background-color: #000
.blue
	background-color: #225776
.blue-black
	background-color: #225776
.blue-white
	background-color: #225776
.grey
	background-color: #464646
.grey-black
	background-color: #464646
.red
	background-color: #8f0000
.red-black
	background-color: #8f0000
.red-white
	background-color: #8f0000
.silver
	background-color: #9e9e9e
.silver-black
	background-color: #9e9e9e
.white
	background-color: #efefef
.white-black
	background-color: #efefef
.brown
	background-color: #6a4c3b
.gold
	background-color: #ed4e00
.light-brown
	background-color: #6a4c3b
[data-color$="-black"]
	position: relative
	&::before
		content: ''
		position: absolute
		width: 100%
		height: 50%
		position: absolute
		left: 0
		top: 0
		z-index: 1
		background-color: #000
[data-color$="-white"]
	position: relative
	&::before
		content: ''
		position: absolute
		width: 100%
		height: 50%
		position: absolute
		left: 0
		top: 0
		z-index: 1
		background-color: #fff
@include lg-desktop
	.fullCard-wrapper
		flex-wrap: wrap
		justify-content: center
	.fullCard-info
		margin-left: 130px
		margin-right: 0
	.fullCard-form
		margin-top: 100px
@include md-desktop
	.fullCard-wrapper
		flex-direction: column
	.fullCard-info
		margin: 0
		margin-top: 30px
		z-index: 2
	.fullCard-form
		margin-top: 40px
		text-align: left
	#car-fullCard
		position: relative
		padding-bottom: 140px
		margin-bottom: 250px
	.fullCard-image
		text-align: center
	.fullCard-info .benefit
		position: absolute
		right: 20px
		top: 160px
	.fullCard-config
		position: absolute
		bottom: 20px
		left: 0
		width: 100%
		padding: 0px 15px
	.fullCard-config li b
		display: block
		font-size: 24px
	.fullCard-config
		justify-content: space-around

@include sm-mobile
	#car-fullCard
		margin-top: 45px
		margin-bottom: 300px
	.fullCard-image figure::after
		width: 465px
		height: 465px
	.fullCard-form
		padding: 20px
</style>
