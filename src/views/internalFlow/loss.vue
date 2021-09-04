<template>
    <ion-page>
        <Header title="Internal Flow" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <Exit></Exit>
            <div id="container">
                <img class="invert" src="/img/headLoss.png" style="padding-left: 2%; padding-right: 2%;">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>h<sub>L</sub>/P<sub>L</sub> : </ion-label>
                        <ion-select v-model="selection" interface="popover">
                            <ion-select-option value="h">Head Loss</ion-select-option>
                            <ion-select-option value="p">Pressure Loss</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label>V<sub>avg</sub> : </ion-label>
                        <ion-input v-model="vave" type="number" placeholder="Enter Average Velocity ( m/s )"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&nbsp;f&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-model="f" type="number" placeholder="Enter Friction Factor"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&nbsp;L&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-model="l" type="number" placeholder="Enter Length ( m )"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&nbsp;D&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-model="d" type="number" placeholder="Enter Hydraulic Diameter ( m )"></ion-input>
                    </ion-item>
                    <ion-item v-if="selection == 'p'">
                        <ion-label>&nbsp;&rho;&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-model="rho" type="number" placeholder="Enter Fluid Density ( kg/m^3 )"></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <ion-item>
                        <ion-label v-if="selection == 'h'">h<sub>L</sub>&nbsp;&nbsp; : </ion-label>
                        <ion-label v-if="selection == 'p'">P<sub>L</sub>&nbsp;&nbsp; : </ion-label>
                        <ion-input v-if="hShow" :value=hShow readonly></ion-input>
                        <ion-input v-if="pShow" :value=pShow readonly></ion-input>
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
            selection: "h",
            vave: "",
            d: "",
            rho: "",
            l: "",
            f: ""
        }
    },
    computed: {
        hShow() {
            if (this.vave != "" && this.d != "" && this.l != "" && this.f != "" && this.selection == "h") {
                return parseFloat(this.f*this.l*this.vave**2/(this.d*2*9.81)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        pShow() {
            if (this.vave != "" && this.d != "" && this.l != "" && this.f != "" && this.rho != "" && this.selection == "p") {
                return String(parseFloat(0.001*this.f*this.l*this.vave**2*this.rho/(this.d*2)).toFixed(this.$store.state.decimal))+" kPa"
            } else {
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.selection = "h",
            this.vave = "",
            this.d = "",
            this.rho = "",
            this.l = "",
            this.f = ""
        }
    },
    watch: {
        selection: function() {
            if (this.selection == "h") {
                this.vave = "",
                this.d = "",
                this.l = "",
                this.f = ""
            } else {
                this.vave = "",
                this.d = "",
                this.rho = "",
                this.l = "",
                this.f = ""
            }
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