<template>
    <ion-page>
        <Header title="Capillary Rise" :clear="clear"></Header>
        <Exit></Exit>
        <ion-content :fullscreen="true">
            <div id="container">
                <img class="invert" src="/img/cRise.png" style="padding-left: 2%; padding-right: 2%;">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>&sigma;<sub>S</sub> : </ion-label>
                        <ion-input v-model="surfaceT" type="number" placeholder="Enter surface tension ( N/m )" required="true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&rho;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-model="density" type="number" placeholder="Enter Density ( kg/m^3 )" required="true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>R&nbsp;&nbsp;: </ion-label>
                        <ion-input v-model="radius" type="number" placeholder="Enter Radius ( in mm )" required="true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&Phi;&nbsp; : </ion-label>
                        <ion-input v-model="angle" type="number" placeholder="Enter angle ( in degrees )" required="true"></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <strong>Output : </strong>
                        <strong id="output" v-if="isNaN(height) == false">&nbsp;{{ height == "" ? "" : String(parseFloat(height).toFixed(this.$store.state.decimal)) + " m" }}</strong>
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
            surfaceT: "",
            density: "",
            radius: "",
            angle: ""
        }
    },
    computed: {
        height() {
            if (this.surfaceT != "" && this.density != "" && this.radius != "" && this.angle != "")
            {
                return parseFloat(2000 * this.surfaceT * Math.cos(this.angle*Math.PI/180) / (this.density * 9.81 * this.radius))
            } else {
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.surfaceT = ""
            this.density = ""
            this.radius = ""
            this.angle = ""
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