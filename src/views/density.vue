<template>
    <ion-page>
        <Header title="Density" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <Exit></Exit>
            <div id="container">
                <img class="invert" src="/img/density.png" style="padding-left: 2%; padding-right: 2%;">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>&rho; : </ion-label>
                        <ion-input v-if="!rhoShow" v-model="rho" type="number" placeholder="Enter Density ( kg/m^3 )"></ion-input>
                        <ion-input v-else type="number" :value=rhoShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>P : </ion-label>
                        <ion-input v-if="!PShow" v-model="p" type="number" placeholder="Enter Pressure ( kPa )"></ion-input>
                        <ion-input v-else type="number" :value=PShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>R : </ion-label>
                        <ion-input v-if="!RShow" v-model="r" type="number" placeholder="Enter Gas Constant ( kPa*m^3/kg*K )"></ion-input>
                        <ion-input v-else type="number" :value=RShow readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>T : </ion-label>
                        <ion-input v-if="!TShow" v-model="t" type="number" placeholder="Enter Temperature ( K )"></ion-input>
                        <ion-input v-else type="number" :value=TShow readonly></ion-input>
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
            rho: "",
            p: "",
            r: "",
            t: ""
        }
    },
    computed: {
        rhoShow() {
            if (this.p != "" && this.r != "" && this.t != "") {
                return parseFloat(this.p/(this.r*this.t)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        PShow() {
            if (this.rho != "" && this.r != "" && this.t != "") {
                return parseFloat(this.rho*this.r*this.t).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        RShow() {
            if (this.p != "" && this.rho != "" && this.t != "") {
                return parseFloat(this.p/(this.rho*this.t)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        TShow() {
            if (this.p != "" && this.r != "" && this.rho != "") {
                return parseFloat(this.p/(this.r*this.rho)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.rho = ""
            this.p = ""
            this.r = ""
            this.t = ""
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