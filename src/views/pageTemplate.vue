<template>
    <ion-page>
        <Header title="template"></Header>
        <ion-content :fullscreen="true">
            <div id="container">
                <img class="invert" src="" style="padding-left: 2%; padding-right: 2%;">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label></ion-label>
                        <ion-input></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <ion-button color="dark" @click="clear()" id="clear">Clear</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonButton,
    IonInput,
    IonList,
    IonItem,
    IonLabel
} from '@ionic/vue'

import {
    defineComponent
} from 'vue'

import Header from '../components/header.vue'

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonButton,
        IonInput,
        IonList,
        IonItem,
        IonLabel,
        Header,
    },
    data() {
        return {

        }
    },
    computed: {
        
    },
    methods: {
        clear() {

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