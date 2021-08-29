<template>
    <div>
        <ion-fab horizontal="end" vertical="bottom" slot="fixed">
            <ion-fab-button color="light">
                <ion-icon :icon="help"></ion-icon>
            </ion-fab-button>
            <ion-fab-list side="start">
                <ion-fab-button @click="openGithub()">
                    <ion-icon :icon="logoGithub"></ion-icon>
                </ion-fab-button>
                <ion-fab-button @click="copyMail()">
                    <ion-icon :icon="mailOutline"></ion-icon>
                </ion-fab-button>
            </ion-fab-list>
        </ion-fab>
    </div>
</template>

<script>
import {
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon
} from '@ionic/vue'
import { defineComponent } from 'vue'
import {
    help,
    mailOutline,
    logoGithub,
    exitOutline,
    menu
} from 'ionicons/icons'

export default defineComponent({
    setup() {
        return {
            help,
            mailOutline,
            logoGithub,
            exitOutline,
            menu
        }
    },
    components: {
        IonFab,
        IonFabButton,
        IonFabList,
        IonIcon
    },
    methods: {
        openGithub: function() {
            window.ipcRenderer.send('openGithub', 'open')
        },
        copyMail: function() {
            window.ipcRenderer.send('copyMail', 'copy')
        },
    }
})
</script>