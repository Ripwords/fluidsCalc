<template>
    <ion-page>
        <Header title="Stagnation Pressure" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <Exit></Exit>
            <div id="container">
                <img class="invert" src="/img/stagnation.png" width="250" height="75">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>P<sub>stag</sub> : </ion-label>
                        <ion-input v-if="!pStagShow" v-model="pStag" type="number" placeholder="Enter Stagnation Pressure ( kPa )"></ion-input>
                        <ion-input v-else type="number" :value=pStagShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!pShow" v-model="p" type="number" placeholder="Enter Static Pressure ( kPa )"></ion-input>
                        <ion-input v-else type="number" :value=pShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&rho; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!rhoShow" v-model="rho" type="number" placeholder="Enter Fluid Density ( kg/m^3 )"></ion-input>
                        <ion-input v-else type="number" :value=rhoShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!vShow" v-model="v" type="number" placeholder="Enter Fluid Velocity ( m/s )"></ion-input>
                        <ion-input v-else type="number" :value=vShow readonly></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <ion-button color="dark" @click="clear()" id="clear">Clear</ion-button>
            </div>
        </ion-content>
        <Help></Help>
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

import Help from '../components/help.vue'
import Header from '../components/header.vue'
import Exit from '../components/exit.vue'

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonButton,
        IonInput,
        IonList,
        IonItem,
        IonLabel,
        Help,
        Header,
        Exit
    },
    data() {
        return {
            pStag: "",
            p: "",
            rho: "",
            v: ""
        }
    },
    computed: {
        pStagShow() {
            if (this.p != "" && this.rho != "" && this.v != "") {
                return parseFloat(1000*this.p + 1000*(this.rho * this.v**2)/2).toFixed(5)
            } else {
                return ""
            }
        },
        pShow() {
            if (this.pStag != "" && this.rho != "" && this.v != "") {
                return parseFloat(this.pStag*1000 - (1000*(this.rho*this.v**2)/2)).toFixed(5)
            } else {
                return ""
            }
        },
        rhoShow() {
            if (this.pStag != "" && this.p != "" && this.v != "") {
                return parseFloat((this.pStag - this.p)/((this.v**2)/2)).toFixed(5)
            } else {
                return ""
            }
        },
        vShow() {
            if (this.pStag != "" && this.p != "" && this.rho != "") {
                return parseFloat(Math.sqrt((2/this.rho)*(this.pStag-this.p)*1000)).toFixed(5)
            } else {
                return ""
            }
        },
    },
    methods: {
        clear() {
            this.pStag = ""
            this.p = ""
            this.rho = ""
            this.v = ""
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