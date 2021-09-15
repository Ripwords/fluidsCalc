import { createRouter } from "@ionic/vue-router"
import home from "../views/Home.vue"

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
		path: "/density",
		name: "density",
		component: () => import("../views/density.vue"),
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
		path: "/eglhgl/",
		redirect: "/eglhgl/hgl",
		name: "eglhgl",
		component: () => import("../views/egl_hgl.vue"),
		children: [
			{
				path: "egl",
				component: () => import("../views/egl_hgl/egl.vue"),
			},
			{
				path: "hgl",
				component: () => import("../views/egl_hgl/hgl.vue"),
			},
		],
	},
	{
		path: "/stagnation",
		name: "stagnation",
		component: () => import("../views/stagnation.vue"),
	},
	{
		path: "/energy/",
		name: "energy",
		redirect: "/energy/eEqn",
		component: () => import("../views/energyEqn.vue"),
		children: [
			{
				path: "eEqn",
				component: () => import("../views/energy/eEqn.vue"),
			},
			{
				path: "hEqn",
				component: () => import("../views/energy/hEqn.vue"),
			},
		],
	},
	{
		path: "/momentum",
		name: "momentum",
		component: () => import("../views/momentum.vue"),
	},
	{
		path: "/internalFlow/",
		name: "internalFlow",
		redirect: "/internalFlow/re",
		component: () => import("../views/internalFlow.vue"),
		children: [
			{
				path: "re",
				component: () => import("../views/internalFlow/re.vue"),
			},
			{
				path: "lamFriction",
				component: () => import("../views/internalFlow/lamFriction.vue"),
			},
			{
				path: "loss",
				component: () => import("../views/internalFlow/loss.vue"),
			},
			{
				path: "laminar",
				component: () => import("../views/internalFlow/laminar.vue"),
			},
		],
	},
]

const router = createRouter({
	// history: createWebHashHistory(process.env.BASE_URL),
	routes,
	// mode: "hash",
})


export default router
