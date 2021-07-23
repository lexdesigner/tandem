<template>
	<header id="header">
		<div class="container">
			<div class="header-top">
				<div class="header-logo__dealer">
					<figure>
						<img
							src="~assets/img/logo-dealer.svg"
							alt="Рольф"
							class="img-responsive"
						/>
					</figure>
					<p>Официальный дилер Renault</p>
				</div>
				<div class="header-contacts">
					<v-phone />
					<p>{{ time_work }}</p>
				</div>
				<div class="header-logo__model">
					<figure>
						<img
							src="~assets/img/logo-model.svg"
							alt="Renault"
							class="img-responsive"
						/>
					</figure>
				</div>
				<button
					id="burger"
					:class="[menuVisible ? 'open' : '', 'burger']"
					@click.prevent="menuVisible = !menuVisible"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
			<div
				:class="[menuVisible ? 'open' : '', 'header-nav']"
				v-if="menu === 'main'"
			>
				<ul class="header-nav__cars">
					<li>
						<nuxt-link to="/"
							><svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.6262 15.9941H9.15522V10.2464C9.17495 9.79893 9.10135 9.50079 8.93762 9.32906C8.76855 9.15039 8.45495 9.06133 8.00748 9.06133C7.11148 9.06133 6.75575 9.39733 6.73868 10.2581V15.9115H2.39095V8.40533H3.70295V14.5989H5.42615V10.2453C5.45922 8.65333 6.40002 7.74933 8.00748 7.74933C8.82775 7.74933 9.45868 7.97653 9.88802 8.42399C10.3077 8.86346 10.5035 9.48799 10.4667 10.2768L10.4677 14.6821H12.3141V8.56799H13.6262V15.9941ZM0.858148 8.40426L-0.0117188 7.42293L8.35735 0.00585938L16.0117 7.44373L15.0971 8.38453L8.31682 1.79573L0.858148 8.40426Z"
									fill="#666666"
								/>
							</svg>
						</nuxt-link>
					</li>
					<li>
						<a href="#" @click.prevent="scrollTo('crossovers')">Кроссоверы</a>
					</li>
					<!-- <li>
						<a href="#" @click.prevent="scrollTo('suvs')">Внедорожники</a>
					</li> -->
					<li><a href="#" @click.prevent="scrollTo('sedans')">Седаны</a></li>
					<li>
						<a href="#" @click.prevent="scrollTo('hatchbacks')">Хэтчбеки</a>
					</li>
				</ul>
				<ul class="header-nav__page">
					<li><a href="#" @click.prevent="scrollTo('news')">Новости</a></li>
					<li>
						<a href="#" @click.prevent="scrollTo('credit')">Автокредит</a>
					</li>
					<li>
						<a href="#" @click.prevent="openPopup('callBack')">Контакты</a>
					</li>
				</ul>
			</div>
			<div
				:class="[menuVisible ? 'open' : '', 'header-nav']"
				v-if="menu === 'car'"
			>
				<ul class="header-nav__cars">
					<li>
						<nuxt-link to="/"
							><svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.6262 15.9941H9.15522V10.2464C9.17495 9.79893 9.10135 9.50079 8.93762 9.32906C8.76855 9.15039 8.45495 9.06133 8.00748 9.06133C7.11148 9.06133 6.75575 9.39733 6.73868 10.2581V15.9115H2.39095V8.40533H3.70295V14.5989H5.42615V10.2453C5.45922 8.65333 6.40002 7.74933 8.00748 7.74933C8.82775 7.74933 9.45868 7.97653 9.88802 8.42399C10.3077 8.86346 10.5035 9.48799 10.4667 10.2768L10.4677 14.6821H12.3141V8.56799H13.6262V15.9941ZM0.858148 8.40426L-0.0117188 7.42293L8.35735 0.00585938L16.0117 7.44373L15.0971 8.38453L8.31682 1.79573L0.858148 8.40426Z"
									fill="#666666"
								/>
							</svg>
						</nuxt-link>
					</li>
					<li>
						<a href="#" @click.prevent="scrollTo('benefits')">Преимущества</a>
					</li>
					<li>
						<nuxt-link to="/#cars">Модельный ряд</nuxt-link>
					</li>
					<!-- <li>
						<a href="#" @click.prevent="scrollTo('completations')"
							>Комплектации</a
						>
					</li> -->
					<li><a href="#" @click.prevent="scrollTo('sales')">Скидки</a></li>
					<!-- <li>
						<a href="#" @click.prevent="scrollTo('gallery')">Галерея</a>
					</li> -->
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
import vPhone from "/components/vPhone";
export default {
	props: ["menu"],
	data() {
		return {
			menuVisible: false
		};
	},
	components: {
		vPhone
	},
	methods: {
		scrollTo(link) {
			const top = document.getElementById(link);
			const header = document.querySelector("header");
			this.menuVisible = false;
			window.scrollTo({
				top: top.offsetTop - header.offsetHeight,
				behavior: "smooth"
			});
			document.activeElement.blur();
		}
	},
	computed: {
		time_work() {
			return `Время работы: с ${this.$store.getters["info/time_work_from"]}:00 до ${this.$store.getters["info/time_work_to"]}:00`;
		}
	}
};
</script>

<style lang="sass">
#header
	position: fixed
	width: 100%
	left: 0
	top: 0
	background-color: #fff
	z-index: 10
.header-top
	padding: 20px 0
	display: flex
	align-items: center
	justify-content: space-between
.header-logo__dealer
	display: flex
	align-items: center
	figure
		width: 121px
		margin-right: 20px
	p
		font-size: 14px
		color: #333
.header-contacts
	margin-left: auto
	margin-right: 30px
	text-align: right
	p
		margin-top: 4px
		font-size: 14px
		color: #333
.header-logo__model
	width: 171px
.header-nav
	display: flex
	align-items: center
	border-top: 1px solid rgba(197,198,197,.3)
	padding: 10px 0
	ul
		display: flex
		list-style-type: none
		align-items: center

		li
			margin-right: 30px
			svg path
				transition: .3s cubic-bezier(1,1,.44,.92)
			&:hover
				svg path
					fill: $accent
		a
			font-size: 14px
			color: #333
			text-decoration: none
			line-height: 1
			&:hover
				color: $accent
.header-nav__cars
	border-right: 1px solid #C5C6C5
.header-nav__page
	margin-left: 30px
.burger
	display: none
@include md-desktop
	.header-top
		padding: 10px 0
	.header-nav
		position: absolute
		top: 70px
		left: 0
		width: 100%
		z-index: 2
		background-color: #fff
		flex-direction: column
		padding: 40px 0
		transform: translateX(-100vw)
		transition: .3s cubic-bezier(1,1,.44,.92)
		&.open
			transform: translateX(0)
		> ul
			flex-direction: column
			margin: 0
			li
				margin: 10px 0
				a
					font-size: 18px
					line-height: 1.3
	.header-nav__cars
		border: none
		li:first-child
			svg
				display: none
			a::after
				content: 'Главная'
	.header-logo__dealer p
		display: none
	.burger
		display: block
		position: relative
		width: 30px
		height: 25px
		display: block
		border: none
		background-color: transparent
		margin-left: 20px
		outline: none
		span
			display: block
			height: 4px
			width: 100%
			background-color: $accent
			position: absolute
			top: 0
			left: 0
			transition: .3s cubic-bezier(1,1,.44,.92)
			&:nth-child(2)
				top: 50%
				transform: translateY(-50%)  scale(1)
			&:nth-child(3)
				top: auto
				bottom: 0
		&.open
			span:nth-child(2)
				transform: translateY(-50%) scale(0)
			span:first-child
				transform: rotate(45deg) translate(45%,50%)
			span:nth-child(3)
				transform: rotate(-45deg) translate(45%, -50%)
			span
				left: -5px
@include sm-mobile
	.header-logo__model
		display: none
	.header-contacts p
		display: none
	.header-logo__dealer figure
		width: 70px
		margin-right: 0
	.header-contacts
		margin-right: 15px
	.burger
		margin-left: 0
	.header-nav
		top: 45px
</style>
