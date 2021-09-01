import { createStore } from "vuex"

export default createStore({
	state: {
		decimal: 4,
		titles: [
			"Interpolator",
			"Density",
			"Capillary Rise",
			"Bernoulli's Equation",
			"HGL & EGL",
			"Stagnation Pressure",
		],
		paths: ["/intrp", "/density", "/cRise", "/bernoulli", "/eglhgl", "/stagnation"],
	},
	mutations: {
		updateDec(state, newDec) {
			if (newDec >= 0 && newDec <= 6) {
				state.decimal = newDec
			} else if (newDec > 6) {
				state.decimal = 6
			} else {
				state.decimal = 0
			}
		},
	},
	actions: {},
	modules: {},
})
