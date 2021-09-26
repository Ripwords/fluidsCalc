<template>
    <ion-page>
        <Header title="Internal Flow" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <div id="container">
                <ion-list>
                    <ion-item>
                        <ion-label>Re : </ion-label>
                        <ion-input v-model="re" type="number" placeholder="Reynold's Number"></ion-input>
                    </ion-item>
                    <ion-item v-if="parseFloat(re) >= 2301">
                        <ion-label>Type of flow : </ion-label>
                        <ion-select v-model="flow" interface="popover">
                            <ion-select-option value="turbC">Turbulent ( Colebrook )</ion-select-option>
                            <ion-select-option value="turbH">Turbulent ( Haaland )</ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-list>
                <br>
                <br>

                <img v-if="re <= 2300" class="invert" src="/img/lamFriction.png" style="padding-left: 2%; padding-right: 2%;">
                <br v-if="re <= 2300">
                <br v-if="re <= 2300">
                <br v-if="re <= 2300">
                <ion-list v-if="re <= 2300">
                    <ion-item>
                        <ion-label>Eqn : </ion-label>
                        <ion-input v-model="eqn" placeholder="Friction Equation ( 64/Re )"></ion-input>
                    </ion-item>
                </ion-list>

                <img v-if="flow == 'turbH' && parseFloat(re) >= 2301" class="invert" src="/img/haaland.png" style="padding-left: 2%; padding-right: 2%;">
                <br v-if="flow == 'turbH' && parseFloat(re) >= 2301">
                <br v-if="flow == 'turbH' && parseFloat(re) >= 2301">
                <br v-if="flow == 'turbH' && parseFloat(re) >= 2301">

                <img v-if="flow == 'turbC' && parseFloat(re) >= 2301" class="invert" src="/img/turbFriction.png" style="padding-left: 2%; padding-right: 2%;">
                <br v-if="flow == 'turbC' && parseFloat(re) >= 2301">
                <br v-if="flow == 'turbC' && parseFloat(re) >= 2301">
                <br v-if="flow == 'turbC' && parseFloat(re) >= 2301">
                <ion-list v-if="(flow == 'turbC' || flow == 'turbH') && parseFloat(re) >= 2301">
                    <ion-item>
                        <ion-label>&epsilon; : </ion-label>
                        <ion-input v-model="e" placeholder="Roughness ( mm )"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>D : </ion-label>
                        <ion-input v-model="d" placeholder="Diameter ( m )"></ion-input>
                    </ion-item>
                </ion-list>
                <ion-item>
                        <ion-label>f&nbsp;&nbsp;: </ion-label>
                        <ion-input v-if="fShow" :value=fShow readonly></ion-input>
                        <ion-input v-if="fTurbShow" :value=fTurbShow readonly></ion-input>
                        <ion-input v-if="fTurbShowH" :value=fTurbShowH readonly></ion-input>
                </ion-item>
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
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonList
} from '@ionic/vue'

import {
    defineComponent
} from 'vue'

import Header from '../../components/header.vue'
import HomeButton from '../../components/homeBut.vue'
import nerdamer from 'nerdamer/all.min'

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonButton,
        IonInput,
        IonItem,
        IonLabel,
        Header,
        IonSelect,
        IonSelectOption,
        IonList,
        HomeButton
    },
    data() {
        return {
            re : "",
            eqn: "",
            e: "",
            d: "",
            flow: "turbC"
        }
    },
    computed: {
        fShow() {
            if (this.re != "" && this.eqn != "") {
                let re = this.re
                try {
                    return parseFloat(eval(this.eqn.toLowerCase())).toFixed(this.$store.state.decimal)
                } catch (err) {
                    console.log(re)
                    return ""
                }
            } else {
                return ""
            }
        },
        fTurbShow() {
            if (this.re != "" && this.e != "" && this.d != "" && this.flow == "turbC") {
                let temp = ""
                temp += "10 ^ (-x/2) = ("
                temp += String(this.e/1000)
                temp += "/"
                temp += String(this.d)
                temp += ") / 3.7 + 2.51 * x /"
                temp += String(this.re)
                try {
                    temp = nerdamer.solveEquations(String(temp), 'x').toString()
                    temp = ((1/parseFloat(eval(temp)))**2).toFixed(this.$store.state.decimal)
                } catch(err) {
                    return ""
                }
                return parseFloat(temp).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        fTurbShowH() {
            if (this.re != "" && this.e != "" && this.d != "" && this.flow == "turbH") {
                return parseFloat((1/(-1.8*Math.log10((6.9/this.re)+(((this.e/1000)/this.d)/3.7)**1.11)))**2).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.re = ""
            this.eqn = ""
            this.e = ""
            this.d = ""
        }
    },
    watch: {
        flow: function() {
            if (this.flow == "turbC" || this.flow == "turbH") {
                this.e = ""
                this.d = ""
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