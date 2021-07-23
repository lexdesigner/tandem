<template>
	<section id="gallery" class="container center-title">
		<h2>
			Кто сказал, что нельзя<br />
			измениться?
		</h2>
		<div class="gallery-tabs">
			<div
				:class="[activeTab === 'exterior' ? 'active' : '', 'tab']"
				@click.prevent="changeTab('exterior')"
			>
				Экстерьер
			</div>
			<div
				:class="[activeTab === 'interior' ? 'active' : '', 'tab']"
				@click.prevent="changeTab('interior')"
			>
				Интерьер
			</div>
			<span
				:class="[activeTab === 'exterior' ? 'left' : 'right', 'selector']"
			></span>
		</div>
		<el-carousel
			arrow="always"
			:autoplay="false"
			v-show="activeTab === 'interior'"
		>
			<el-carousel-item v-for="item in 4" :key="item">
				<h3>{{ item }}</h3>
			</el-carousel-item>
		</el-carousel>
		<el-carousel
			arrow="always"
			:autoplay="false"
			v-show="activeTab === 'exterior'"
		>
			<el-carousel-item v-for="item in 4" :key="item">
				<h3>{{ item }}</h3>
			</el-carousel-item>
		</el-carousel>
	</section>
</template>

<script>
export default {
	props: ["car"],
	data() {
		return {
			activeTab: "exterior"
		};
	},
	methods: {
		changeTab(tab) {
			tab === "exterior"
				? (this.activeTab = "exterior")
				: (this.activeTab = "interior");
		}
	}
};
</script>

<style lang="sass">
#gallery
	margin-top: 100px
.gallery-tabs
	display: flex
	align-items: center
	justify-content: center
	margin-top: 30px
	padding-bottom: 9px
	border-bottom: 4px solid #F3F5F6
	width: 540px
	margin-left: auto
	margin-right: auto
	position: relative
	.tab
		width: 50%
		text-align: center
		font-size: 22px
		line-height: 1.3
		color: #C5C6C5
		font-weight: bold
		cursor: pointer
		transition: .3s cubic-bezier(1,1,.44,.92)
		user-select: none
		&:hover
			color: $accent
		&.active
			color: #333
	.selector
		position: absolute
		width: 50%
		bottom: -4px
		height: 4px
		background-color: $accent
		transition: .3s cubic-bezier(1,1,.44,.92)
		&.left
			left: 0
		&.right
			transform: translateX(50%)
.el-carousel__item h3
	color: #475669
	font-size: 18px
	opacity: 0.75
	line-height: 300px
	margin: 0
.el-carousel__item:nth-child(2n)
	background-color: #99a9bf
.el-carousel__item:nth-child(2n+1)
	background-color: #d3dce6
.el-carousel
	margin-top: 40px
@include sm-mobile
	.gallery-tabs
		width: 100%
</style>
