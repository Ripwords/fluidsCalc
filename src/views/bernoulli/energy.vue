<template>
    <ion-page>
        <Header title="Bernoulli's Energy Equation" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <Exit></Exit>
            <div id="container">
                <img class="invert" src="/img/bEnergy.png" width="450" height="75">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>P<sub>1</sub> : </ion-label>
                        <ion-input v-if="!p1Show" v-model="p1" type="number" placeholder="Enter Pressure 1 ( kPa )"></ion-input>
                        <ion-input v-else type="number" :value=p1Show readonly></ion-input>
                        <ion-label>P<sub>2</sub> : </ion-label>
                        <ion-input v-if="!p2Show" v-model="p2" type="number" placeholder="Enter Pressure 2 ( kPa )"></ion-input>
                        <ion-input v-else type="number" :value=p2Show readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>V<sub>1</sub> : </ion-label>
                        <ion-input v-if="!v1Show" v-model="v1" type="number" placeholder="Enter Velocity 1 ( m/s )"></ion-input>
                        <ion-input v-else type="number" :value=v1Show readonly></ion-input>
                        <ion-label>V<sub>2</sub> : </ion-label>
                        <ion-input v-if="!v2Show" v-model="v2" type="number" placeholder="Enter Velocity 2 ( m/s )"></ion-input>
                        <ion-input v-else type="number" :value=v2Show readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>z<sub>1</sub> : </ion-label>
                        <ion-input v-if="!z1Show" v-model="z1" type="number" placeholder="Enter relative height 1 ( m )"></ion-input>
                        <ion-input v-else type="number" :value=z1Show readonly></ion-input>
                        <ion-label>z<sub>2</sub> : </ion-label>
                        <ion-input v-if="!z2Show" v-model="z2" type="number" placeholder="Enter relative height 2 ( m )"></ion-input>
                        <ion-input v-else type="number" :value=z2Show readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&rho;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!rhoShow" v-model="rho" type="number" placeholder="Enter Density ( kg/m^3 )"></ion-input>
                        <ion-input v-else type="number" :value=rhoShow readonly></ion-input>
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
                return parseFloat(this.rho * ((1000*this.p2/this.rho) + (this.v2**2 / 2) + 9.81*(this.z2 - this.z1) - (this.v1**2 /2))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        p2Show() {
            if (this.p1 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.rho != "") {
                return parseFloat(this.rho * ((1000*this.p1/this.rho) + (this.v1**2 / 2) + 9.81*(this.z1 - this.z2) - (this.v2**2 /2))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        v1Show() {
            if (this.p1 != "" && this.p2 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.rho != "") {
                return parseFloat(Math.sqrt(2*(((1000*this.p2-1000*this.p1)/this.rho) + (this.v2*this.v2/2) + 9.81*(this.z2-this.z1)))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        v2Show() {
            if (this.p1 != "" && this.p2 != "" && this.v1 != "" && this.z1 != "" && this.z2 != "" && this.rho != "") {
                return parseFloat(Math.sqrt(2*(((1000*this.p1-1000*this.p2)/this.rho) + (this.v1*this.v1/2) + 9.81*(this.z1-this.z2)))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        z1Show() {
            if (this.p1 != "" && this.p2 != "" && this.v1 != "" && this.v2 != "" && this.z2 != "" && this.rho != "") {
                return parseFloat((((1000*this.p2-1000*this.p1)/this.rho) + (this.v2**2 - this.v1**2)/2 + 9.81*this.z2) / 9.81).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        z2Show() {
            if (this.p1 != "" && this.p2 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.rho != "") {
                return parseFloat((((1000*this.p1-1000*this.p2)/this.rho) + (this.v1**2 - this.v2**2)/2 + 9.81*this.z1) / 9.81).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        rhoShow() {
            if (this.p1 != "" && this.p2 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "") {
                return parseFloat((1000*this.p2 - 1000*this.p1) / ((this.v1**2 - this.v2**2)/2 + (9.81*(this.z1-this.z2)))).toFixed(this.$store.state.decimal)
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