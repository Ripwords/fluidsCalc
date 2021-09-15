<template>
    <ion-page>
        <Header title="Hydraulic Grade Line" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <div id="container">
                <img class="invert" src="/img/hgl.png">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>HGL : </ion-label>
                        <ion-input v-if="!hglShow" v-model="hgl" type="number" placeholder="Enter HGL ( m )"></ion-input>
                        <ion-input v-else type="number" :value=hglShow readonly></ion-input>
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
                        <ion-label>z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="!zShow" v-model="z" type="number" placeholder="Enter relative height ( m )"></ion-input>
                        <ion-input v-else type="number" :value=zShow readonly></ion-input>
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

import Header from '../../components/header.vue'

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
            hgl: "",
            p: "",
            rho: "",
            z: ""
        }
    },
    computed: {
        hglShow() {
            if (this.p != "" && this.rho != "" && this.z != "") {
                return parseFloat(this.p/(this.rho*9.81)+parseFloat(this.z)).toFixed(this.$store.state.decimal)
            } else {
                return "" 
            }
        },
        pShow() {
            if (this.hgl != "" && this.rho != "" && this.z != "") {
                return parseFloat((this.hgl-this.z)*this.rho*9.81).toFixed(this.$store.state.decimal)
            } else {
                return "" 
            }
        },
        rhoShow() {
            if (this.p != "" && this.hgl != "" && this.z != "") {
                return parseFloat(this.p/(9.81*(this.hgl-this.z))).toFixed(this.$store.state.decimal)
            } else {
                return "" 
            }
        },
        zShow() {
            if (this.hgl != "" && this.rho != "" && this.p != "") {
                return parseFloat(this.hgl-(this.p/(this.rho*9.81))).toFixed(this.$store.state.decimal)
            } else {
                return "" 
            }
        }
    },
    methods: {
        clear() {
            this.hgl = ""
            this.p = ""
            this.rho = ""
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