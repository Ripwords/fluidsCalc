import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"

export default createStore({
	state: {
		decimal: 4,
		order: [0, 1, 2, 3, 4, 5, 6],
		pages: [
			{
				title: "Interpolator",
				path: "/intrp",
				sub: "Interpolates property table values",
			},
			{
				title: "Density",
				path: "/density",
				sub: "Calculates Density",
			},
			{
				title: "Capillary Rise",
				path: "/cRise",
				sub: "Calculates capillary action",
			},
			{
				title: "Bernoulli's Equation",
				path: "/bernoulli",
				sub: "Calculates Bernoulli's Equation",
			},
			{
				title: "HGL & EGL",
				path: "/eglhgl",
				sub: "Calculates EGL & HGL",
			},
			{
				title: "Stagnation Pressure",
				path: "/stagnation",
				sub: "Calculates Stagnation Pressure",
			},
			{
				title: "Energy-Equation",
				path: "/energy",
				sub: "Calculates Energy Equation",
			},
		],
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
		updateOrder(state, newOrder) {
			state.order = newOrder
		},
	},
	plugins: [
		new VuexPersistence({
			modules: ["decimal", "order"],
		}).plugin,
	],
})
