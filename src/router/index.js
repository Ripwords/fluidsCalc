import { createRouter, createWebHashHistory } from "@ionic/vue-router"
import home from "../views/home.vue"
import intrp from "../views/intrp.vue"
import cRise from "../views/capillaryRise.vue"

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
		component: intrp,
	},
	{
		path: "/cRise",
		name: "cRise",
		component: cRise,
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
	mode: "hash",
})

export default router
