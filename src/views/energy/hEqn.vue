<template>
    <ion-page>
        <Header title="Energy Head Equation" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <div id="container">
                <img class="invert" src="/img/energyHeadEqn.png" style="padding-left: 2%; padding-right: 2%;">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>&alpha;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-if="!alphaShow" v-model="alpha" type="number" placeholder="Correction Factor"></ion-input>
                        <ion-input v-else type="number" :value=alphaShow readonly></ion-input>

                        <ion-label>&#7715;<sub>p</sub> : </ion-label>
                        <ion-input v-if="!pumpShow" v-model="pump" type="number" placeholder="Pump Head ( m )"></ion-input>
                        <ion-input v-else type="number" :value=pumpShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>P<sub>1</sub> : </ion-label>
                        <ion-input v-if="!p1Show" v-model="p1" type="number" placeholder="Pressure 1 ( kPa )"></ion-input>
                        <ion-input v-else type="number" :value=p1Show readonly></ion-input>

                        <ion-label>P<sub>2</sub> : </ion-label>
                        <ion-input v-if="!p2Show" v-model="p2" type="number" placeholder="Pressure 2 ( kPa )"></ion-input>
                        <ion-input v-else type="number" :value=p2Show readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&rho;<sub>1</sub> : </ion-label>
                        <ion-input v-if="!rho1Show" v-model="rho1" type="number" placeholder="Density 1 ( kg/m^3 )"></ion-input>
                        <ion-input v-else type="number" :value=rho1Show readonly></ion-input>

                        <ion-label>&rho;<sub>2</sub> : </ion-label>
                        <ion-input v-if="!rho2Show" v-model="rho2" type="number" placeholder="Density 2 ( kg/m^3 )"></ion-input>
                        <ion-input v-else type="number" :value=rho2Show readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>V<sub>1</sub> : </ion-label>
                        <ion-input v-if="!v1Show" v-model="v1" type="number" placeholder="Velocity 1 ( m/s )"></ion-input>
                        <ion-input v-else type="number" :value=v1Show readonly></ion-input>

                        <ion-label>V<sub>2</sub> : </ion-label>
                        <ion-input v-if="!v2Show" v-model="v2" type="number" placeholder="Velocity 2 ( m/s )"></ion-input>
                        <ion-input v-else type="number" :value=v2Show readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>z<sub>1</sub> : </ion-label>
                        <ion-input v-if="!z1Show" v-model="z1" type="number" placeholder="rel height 1 ( m )"></ion-input>
                        <ion-input v-else type="number" :value=z1Show readonly></ion-input>

                        <ion-label>z<sub>2</sub> : </ion-label>
                        <ion-input v-if="!z2Show" v-model="z2" type="number" placeholder="rel height 2 ( m )"></ion-input>
                        <ion-input v-else type="number" :value=z2Show readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&#7715;<sub>t</sub> : </ion-label>
                        <ion-input v-if="!turbineShow" v-model="turbine" type="number" placeholder="Turbine Head ( m )"></ion-input>
                        <ion-input v-else type="number" :value=turbineShow readonly></ion-input>

                        <ion-label>&#7715;<sub>L</sub> : </ion-label>
                        <ion-input v-if="!lossShow" v-model="loss" type="number" placeholder="head loss ( m )"></ion-input>
                        <ion-input v-else type="number" :value=lossShow readonly></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <ion-button color="dark" @click="clear()" id="clear">Clear</ion-button>
            </div>
            <home-button></home-button>
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

import Header from '../../components/header.vue'
import HomeButton from '../../components/homeBut.vue'

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
        HomeButton
    },
    data() {
        return {
            alpha: "",
            p1: "",
            p2: "",
            rho1: "",
            rho2: "",
            v1: "",
            v2: "",
            z1: "",
            z2: "",
            pump: "",
            turbine: "",
            loss: ""
        }
    },
    computed: {
        alphaShow() {
            if (this.p1 != "" && this.p2 != "" && this.rho1 != "" && this.rho2 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.pump != "" && this.turbine != "" && this.loss != "") {
                return parseFloat(((this.p2*1000/(this.rho2*9.81))-(this.p1*1000/(this.rho1*9.81))+parseFloat(this.z2)-this.z1+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))/((this.v1**2-this.v2**2)/(2*9.81))).toFixed(this.$store.state.decimal) 
            } else {                
                return ""
            }
        },
        p1Show() {
            if (this.alpha != "" && this.p2 != "" && this.rho1 != "" && this.rho2 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.pump != "" && this.turbine != "" && this.loss != "") {
                return parseFloat(this.rho1/1000*9.81*(this.p2*1000/(this.rho2*9.81)+(this.alpha/(2*9.81))*(this.v2**2-this.v1**2)+(this.z2-this.z1)+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))).toFixed(this.$store.state.decimal) 
            } else {                
                return ""
            }
        },
        p2Show() {
            if (this.alpha != "" && this.p1 != "" && this.rho1 != "" && this.rho2 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.pump != "" && this.turbine != "" && this.loss != "") {
                return parseFloat(this.rho2/1000*9.81*(this.p1*1000/(this.rho1*9.81)+(this.alpha/(2*9.81))*(this.v1**2-this.v2**2)+(this.z1-this.z2)-(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))).toFixed(this.$store.state.decimal) 
            } else {                
                return ""
            }
        },
        rho1Show() {
            if (this.alpha != "" && this.p1 != "" && this.p2 != "" && this.rho2 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.pump != "" && this.turbine != "" && this.loss != "") {
                return parseFloat(this.p1*1000/(9.81*(this.p2*1000/(this.rho2*9.81)+(this.alpha/(2*9.81))*(this.v2**2-this.v1**2)+(this.z2-this.z1)+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump)))).toFixed(this.$store.state.decimal) 
            } else {                
                return ""
            }
        },
        rho2Show() {
            if (this.alpha != "" && this.p1 != "" && this.p2 != "" && this.rho1 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.pump != "" && this.turbine != "" && this.loss != "") {
                return parseFloat(this.p2*1000/(9.81*(this.p1*1000/(this.rho1*9.81)+(this.alpha/(2*9.81))*(this.v1**2-this.v2**2)+(this.z1-this.z2)-(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump)))).toFixed(this.$store.state.decimal) 
            } else {                
                return ""
            }
        },
        v1Show() {
            if (this.alpha != "" && this.p1 != "" && this.p2 != "" && this.rho2 != "" && this.rho1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.pump != "" && this.turbine != "" && this.loss != "") {
                return parseFloat(Math.sqrt(((this.p2*1000/(this.rho2*9.81))-(this.p1*1000/(this.rho1*9.81))+parseFloat(this.z2)-this.z1+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))/((this.alpha)/(2*9.81))+this.v2**2)).toFixed(this.$store.state.decimal)
            } else {                
                return ""
            }
        },
        v2Show() {
            if (this.alpha != "" && this.p1 != "" && this.p2 != "" && this.rho2 != "" && this.rho1 != "" && this.v1 != "" && this.z1 != "" && this.z2 != "" && this.pump != "" && this.turbine != "" && this.loss != "") {
               return parseFloat(Math.sqrt(this.v1**2-((this.p2*1000/(this.rho2*9.81))-(this.p1*1000/(this.rho1*9.81))+parseFloat(this.z2)-this.z1+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))/((this.alpha)/(2*9.81)))).toFixed(this.$store.state.decimal)
            } else {                
                return ""
            }
        },
        z1Show() {
            if (this.alpha != "" && this.p1 != "" && this.p2 != "" && this.rho2 != "" && this.rho1 != "" && this.v1 != "" && this.v2 != "" && this.z2 != "" && this.pump != "" && this.turbine != "" && this.loss != "") {
                return parseFloat((1000*this.p2/(this.rho2*9.81))-(1000*this.p1/(this.rho1*9.81))+((this.alpha/(2*9.81))*(this.v2**2-this.v1**2))+parseFloat(this.z2)+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump)).toFixed(this.$store.state.decimal) 
            } else {                
                return ""
            }
        },
        z2Show() {
            if (this.alpha != "" && this.p1 != "" && this.p2 != "" && this.rho2 != "" && this.rho1 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.pump != "" && this.turbine != "" && this.loss != "") {
                return parseFloat(this.z1-((1000*this.p2/(this.rho2*9.81))-(1000*this.p1/(this.rho1*9.81))+((this.alpha/(2*9.81))*(this.v2**2-this.v1**2))+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))).toFixed(this.$store.state.decimal) 
            } else {                
                return ""
            }
        },
        pumpShow() {
            if (this.alpha != "" && this.p1 != "" && this.p2 != "" && this.rho2 != "" && this.rho1 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.turbine != "" && this.loss != "") {
                return parseFloat(((1000*this.p2/(this.rho2*9.81))-(1000*this.p1/(this.rho1*9.81))+((this.alpha/(2*9.81))*(this.v2**2-this.v1**2))+parseFloat(this.z2)-this.z1+(parseFloat(this.turbine)+parseFloat(this.loss)))).toFixed(this.$store.state.decimal) 
            } else {                
                return ""
            }
        },
        turbineShow() {
            if (this.alpha != "" && this.p1 != "" && this.p2 != "" && this.rho2 != "" && this.rho1 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.pump != "" && this.loss != "") {
                return parseFloat((this.p1/(0.001*9.81*this.rho1))-(this.p2/(0.001*9.81*this.rho2))+((this.alpha/(2*9.81))*(this.v1**2-this.v2**2))+(this.z1-this.z2)+(this.pump-this.loss)).toFixed(this.$store.state.decimal) 
            } else {                
                return ""
            }
        },
        lossShow() {
            if (this.alpha != "" && this.p1 != "" && this.p2 != "" && this.rho2 != "" && this.rho1 != "" && this.v1 != "" && this.v2 != "" && this.z1 != "" && this.z2 != "" && this.pump != "" && this.turbine != "") {
                return parseFloat((this.p1/(0.001*9.81*this.rho1))-(this.p2/(0.001*9.81*this.rho2))+((this.alpha/(2*9.81))*(this.v1**2-this.v2**2))+(this.z1-this.z2)+(this.pump-this.turbine)).toFixed(this.$store.state.decimal)
            } else {                
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.mFR = "",
            this.alpha = "",
            this.p1 = "",
            this.p2 = "",
            this.rho1 = "",
            this.rho2 = "",
            this.v1 = "",
            this.v2 = "",
            this.z1 = "",
            this.z2 = "",
            this.pump = "",
            this.turbine = "",
            this.loss = ""
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