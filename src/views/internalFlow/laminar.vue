<template>
    <ion-page>
        <Header title="Laminar Properties" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <Exit></Exit>
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
                        <ion-input v-model="pdrop" type="number" placeholder="Enter Pressure Drop ( kPa )"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&rho; : </ion-label>
                        <ion-input v-model="rho" type="number" placeholder="Enter Fluid Density ( kg/m^3 )"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>L : </ion-label>
                        <ion-input v-model="l" type="number" placeholder="Enter Length ( m )"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&theta; : </ion-label>
                        <ion-input v-model="theta" type="number" placeholder="Enter Tilt Angle ( degrees )"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>D : </ion-label>
                        <ion-input v-model="d" type="number" placeholder="Enter Diameter ( degrees )"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&mu; : </ion-label>
                        <ion-input v-model="mu" type="number" placeholder="Enter Dynamic Viscosity ( kg/ms )"></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <ion-item>
                    <ion-label v-if="selection == 'vave'">V<sub>avg</sub> : </ion-label>
                    <ion-input v-if="selection == 'vave'" :value="vaveShow" readonly></ion-input>
                    <ion-input v-if="selection == 'flowRate'" :value="FRShow" readonly></ion-input>
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
            mu: ""
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
        }
    },
    methods: {
        clear() {
            this.pdrop = "",
            this.rho = "",
            this.l = "",
            this.theta = "",
            this.d = "",
            this.mu = ""
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