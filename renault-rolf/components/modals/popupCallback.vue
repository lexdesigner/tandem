<template>
	<div class="popup">
		<el-dialog
			:title="title"
			:visible.sync="visible"
			center
			custom-class="callBack-modal"
			:before-close="closeModal"
		>
			<span>
				<callback-form />
			</span>
		</el-dialog>
	</div>
</template>

<script>
import callbackForm from "/components/forms/callbackForm";
export default {
	components: {
		callbackForm
	},
	data() {
		return {
			// centerDialogVisible: false
		};
	},
	methods: {
		closeModal() {
			this.closePopup("callBack");
		}
	},
	computed: {
		title() {
			return this.$store.getters["modals/title"];
		},
		visible() {
			return this.$store.getters["modals/callback"] &&
				this.$store.getters["modals/visible"]
				? true
				: false;
		}
	}
};
</script>

<style lang="sass">
.callBack-modal
	max-width: 500px
	width: 100%
	padding: 20px
	.el-form
		display: flex
		flex-direction: column
		max-width: 250px
		margin-left: auto
		margin-right: auto
		justify-content: center
		.el-form-item__content
			width: 100%
		.el-form-item
			margin-right:0
		.el-button
			width: 100%
.el-dialog__title
	font-weight: bold
	font-size: 24px
	line-height: 1.4
@include sm-mobile
	.el-dialog__header
		padding-left: 0
		padding-right: 0
	.el-dialog--center .el-dialog__body
		padding-left: 0
		padding-right: 0
	.el-form-item
		margin-bottom: 0px
</style>
