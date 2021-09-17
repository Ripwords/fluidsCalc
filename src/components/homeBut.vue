<template>
    <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button @click="returnHome()" color="grey">
            <ion-icon :icon="homeOutline"></ion-icon>
        </ion-fab-button>
    </ion-fab>
</template>

<script>
import {
    IonFab,
    IonFabButton,
    IonIcon
} from "@ionic/vue"

import { homeOutline } from "ionicons/icons"

export default {
    setup() {
        return {
            homeOutline
        }
    },
    components: {
        IonFab,
        IonFabButton,
        IonIcon
    },
    methods: {
        returnHome() {
            this.$router.replace("/")
        }
    }
}
</script>