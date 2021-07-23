import data from "../static/cars.json";
export const state = () => ({
	cars: data,
	otherCars: []
});
export const mutations = {
	setCars(state, cars) {
		state.cars = cars;
	},
	otherCars(state, cars) {
		state.otherCars = cars;
		console.log(state.otherCars);
	}
};

export const actions = {
	async fetchCars({ commit }, cars) {
		commit("setCars", cars);
	},
	async otherCars({ commit, state }, id) {
		let otherCars = [];
		const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

		while (otherCars.length != 3) {
			let index = getRandomInt(state.cars.length);
			if (state.cars[index].id !== id) {
				otherCars.push(state.cars[index]);
			}
			otherCars = otherCars.filter((v, i, arr) => arr.indexOf(v) == i);
		}
		await commit("otherCars", otherCars);
	}
};

export const getters = {
	cars: s => s.cars,
	car: s => id => s.cars.find(car => car.id === id),
	getCarsOfType: state => type => state.cars.filter(car => car[type]),
	maxBenefit: s =>
		Math.max.apply(
			null,
			s.cars.map(car => car.benefit)
		)
};
