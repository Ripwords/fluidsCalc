<template>
    <ion-page>
        <Header title="Internal Flow" :clear="clear"></Header>
        <Exit></Exit>
        <ion-content :fullscreen="true">
            <div id="container">
                <br>
                <br>
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
                        <ion-input v-if="!v1Show && !v2Show" v-model="vave" type="number" placeholder="Enter Average Velocity ( m/s )"></ion-input>
                        <ion-input v-if="v1Show" :value="v1Show" readonly></ion-input>
                        <ion-input v-if="v2Show" :value="v2Show" readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&nbsp;f&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-if="!f1Show && !f2Show" v-model="f" type="number" placeholder="Enter Friction Factor"></ion-input>
                        <ion-input v-if="f1Show" :value="f1Show" readonly></ion-input>
                        <ion-input v-if="f2Show" :value="f2Show" readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&nbsp;L&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-if="!l1Show && !l2Show" v-model="l" type="number" placeholder="Enter Length ( m )"></ion-input>
                        <ion-input v-if="l1Show" :value="l1Show" readonly></ion-input>
                        <ion-input v-if="l2Show" :value="l2Show" readonly></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&nbsp;D&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-if="!d1Show && !d2Show" v-model="d" type="number" placeholder="Enter Hydraulic Diameter ( m )"></ion-input>
                        <ion-input v-if="d1Show" :value="d1Show" readonly></ion-input>
                        <ion-input v-if="d2Show" :value="d2Show" readonly></ion-input>
                    </ion-item>
                    <ion-item v-if="selection == 'p'">
                        <ion-label>&nbsp;&rho;&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-if="!rhoShow" v-model="rho" type="number" placeholder="Enter Fluid Density ( kg/m^3 )"></ion-input>
                        <ion-input v-if="rhoShow" :value="rhoShow" readonly></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <ion-item>
                        <ion-label v-if="selection == 'h'">h<sub>L</sub>&nbsp;&nbsp; : </ion-label>
                        <ion-label v-if="selection == 'p'">P<sub>L</sub>&nbsp;&nbsp; : </ion-label>

                        <ion-input v-model="hl" v-if="selection == 'h' && !hShow" type="number" placeholder="Enter Head Loss ( m )"></ion-input>
                        <ion-input v-model="pl" v-if="selection == 'p' && !pShow" type="number" placeholder="Enter Pressure Drop ( kPa )"></ion-input>

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
            f: "",
            hl: "",
            pl: ""
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
                return parseFloat(0.001*this.f*this.l*this.vave**2*this.rho/(this.d*2)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        v1Show() {
            if (this.hl != "" && this.d != "" && this.l != "" && this.f != "" && this.selection == "h") {
                return parseFloat(Math.sqrt(this.hl*this.d*2*9.81/(this.l*this.f))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        v2Show() {
            if (this.pl != "" && this.d != "" && this.l != "" && this.f != "" && this.rho != "" && this.selection == "p") {
                return parseFloat(Math.sqrt(2000*this.pl*this.d/(this.rho*this.f*this.l))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        f1Show() {
            if (this.hl != "" && this.d != "" && this.l != "" && this.vave != "" && this.selection == "h") {
                return parseFloat((2*this.hl*this.d*9.81)/(this.l*this.vave**2)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        f2Show() {
            if (this.pl != "" && this.d != "" && this.l != "" && this.vave != "" && this.rho != "" && this.selection == "p") {
                return parseFloat((2000*this.d*this.pl/this.rho)/(this.l*this.vave**2)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        l1Show() {
            if (this.hl != "" && this.d != "" && this.f != "" && this.vave != "" && this.selection == "h") {
                return parseFloat(this.hl*this.d*2*9.81/(this.f*this.vave**2)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        l2Show() {
            if (this.pl != "" && this.d != "" && this.f != "" && this.vave != "" && this.rho != "" && this.selection == "p") {
                return parseFloat((2000*this.pl*this.d/this.rho)/(this.f*this.vave**2)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        d1Show() {
            if (this.hl != "" && this.l != "" && this.f != "" && this.vave != "" && this.selection == "h") {
                return parseFloat(this.f*this.l*this.vave**2/(this.hl*2*9.81)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        d2Show() {
            if (this.pl != "" && this.l != "" && this.f != "" && this.vave != "" && this.rho != "" && this.selection == "p") {
                return parseFloat(this.f*this.l*this.rho*this.vave**2/(this.pl*2000)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        rhoShow() {
            if (this.pl != "" && this.l != "" && this.f != "" && this.vave != "" && this.d != "" && this.selection == "p") {
                return parseFloat(2000*this.pl*this.d/(this.f*this.l*this.vave**2)).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.vave = "",
            this.d = "",
            this.rho = "",
            this.l = "",
            this.f = "",
            this.pl = "",
            this.hl = ""
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