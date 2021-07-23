<template>
	<div id="main-page">
		<v-header menu="main" />
		<v-main />
		<v-cars />
		<v-benefits title="Получить максимум<br> выгоды" class="center-title" />
		<v-news />
		<v-credit />
		<v-footer />
	</div>
</template>

<script>
import vHeader from "/components/vHeader";
import vMain from "/components/vMain";
import vCars from "/components/vCars";
import vBenefits from "/components/vBenefits";
import vNews from "/components/vNews";
import vCredit from "/components/vCredit";
import vFooter from "/components/vFooter";
export default {
	components: {
		vHeader,
		vMain,
		vCars,
		vBenefits,
		vNews,
		vCredit,
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
