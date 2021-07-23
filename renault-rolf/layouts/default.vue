<template>
	<div>
		<nuxt />
		<popup-callback />
		<popup-gallery />
	</div>
</template>
<script>
import popupCallback from "/components/modals/popupCallback";
import popupGallery from "/components/modals/popupGallery";

export default {
	components: {
		popupCallback,
		popupGallery
	},
	created() {
		if (this.getParams()["utm"] === "netceny") {
			this.$store.dispatch("info/hidePrice");
		}

		if (this.getParams()["utm"] === "perecerkytietceny") {
			this.$store.dispatch("info/toggleLineThrough");
		}
	}
};
</script>

<style></style>
