<template>
    <ion-page>
        <Header title="Internal Flow" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <div id="container">
                <img class="invert" src="/img/reynolds.png" style="padding-left: 2%; padding-right: 2%;">
                <br>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>v/&mu;&nbsp;&nbsp; : </ion-label>
                        <ion-select v-model="selection" interface="popover">
                            <ion-select-option value="u">&mu;</ion-select-option>
                            <ion-select-option value="v">v</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label>V<sub>avg</sub> : </ion-label>
                        <ion-input v-model="vave" type="number" placeholder="Enter Average Velocity ( m/s )"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>&nbsp;D&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-model="d" type="number" placeholder="Enter Hydraulic Diameter ( m )"></ion-input>
                    </ion-item>
                    <ion-item v-if="selection == 'u'">
                        <ion-label>&nbsp;&rho;&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-model="rho" type="number" placeholder="Enter Fluid Density ( kg/m^3 )"></ion-input>
                    </ion-item>
                    <ion-item v-if="selection == 'u'">
                        <ion-label>&nbsp;&mu;&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-model="u" type="number" placeholder="Enter Dynamic Viscosity ( kg/ms )"></ion-input>
                    </ion-item>
                    <ion-item v-if="selection == 'v'">
                        <ion-label>&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp; : </ion-label>
                        <ion-input v-model="v" type="number" placeholder="Enter Kinematic Viscosity ( m^2/s )"></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <ion-item>
                        <ion-label>Re&nbsp;&nbsp; : </ion-label>
                        <ion-input v-if="ReShowU" :value=ReShowU readonly></ion-input>
                        <ion-input v-if="ReShowV" :value=ReShowV readonly></ion-input>
                </ion-item>
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
    IonLabel,
    IonSelect,
    IonSelectOption
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
        Header,
        IonSelect,
        IonSelectOption
    },
    data() {
        return {
            selection: "u",
            v: "",
            u: "",
            re: "",
            vave: "",
            d: "",
            rho: ""
        }
    },
    computed: {
        ReShowU() {
            if (this.vave != "" && this.d != "" && this.u != "" && this.rho != "") {
                return parseFloat(this.rho*this.vave*this.d/this.u).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        ReShowV() {
            if (this.vave != "" && this.d != "" && this.v != "") {
                return parseFloat(this.vave*this.d/this.v).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.selection = "u",
            this.v = "",
            this.u = "",
            this.re = "",
            this.vave = "",
            this.d = "",
            this.rho = ""
        }
    },
    watch: {
        selection: function() {
            if (this.selection == "u") {
                this.v = ""
            } else {
                this.u = ""
                this.rho = ""
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