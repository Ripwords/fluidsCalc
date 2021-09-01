<template>
	<ion-page>
		<Header title="Fluids Calculator"></Header>
		<ion-content :fullscreen="true">
			<Exit></Exit>
			<div id="container">
				<ion-card v-for="card in cards" :key="card.title" button @click="menuNavigation(card.path)">
					<ion-card-header>
						<ion-card-title>{{ card.title }}</ion-card-title>
						<ion-card-subtitle>{{ card.sub }}</ion-card-subtitle>
					</ion-card-header>
				</ion-card>
			</div>
		</ion-content>
		<Help></Help>
	</ion-page>
</template>

<script>
	import {
		IonPage,
		IonContent,
		IonCard,
		IonCardTitle,
		IonCardSubtitle,
		IonCardHeader,
		menuController,
	} from "@ionic/vue"

	import { defineComponent } from "vue"

	import Help from "../components/help.vue"
	import Header from "../components/header.vue"
	import Exit from "../components/exit.vue"

	export default defineComponent({
		components: {
			IonPage,
			IonContent,
			IonCard,
			IonCardTitle,
			IonCardSubtitle,
			IonCardHeader,
			Help,
			Header,
			Exit,
		},
		data() {
			return {
				cards: [
					{
						title: this.$store.state.titles[0],
						path: this.$store.state.paths[0],
						sub: "Interpolates property table values"
					},
					{
						title: this.$store.state.titles[1],
						path: this.$store.state.paths[1],
						sub: "Calculates Density"
					},
					{
						title: this.$store.state.titles[2],
						path: this.$store.state.paths[2],
						sub: "Calculates capillary action"
					},
					{
						title:  this.$store.state.titles[3],
						path: this.$store.state.paths[3],
						sub: "Calculates Bernoulli's Equation"
					},
					{
						title: this.$store.state.titles[4],
						path: this.$store.state.paths[4],
						sub: "Calculates EGL & HGL"
					},
					{
						title: this.$store.state.titles[5],
						path: this.$store.state.paths[5],
						sub: "Calculates Stagnation Pressure"
					}
				]
			}
		},
		methods: {
			menuNavigation(url) {
				menuController.close("app-menu")
				this.$router.push(url)
			}
		},
	})
</script>

<style scoped>
	#container {
		text-align: center;

		position: relative;
		left: 0;
		right: 0;
		top: 5%;
	}

	#container strong {
		font-size: 20px;
		line-height: 26px;
	}

	#container p {
		font-size: 16px;
		line-height: 22px;

		color: #8c8c8c;

		margin: 0;
	}

	#container a {
		text-decoration: none;
	}
</style>
