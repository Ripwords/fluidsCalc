<template id="main">
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="HGL" href="/eglhgl/hgl">
                    <ion-icon :icon="returnDownForwardOutline"></ion-icon>
                    <ion-label>HGL</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="EGL" href="/eglhgl/egl">
                    <ion-icon :icon="flameOutline"></ion-icon>
                    <ion-label>EGL</ion-label>
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
    IonRouterOutlet,
    IonTabs
} from "@ionic/vue";
import { defineComponent } from 'vue';
import { flameOutline, returnDownForwardOutline } from 'ionicons/icons'

export default defineComponent({
    components: {
        IonPage,
        IonIcon,
        IonLabel,
        IonTabBar,
        IonTabButton,
        IonRouterOutlet,
        IonTabs,
    },
    setup() {
        return {
            flameOutline,
            returnDownForwardOutline
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