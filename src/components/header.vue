<template>
    <ion-header :translucent="true" id="tbar">
        <ion-toolbar>
            <ion-button id="menuButton" @click="openMenu(); clear();" slot="start" color="light">
                <ion-icon :icon="menu"></ion-icon>
            </ion-button>
            <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script>
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    menuController
} from '@ionic/vue'
import { defineComponent } from 'vue'
import { menu } from 'ionicons/icons'


export default defineComponent({
    setup() {
        return {
            menu
        }
    },
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButton,
        IonIcon
    },
    props: {
        title: {
            type: String,
            required: true
        },
        clear: {
            type: Function,
            default: function() {
                console.log("No clear function provided")
            }
        }
    },
    methods: {
        openMenu: function() {
            menuController.enable(true, 'app-menu')
            menuController.open("app-menu")
        },
    }
})
</script>

<style scoped>
#tbar {
    -webkit-app-region: drag;
}

#menuButton {
    -webkit-app-region: no-drag;
}
</style>