<template>
	<div class="popup oh">
		<el-dialog
			:visible.sync="visible"
			center
			custom-class="gallery-modal"
			:before-close="closeModal"
		>
			<figure
				v-for="(photo, index) in gallery.photos"
				:key="photo"
				:class="[gallery.active === index ? 'active' : '', 'gallery-item']"
			>
				<img :src="photo" alt="Фото" />
			</figure>
			<div class="gallery-nav gallery-next" @click.prevent="galleryNext()">
				<i class="el-icon-arrow-right"></i>
			</div>
			<div class="gallery-nav gallery-prev" @click.prevent="galleryPrev()">
				<i class="el-icon-arrow-left"></i>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		closeModal() {
			this.closePopup("gallery");
		},
		galleryNext() {
			this.$store.commit("modals/galleryNext");
		},
		galleryPrev() {
			this.$store.commit("modals/galleryPrev");
		}
	},
	computed: {
		gallery() {
			return this.$store.getters["modals/gallery"];
		},
		visible() {
			return this.$store.getters["modals/gallery"] &&
				this.$store.getters["modals/visible"]
				? true
				: false;
		}
	}
};
</script>

<style lang="sass">
.gallery-modal
	width: auto
	margin: 0
	background: transparent
	box-shadow: none
	position: static
	text-align: center
	display: inline-block
	.el-dialog__headerbtn
		font-size: 36px
	.el-dialog__header,
	.el-dialog__body
		padding: 0
		display: inline-block
	.el-dialog__close
		color: #fff
	.gallery-item
		opacity: 0
		visibility: hidden
		transition: opacity .3s cubic-bezier(1,1,.44,.92)
		transform: scale(0)
		position: absolute
		display: inline-block
		img
			max-height: 70vh
			max-width: 100%
			height: auto
			display: block
			margin-left: auto
			margin-right: auto
			user-select: none
		&.active
			opacity: 1
			visibility: visible
			position: static
			transform: scale(1)
.popup.oh
	.el-dialog__wrapper
		overflow: hidden
		max-height: 100vh
		max-width: 100vw
		text-align: center
.gallery-nav
	position: absolute
	top: 50%
	transform: translateY(-50%)
	cursor: pointer
	font-size: 46px
	color: #fff
	&:hover
		color: $accent
.gallery-next
	right: 80px
.gallery-prev
	left: 80px
@include md-desktop
	.gallery-next
		right: 30px
	.gallery-prev
		left: 30px
	.gallery-nav
		top: 40%
@include sm-mobile
	.gallery-prev
		left: 0px
	.gallery-next
		right: 0px
</style>
