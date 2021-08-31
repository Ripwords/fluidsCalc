<template id="main">
    <ion-page>
        <ion-tabs>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="Pressure" href="/bernoulli/pressure">
                    <ion-icon :icon="cloudOutline"></ion-icon>
                    <ion-label>Pressure</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="Energy" href="/bernoulli/energy">
                    <ion-icon :icon="flameOutline"></ion-icon>
                    <ion-label>Energy</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="Head" href="/bernoulli/head">
                    <ion-icon :icon="arrowUp"></ion-icon>
                    <ion-label>Head</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script>
import {
    IonPage, 
    IonIcon, 
    IonLabel, 
    IonTabBar,
    IonTabButton,
    IonTabs
} from "@ionic/vue";
import { defineComponent } from 'vue';
import { flameOutline, arrowUp, cloudOutline } from 'ionicons/icons'

export default defineComponent({
    components: {
        IonPage,
        IonIcon,
        IonLabel,
        IonTabBar,
        IonTabButton,
        IonTabs,
    },
    setup() {
        return {
            flameOutline,
            arrowUp,
            cloudOutline
        }
    }
});
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