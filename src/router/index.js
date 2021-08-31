import { createRouter, createWebHashHistory } from "@ionic/vue-router"
import home from "../views/home.vue"

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "home",
		component: home,
	},
	{
		path: "/intrp",
		name: "intrp",
		component: () => import("../views/intrp.vue"),
	},
	{
		path: "/cRise",
		name: "cRise",
		component: () => import("../views/capillaryRise.vue"),
	},
	{
		path: "/bernoulli/",
		redirect: "/bernoulli/energy",
		name: "bernoulli",
		component: () => import("../views/bernoulli.vue"),
		children: [
			{
				path: "energy",
				component: () => import("../views/bernoulli/energy.vue"),
			},
			{
				path: "pressure",
				component: () => import("../views/bernoulli/pressure.vue"),
			},
			{
				path: "head",
				component: () => import("../views/bernoulli/head.vue"),
			},
		],
	},
	{
		path: "/stagnation",
		name: "stagnation",
		component: () => import("../views/stagnation.vue"),
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
	mode: "hash",
})

export default router
