<template>
	<ion-page>
		<Header title="Fluids Calculator"></Header>
		<Exit></Exit>
		<ion-content :fullscreen="true">
			<div id="container">
				<ion-reorder-group @ionItemReorder="doReorder($event)" :disabled="reord">
					<ion-card v-for="num in order" :key="num" button @click="menuNavigation(cards[num].path)">
						<ion-reorder>
							<ion-card-header>
								<ion-card-title>{{ cards[num].title }}</ion-card-title>
								<ion-card-subtitle>{{ cards[num].sub }}</ion-card-subtitle>
							</ion-card-header>
						</ion-reorder>
					</ion-card>
				</ion-reorder-group>
			</div>
		</ion-content>
		<ion-fab horizontal="start" vertical="bottom" slot="fixed">
			<ion-fab-button :color="toggleColor" @click="reordToggle()">
				<ion-icon :icon="swapVerticalOutline"></ion-icon>
			</ion-fab-button>
		</ion-fab>
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
		IonReorderGroup,
		IonReorder,
		menuController,
		IonFab,
		IonIcon,
		IonFabButton
	} from "@ionic/vue"

	import { swapVerticalOutline } from "ionicons/icons"
	import { defineComponent } from "vue"
	import Help from "../components/help.vue"
	import Header from "../components/header.vue"
	import Exit from "../components/exit.vue"

	export default defineComponent({
		setup() {
			return { swapVerticalOutline }
		},
		components: {
			IonPage,
			IonContent,
			IonCard,
			IonCardTitle,
			IonCardSubtitle,
			IonCardHeader,
			IonReorderGroup,
			IonReorder,
			IonFab,
			IonFabButton,
			IonIcon,
			Help,
			Header,
			Exit,
		},
		data() {
			return {
				toggleColor: "grey",
				reord: true,
				cards: this.$store.state.pages,
				order: this.$store.state.order
			}
		},
		methods: {
			menuNavigation(url) {
				menuController.close("app-menu")
				this.$router.push(url)
			},
			reordToggle() {
				this.reord = !this.reord
				if (this.toggleColor == "grey") {
					this.toggleColor = "light"
				} else {
					this.toggleColor = "grey"
				}
			},
			doReorder(event) {
				let itemToMove = this.order.splice(event.detail.from, 1)[0]
				this.order.splice(event.detail.to, 0, itemToMove)
				event.detail.complete()
				this.$store.commit("updateOrder", this.order)
			}
		}
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
