<template>
    <ion-menu menu-id="app-menu" side="start" content-id="main">
        <ion-header>
            <ion-toolbar>
                <ion-title>Fluids Calculator</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item button @click="menuNavigation('/home')">
                    <ion-label>Home</ion-label>
                </ion-item>
                <ion-item button @click="menuNavigation('/intrp')">
                    <ion-label>Interpolator</ion-label>
                </ion-item>
                <ion-item button @click="menuNavigation('/cRise')">
                    <ion-label>Capillary Rise</ion-label>
                </ion-item>
                <ion-item button @click="menuNavigation('/bernoulli')">
                    <ion-label>Bernoulli's Equation</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
        <ion-label id="versionNum">{{ version }}</ion-label>            
    </ion-menu>
</template>

<script>
import {
    IonMenu,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
    menuController
} from "@ionic/vue";
export default {
    components: {
        IonMenu,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle,
        IonItem,
        IonList,
        IonLabel
    },
    beforeCreate() {
        window.ipcRenderer.send("app_version")
        window.ipcRenderer.receive("app_version", (args) => {
            console.log(args.version)
            this.version = "v " + args.version
        })
    },
    data() {
        return {
            version: ""
        }
    },  
    methods:{
        menuNavigation(url){
            menuController.close("app-menu")
            this.$router.push(url);
        }
    }
};
</script>

<style scoped>
#versionNum {
    margin: 4%;
    color: rgb(124, 124, 124);
}
</style>