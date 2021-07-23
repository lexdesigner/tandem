<template>
	<div id="car-page">
		<v-header menu="car" />
		<v-card :car="car" />
		<v-benefits title="Подарки покупателям!" class="benefits-title" />
		<!-- <v-completations :car="car" /> -->
		<v-credit />
		<v-sales :car="car" />
		<v-casco />
		<!-- <v-gallery :car="car" /> -->
		<v-other-cars :model="car" />
		<v-footer />
	</div>
</template>

<script>
import vHeader from "/components/vHeader";
import vBenefits from "/components/vBenefits";
import vCard from "/components/carPage/vCard";
// import vCompletations from "/components/carPage/vCompletations";
import vCredit from "/components/carPage/vCredit";
import vSales from "/components/carPage/vSales";
import vCasco from "/components/carPage/vCasco";
// import vGallery from "/components/carPage/vGallery";
import vOtherCars from "/components/carPage/vOtherCars";
import vFooter from "/components/vFooter";
export default {
	asyncData({ params, store }) {
		const car = store.getters["cars/car"](params.car);
		return { car };
	},
	components: {
		vHeader,
		vBenefits,
		vCard,
		// vCompletations,
		vCredit,
		vSales,
		vCasco,
		// vGallery,
		vOtherCars,
		vFooter
	},
	methods: {
		ckEvent() {
			const ckBTN = document.getElementById("callkeeperWidget_call");
			ckBTN.addEventListener("click", () => {
				const ckBTNok = document.getElementById("callkeeperWidget_close0");
				ckBTNok ? this.pushDataAll() : false;
			});
		}
	},
	mounted() {
		window.onload = () => {
			setTimeout(() => {
				const widget_ck = document.getElementById("ck_phone_widget");
				widget_ck.addEventListener("click", () => {
					this.ckEvent();
				});
				this.ckEvent();
			}, 1000);
		};
	}
};
</script>

<style lang="sass">
@include sm-mobile
	#car-page
		overflow-x: hidden
</style>
