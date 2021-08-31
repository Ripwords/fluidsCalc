import { createStore } from "vuex"

export default createStore({
	state: {
		decimal: 5,
	},
	mutations: {
		updateDec(state, newDec) {
			if (newDec >= 0 && newDec <= 6) {
				state.decimal = newDec
			}
		},
	},
	actions: {},
	modules: {},
})
