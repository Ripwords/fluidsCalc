<template>
    <ion-page>
        <Header title="Momentum Analysis" :clear="clear"></Header>
        <Exit></Exit>
        <ion-content :fullscreen="true">
            <div id="container">
                <img class="invert" src="/img/momentum.png" style="padding-left: 2%; padding-right: 2%;">
                <br>
                <br>
                <ion-item>
                    <ion-label>No. inlets&nbsp;&nbsp; : </ion-label>
                    <ion-input type="number" v-model="noIn" placeholder="no. of Inlets" min="1"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label>No. outlets : </ion-label>
                    <ion-input type="number" v-model="noOut" placeholder="no. of Outlets" min="1"></ion-input>
                </ion-item>
                <br>
                <ion-item>
                    <ion-label>&beta;&nbsp; : </ion-label>
                    <ion-input v-if="!betaShow" type="number" v-model="beta" placeholder="Enter Correction Factor"></ion-input>
                    <ion-input v-else type="number" :value=betaShow readonly></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label>&#7745; : </ion-label>
                    <ion-input v-if="!mFRShow" type="number" v-model="mFR" placeholder="Enter Mass Flow Rate"></ion-input>
                    <ion-input v-else type="number" :value=mFRShow readonly></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label>F &nbsp;: </ion-label>
                    <ion-input v-if="!fShow" v-model="f" type="number" placeholder="Total Force ( N )"></ion-input>
                    <ion-input v-else type="number" :value=fShow readonly></ion-input>
                </ion-item>
                <br>
                <div v-if="noOut > 0 && noIn > 0">
                    <ion-item v-for="(e, ind) in (parseInt(noIn) > parseInt(noOut) ? parseInt(noIn) : parseInt(noOut))" :key="ind">
                        <ion-label v-if="(parseInt(noOut))-e >= 0">V<sub>out {{ e }}</sub> : </ion-label>
                        <ion-input v-if="(parseInt(noOut))-e >= 0" v-model="sumOut[ind]" type="number"></ion-input>

                        <ion-label v-if="(parseInt(noIn))-e >= 0">V<sub>in {{ e }}</sub> : </ion-label>
                        <ion-input v-if="(parseInt(noIn))-e >= 0" v-model="sumIn[ind]" type="number"></ion-input>
                    </ion-item>
                </div>
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
        IonItem,
        IonLabel,
        Help,
        Header,
        Exit
    },
    data() {
        return {
            noIn: 1,
            noOut: 1,
            beta: "",
            mFR: "",
            f: "",
            sumOut: [],
            sumIn: []
        }
    },
    computed: {
        fShow() {
            if (this.beta != "" && this.mFR != "" && this.sumOut.length != 0 && this.sumIn.length != 0) {
                return parseFloat(this.beta*this.mFR*(this.sumOut.reduce(function(a,b) { return parseFloat(a)+parseFloat(b) }) - this.sumIn.reduce(function(a,b) { return parseFloat(a)+parseFloat(b) }))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        betaShow() {
            if (this.f != "" && this.mFR != "" && this.sumOut.length != 0 && this.sumIn.length != 0) {
                return parseFloat(this.f/(this.mFR*(this.sumOut.reduce(function(a,b) { return parseFloat(a)+parseFloat(b) }) - this.sumIn.reduce(function(a,b) { return parseFloat(a)+parseFloat(b) })))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        },
        mFRShow() {
            if (this.f != "" && this.beta != "" && this.sumOut.length != 0 && this.sumIn.length != 0) {
                return parseFloat(this.f/(this.beta*(this.sumOut.reduce(function(a,b) { return parseFloat(a)+parseFloat(b) }) - this.sumIn.reduce(function(a,b) { return parseFloat(a)+parseFloat(b) })))).toFixed(this.$store.state.decimal)
            } else {
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.noIn = 1,
            this.noOut = 1,
            this.beta = ""
            this.mFR = ""
            this.f = ""
            this.sumOut = []
            this.sumIn = []
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