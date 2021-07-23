export const state = () => ({
	callBack: false,
	gallery: false,
	modal: {
		open: false,
		title: ""
	},
	pushModel: false
});

export const mutations = {
	modalOpen(state, { name, title, gallery, id, model }) {
		state.pushModel = false;
		id && model ? (state.pushModel = { id, model }) : false;
		console.log(state.pushModel);
		state.modal.open = true;
		state.modal.title = title || "Оставьте заявку и мы Вам перезвоним";
		name === "gallery" ? (state[name] = gallery) : (state[name] = true);
	},
	modalClose(state, { name }) {
		state.pushModel = false;
		state.modal.open = false;
		state[name] = false;
	},
	galleryNext(state) {
		if (state.gallery) {
			state.gallery.photos.length - 1 !== state.gallery.active
				? state.gallery.active++
				: (state.gallery.active = 0);
		}
	},
	galleryPrev(state) {
		if (state.gallery) {
			state.gallery.active !== 0
				? state.gallery.active--
				: (state.gallery.active = state.gallery.photos.length - 1);
		}
	}
};

export const getters = {
	title: s => s.modal.title,
	visible: s => s.modal.open,
	gallery: s => s.gallery,
	callback: s => s.callBack,
	pushModel: s => s.pushModel
};
