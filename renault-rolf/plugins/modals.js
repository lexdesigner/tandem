import Vue from "vue";
Vue.mixin({
	methods: {
		openPopup(name, title, gallery, id, model) {
			this.$store.commit("modals/modalOpen", {
				name,
				title,
				gallery,
				id,
				model
			});
		},
		closePopup(name) {
			this.$store.commit("modals/modalClose", { name });
		}
	}
});
