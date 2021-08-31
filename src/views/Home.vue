<template>
	<ion-page>
		<Header title="Fluids Calculator"></Header>
		<ion-content :fullscreen="true">
			<Exit></Exit>
			<div id="container">
				<ion-card button @click="menuNavigation('/intrp')">
					<ion-card-header>
						<ion-card-title>Interpolator</ion-card-title>
						<ion-card-subtitle>Interpolates values</ion-card-subtitle>
					</ion-card-header>
				</ion-card>

				<ion-card button @click="menuNavigation('/cRise')">
					<ion-card-header>
						<ion-card-title>Capillary Rise</ion-card-title>
						<ion-card-subtitle>Calculates capillary action</ion-card-subtitle>
					</ion-card-header>
				</ion-card>

				<ion-card button @click="menuNavigation('/bernoulli')">
					<ion-card-header>
						<ion-card-title>Bernoulli's Equation</ion-card-title>
						<ion-card-subtitle>Calculates Bernoulli's Equation</ion-card-subtitle>
					</ion-card-header>
				</ion-card>

				<ion-card button @click="menuNavigation('/stagnation')">
					<ion-card-header>
						<ion-card-title>Stagnation Pressure</ion-card-title>
						<ion-card-subtitle>Calculates Stagnation Pressure</ion-card-subtitle>
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
