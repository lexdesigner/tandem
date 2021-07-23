export const state = () => ({
	phone: "+78123240122",
	time_work_from: 9, // Начало работы колл-центра (в часах)
	time_work_to: 22, // Конец работы колл-центра (в часах)
	showPrice: true,
	lineThrough: false,
	months: [
		"января",
		"февраля",
		"марта",
		"апреля",
		"мая",
		"июня",
		"июля",
		"августа",
		"сентября",
		"октября",
		"ноября",
		"декабря"
	]
});

export const mutations = {
	hidePrice(state) {
		state.showPrice = false;
	},
	toggleLineThrough(state) {
		state.lineThrough = true;
	}
};

export const actions = {
	hidePrice({ commit }) {
		commit("hidePrice");
	},
	toggleLineThrough({ commit }) {
		commit("toggleLineThrough");
	}
};

export const getters = {
	phone: s => s.phone,
	time_work_from: s => s.time_work_from,
	time_work_to: s => s.time_work_to,
	showPrice: s => s.showPrice,
	lineThrough: s => s.lineThrough,
	months: s => m => s.months[+m]
};
