<template>
    <ion-fab horizontal="end" vertical="top" edge slot="fixed">
        <ion-fab-button @click="appQuit()" color="light" id="exit" size="small">
        <ion-icon :icon="exitOutline"></ion-icon>
        </ion-fab-button>
    </ion-fab>
</template>

<script>
import {
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/vue'
import { defineComponent } from 'vue'
import { exitOutline } from 'ionicons/icons'

export default defineComponent({
    setup() {
        return {
            exitOutline
        }
    },
    components: {
        IonFab,
        IonFabButton,
        IonIcon
    },
    methods: {
        appQuit: function() {
            window.ipcRenderer.send('quitApp', 'quit')
            console.log("Done")
        },
    }
})
</script>

<style scoped>
#exit {
    -webkit-app-region: no-drag;
    margin-top: 65%;
}
</style>