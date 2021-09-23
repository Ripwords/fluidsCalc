<template>
    <ion-page>
        <Header title="Laminar Properties" :clear="clear"></Header>
        <Exit></Exit>
        <ion-content :fullscreen="true">
            <div id="container">
                <ion-item>
                    <ion-label>Property : </ion-label>
                    <ion-select v-model="selection" interface="popover">
                        <ion-select-option value="vave">V<sub>avg</sub></ion-select-option>
                        <ion-select-option value="flowRate">Volume Flow Rate</ion-select-option>
                    </ion-select>
                </ion-item>
                <br>
                <img v-if="selection == 'vave'" class="invert" src="/img/Vave.png" style="padding-left: 2%; padding-right: 2%;">
                <img v-if="selection == 'flowRate'" class="invert" src="/img/flowRate.png" style="padding-left: 2%; padding-right: 2%;">
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>P : </ion-label>
                        <ion-input v-if="!P2Show && !P1Show" v-model="pdrop" type="number" placeholder="Enter Pressure Drop ( kPa )"></ion-input>
                        <ion-input v-if="P2Show" :value="P2Show" readonly></ion-input>
                        <ion-input v-if="P1Show" :value="P1Show" readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&rho; : </ion-label>
                        <ion-input v-if="!rho1Show && !rho2Show" v-model="rho" type="number" placeholder="Enter Fluid Density ( kg/m^3 )"></ion-input>
                        <ion-input v-if="rho1Show" :value="rho1Show" readonly></ion-input>
                        <ion-input v-if="rho2Show" :value="rho2Show" readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>L : </ion-label>
                        <ion-input v-if="!l1Show && !l2Show" v-model="l" type="number" placeholder="Enter Length ( m )"></ion-input>
                        <ion-input v-if="l1Show" :value="l1Show" readonly></ion-input>
                        <ion-input v-if="l2Show" :value="l2Show" readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&theta; : </ion-label>
                        <ion-input v-if="!theta1Show && !theta2Show" v-model="theta" type="number" placeholder="Enter Tilt Angle ( degrees )"></ion-input>
                        <ion-input v-if="theta1Show" :value="theta1Show" readonly></ion-input>
                        <ion-input v-if="theta2Show" :value="theta2Show" readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>D : </ion-label>
                        <ion-input v-if="!d1Show && !d2Show" v-model="d" type="number" placeholder="Enter Diameter ( m )"></ion-input>
                        <ion-input v-if="d1Show" :value="d1Show" readonly></ion-input>
                        <ion-input v-if="d2Show" :value="d2Show" readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&mu; : </ion-label>
                        <ion-input v-if="!mu1Show && !mu2Show" v-model="mu" type="number" placeholder="Enter Dynamic Viscosity ( kg/ms )"></ion-input>
                        <ion-input v-if="mu1Show" :value="mu1Show" readonly></ion-input>
                        <ion-input v-if="mu2Show" :value="mu2Show" readonly></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <ion-item>
                    <ion-label v-if="selection == 'vave'">V<sub>avg</sub> : </ion-label>
                    <ion-label v-if="selection == 'flowRate'">Flow Rate : </ion-label>

                    <ion-input v-model="va" v-if="selection == 'vave' && !vaveShow" type="number" placeholder="Enter Average Velocity ( m/s )"></ion-input>
                    <ion-input v-model="fr" v-if="selection == 'flowRate' && !FRShow" type="number" placeholder="Enter Volume Flow Rate ( m^3/s )"></ion-input>

                    <ion-input v-if="selection == 'vave' && vaveShow" :value="vaveShow" readonly></ion-input>
                    <ion-input v-if="selection == 'flowRate' && FRShow" :value="FRShow" readonly></ion-input>
                </ion-item>
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
    IonLabel,
    IonSelect,
    IonSelectOption
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
        Exit,
        IonSelect,
        IonSelectOption
    },
    data() {
        return {
            selection: "vave",
            pdrop: "",
            rho: "",
            l: "",
            theta: "",
            d: "",
            mu: "",
            fr: "",
            va: ""
        }
    },
    computed: {
        vaveShow() {
            if (this.pdrop != "" && this.rho != "" && this.l != "" && this.theta != "" && this.d != "" && this.mu != "" && this.selection == "vave") {
                return parseFloat((this.pdrop*1000-(this.rho*9.81*this.l*Math.sin(this.theta*Math.PI/180)))*this.d**2/(32*this.mu*this.l)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        FRShow() {
            if (this.pdrop != "" && this.rho != "" && this.l != "" && this.theta != "" && this.d != "" && this.mu != "" && this.selection == "flowRate") {
                return parseFloat((this.pdrop*1000-(this.rho*9.81*this.l*Math.sin(this.theta*Math.PI/180)))*Math.PI*this.d**4/(128*this.mu*this.l)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        P1Show() {
            if (this.fr != "" && this.rho != "" && this.l != "" && this.theta != "" && this.d != "" && this.mu != "" && this.selection == "flowRate") {
                return parseFloat(0.001*((this.fr*128*this.mu*this.l/(Math.PI*this.d**4))+(this.rho*9.81*this.l*Math.sin(this.theta*Math.PI/180)))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        P2Show() {
            if (this.rho != "" && this.l != "" && this.theta != "" && this.d != "" && this.mu != "" && this.selection == "vave" && this.va != "") {
                return parseFloat(0.001*((this.va*32*this.mu*this.l/this.d**2)+(this.rho*9.81*this.l*Math.sin(this.theta*Math.PI/180)))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        rho1Show() {
            if (this.pdrop != "" && this.l != "" && this.theta != "" && this.d != "" && this.mu != "" && this.selection == "flowRate" && this.fr != "") {
                return parseFloat((1000*this.pdrop-(this.fr*128*this.mu*this.l/(Math.PI*this.d**4)))/(9.81*this.l*Math.sin(this.theta*Math.PI/180))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        rho2Show() {
            if (this.pdrop != "" && this.l != "" && this.theta != "" && this.d != "" && this.mu != "" && this.selection == "vave" && this.va != "") {
                return parseFloat((1000*this.pdrop-(this.va*32*this.mu*this.l/(this.d**2)))/(9.81*this.l*Math.sin(this.theta*Math.PI/180))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        l1Show() {
            if (this.pdrop != "" && this.rho != "" && this.theta != "" && this.d != "" && this.mu != "" && this.selection == "vave" && this.va != "") {
                return parseFloat((1000*this.pdrop)/(((this.va*32*this.mu)/(this.d**2))+(this.rho*9.81*Math.sin(this.theta*Math.PI/180)))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        l2Show() {
            if (this.pdrop != "" && this.rho != "" && this.theta != "" && this.d != "" && this.mu != "" && this.selection == "flowRate" && this.fr != "") {
                return parseFloat(1000*this.pdrop/(((this.fr*128*this.mu)/(Math.PI*this.d**4))+(this.rho*9.81*Math.sin(this.theta*Math.PI/180)))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        theta1Show() {
            if (this.pdrop != "" && this.rho != "" && this.l != "" && this.d != "" && this.mu != "" && this.selection == "flowRate" && this.fr != "") {
                return parseFloat(180*Math.asin((1000*this.pdrop-(this.fr*128*this.mu*this.l/(Math.PI*this.d**4)))/(this.rho*9.81*this.l))/Math.PI).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        theta2Show() {
            if (this.pdrop != "" && this.rho != "" && this.l != "" && this.d != "" && this.mu != "" && this.selection == "vave" && this.va != "") {
                return parseFloat(180*Math.asin((1000*this.pdrop-(this.va*32*this.mu*this.l/(this.d**2)))/(this.rho*9.81*this.l))/Math.PI).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        d1Show() {
            if (this.pdrop != "" && this.rho != "" && this.l != "" && this.theta != "" && this.mu != "" && this.selection == "vave" && this.va != "") {
                return parseFloat(Math.sqrt((this.va*32*this.mu*this.l)/(1000*this.pdrop-this.rho*9.81*this.l*Math.sin(this.theta*Math.PI/180)))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        d2Show() {
            if (this.pdrop != "" && this.rho != "" && this.l != "" && this.theta != "" && this.mu != "" && this.selection == "flowRate" && this.fr != "") {
                return parseFloat(Math.sqrt(Math.sqrt((this.fr*128*this.mu*this.l)/(Math.PI*(1000*this.pdrop-this.rho*9.81*this.l*Math.sin(this.theta*Math.PI/180)))))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        mu1Show() {
            if (this.pdrop != "" && this.rho != "" && this.l != "" && this.theta != "" && this.d != "" && this.selection == "flowRate" && this.fr != "") {
                return parseFloat((this.d**4*Math.PI*(1000*this.pdrop-this.rho*9.81*this.l*Math.sin(this.theta*Math.PI/180)))/(this.fr*128*this.l)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        mu2Show() {
            if (this.pdrop != "" && this.rho != "" && this.l != "" && this.theta != "" && this.d != "" && this.selection == "vave" && this.va != "") {
                return parseFloat((this.d**2*(1000*this.pdrop-this.rho*9.81*this.l*Math.sin(this.theta*Math.PI/180)))/(this.va*32*this.l)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
    },
    methods: {
        clear() {
            this.pdrop = ""
            this.rho = ""
            this.l = ""
            this.theta = ""
            this.d = ""
            this.mu = ""
            this.va = ""
            this.fr = ""
        }
    },
    watch: {
        selection: function() {
            this.clear()
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