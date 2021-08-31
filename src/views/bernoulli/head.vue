<template>
    <ion-page>
        <Header title="Bernoulli's Head Equation" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <Exit></Exit>
            <div id="container">
                <img class="invert" src="/img/bHead.png" width="440" height="75">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>P<sub>1</sub> : </ion-label>
                        <ion-input v-if="!p1Show" v-model="p1" type="number" placeholder="Enter Pressure 1 ( kPa )"></ion-input>
                        <ion-label class="output" v-if="p1Show" >&nbsp;{{ p1Show }}</ion-label>
                        <ion-label>P<sub>2</sub> : </ion-label>
                        <ion-input v-if="!p2Show" v-model="p2" type="number" placeholder="Enter Pressure 2 ( kPa )"></ion-input>
                        <ion-label class="output" v-if="p2Show" >&nbsp;{{ p2Show }}</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>V<sub>1</sub> : </ion-label>
                        <ion-input v-if="!v1Show" v-model="v1" type="number" placeholder="Enter Velocity 1 ( m/s )"></ion-input>
                        <ion-label class="output" v-if="v1Show" >&nbsp;{{ v1Show }}</ion-label>
                        <ion-label>V<sub>2</sub> : </ion-label>
                        <ion-input v-if="!v2Show" v-model="v2" type="number" placeholder="Enter Velocity 2 ( m/s )"></ion-input>
                        <ion-label class="output" v-if="v2Show" >&nbsp;{{ v2Show }}</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>z<sub>1</sub> : </ion-label>
                        <ion-input v-if="!z1Show" v-model="z1" type="number" placeholder="Enter relative height 1 ( m )"></ion-input>
                        <ion-label class="output" v-if="z1Show" >&nbsp;{{ z1Show }}</ion-label>
                        <ion-label>z<sub>2</sub> : </ion-label>
                        <ion-input v-if="!z2Show" v-model="z2" type="number" placeholder="Enter relative height 2 ( m )"></ion-input>
                        <ion-label class="output" v-if="z2Show" >&nbsp;{{ z2Show }}</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>&rho;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!rhoShow" v-model="rho" type="number" placeholder="Enter Density ( kg/m^3 )"></ion-input>
                        <ion-label class="output" v-if="rhoShow" >&nbsp;{{ rhoShow }}</ion-label>
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

import Help from '../../components/help.vue'
import Header from '../../components/header.vue'
import Exit from '../../components/exit.vue'

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
            p1: "",
            p2: "",
            v1: "",
            v2: "",
            z1: "",
            z2: "",
            rho: "",
        }
    },
    computed: {
        p1Show() {
            if (this.p2 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.rho != "") {
                return parseFloat(this.rho * ((this.p2/this.rho) + (this.v2**2 / 2) + 9.81*(this.z2 - this.z1) - (this.v1**2 /2))).toFixed(5)
            } else {
                return ""
            }
        },
        p2Show() {
            if (this.p1 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.rho != "") {
                return parseFloat(this.rho * ((0.001*this.p1/this.rho) + (this.v1**2 / 2) + 9.81*(this.z1 - this.z2) - (this.v2**2 /2))).toFixed(5)
            } else {
                return ""
            }
        },
        v1Show() {
            if (this.p1 != "" && this.p2 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.rho != "") {
                return parseFloat(Math.sqrt(2*(((0.001*this.p2-0.001*this.p1)/this.rho) + (this.v2*this.v2/2) + 9.81*(this.z2-this.z1)))).toFixed(5)
            } else {
                return ""
            }
        },
        v2Show() {
            if (this.p1 != "" && this.p2 != "" && this.v1 != "" && this.z1 != "" && this.z2 != "" && this.rho != "") {
                return parseFloat(Math.sqrt(2*(((0.001*this.p1-0.001*this.p2)/this.rho) + (this.v1*this.v1/2) + 9.81*(this.z1-this.z2)))).toFixed(5)
            } else {
                return ""
            }
        },
        z1Show() {
            if (this.p1 != "" && this.p2 != "" && this.v1 != "" && this.v2 != "" && this.z2 != "" && this.rho != "") {
                return parseFloat((((0.001*this.p2-0.001*this.p1)/this.rho) + (this.v2**2 - this.v1**2)/2 + 9.81*this.z2) / 9.81).toFixed(5)
            } else {
                return ""
            }
        },
        z2Show() {
            if (this.p1 != "" && this.p2 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.rho != "") {
                return parseFloat((((0.001*this.p1-0.001*this.p2)/this.rho) + (this.v1**2 - this.v2**2)/2 + 9.81*this.z1) / 9.81).toFixed(5)
            } else {
                return ""
            }
        },
        rhoShow() {
            if (this.p1 != "" && this.p2 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "") {
                return parseFloat((0.001*this.p2 - 0.001*this.p1) / ((this.v1**2 - this.v2**2)/2 + (9.81*(this.z1-this.z2)))).toFixed(5)
            } else {
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.p1 = ""
            this.p2 = ""
            this.v1 = ""
            this.v2 = ""
            this.z1 = ""
            this.z2 = ""
            this.rho = ""
        }
    }
})
</script>

<style scoped>
.output {
  width: 100%;
  margin-right: 13.5%;
}

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
  width: 45.75%;
}

#container a {
  text-decoration: none;
}
</style>