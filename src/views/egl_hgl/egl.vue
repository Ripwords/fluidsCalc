<template>
    <ion-page>
        <Header title="Energy Grade Line" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <Exit></Exit>
            <div id="container">
                <img class="invert" src="/img/egl.png">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>EGL : </ion-label>
                        <ion-input v-if="!eglShow" v-model="egl" type="number" placeholder="Enter EGL ( m )"></ion-input>
                        <ion-input v-else type="number" :value=eglShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>P&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!pShow" v-model="p" type="number" placeholder="Enter Static Pressure ( kPa )"></ion-input>
                        <ion-input v-else type="number" :value=pShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&rho;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!rhoShow" v-model="rho" type="number" placeholder="Enter Fluid Density ( kg/m^3 )"></ion-input>
                        <ion-input v-else type="number" :value=rhoShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!vShow" v-model="v" type="number" placeholder="Enter Fluid Velocity ( m/s )"></ion-input>
                        <ion-input v-else type="number" :value=vShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!zShow" v-model="z" type="number" placeholder="Enter relative height ( m )"></ion-input>
                        <ion-input v-else type="number" :value=zShow readonly></ion-input>
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
            egl: "",
            p: "",
            rho: "",
            v: "",
            z: ""
        }
    },
    computed: {
        eglShow() {
            if (this.p != "" && this.rho != "" && this.v != "" && this.z != "") {
                return parseFloat((this.p/(this.rho*9.81))+(this.v**2/(2*9.81))+parseFloat(this.z)).toFixed(this.$store.state.decimal)
            } else {
                return "" 
            }
        },
        pShow() {
            if (this.egl != "" && this.rho != "" && this.v != "" && this.z != "") {
                return parseFloat((this.egl-this.z-(this.v**2/(2*9.81)))*this.rho*9.81).toFixed(this.$store.state.decimal)
            } else {
                return "" 
            }
        },
        rhoShow() {
            if (this.p != "" && this.egl != "" && this.v != "" && this.z != "") {
                return parseFloat(this.p/(9.81*(this.egl-this.z-(this.v**2/(2*9.81))))).toFixed(this.$store.state.decimal)
            } else {
                return "" 
            }
        },
        vShow() {
            if (this.egl != "" && this.rho != "" && this.p != "" && this.z != "") {
                return parseFloat(Math.sqrt((this.egl-this.z-(this.p/(9.81*this.rho)))*(2*9.81))).toFixed(this.$store.state.decimal)
            } else {
                return "" 
            }
        },
        zShow() {
            if (this.egl != "" && this.rho != "" && this.v != "" && this.p != "") {
                return parseFloat(this.egl-(this.p/(this.rho*9.81))-(this.v**2/(2*9.81))).toFixed(this.$store.state.decimal)
            } else {
                return "" 
            }
        }
    },
    methods: {
        clear() {
            this.egl = ""
            this.p = ""
            this.rho = ""
            this.v = ""
            this.z = ""
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