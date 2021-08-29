<template>
    <ion-page>
        <Header title="Interpolator" :clear="clear"></Header>
        <ion-content :fullscreen="true">
            <Exit></Exit>
            <div id="container">
                <img src="/img/equation.png" width=300 height=75>
                <br>
                <ion-list>
                    <ion-item>
                        <ion-label>x<sub>1</sub> : </ion-label>
                        <ion-input id="x1input" v-model="x1" type="number" placeholder="Enter x1" required="true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>x<sub>2</sub> : </ion-label>
                        <ion-input id="x2input" v-model="x2" type="number" placeholder="Enter x2" required="true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>y<sub>1</sub> : </ion-label>
                        <ion-input id="y1input" v-model="y1" type="number" placeholder="Enter y1" required="true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>y<sub>2</sub> : </ion-label>
                        <ion-input id="y2input" v-model="y2" type="number" placeholder="Enter y2" required="true"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>x<sub>0</sub> : </ion-label>
                        <ion-input id="x0input" v-model="x0" type="number" placeholder="Enter x0" required="true"></ion-input>
                    </ion-item>
                </ion-list>
                <br>
                <br>
                <ion-list>
                <ion-item>
                    <strong>Output : </strong>
                    <strong id="output" v-if="isNaN(interpolate) == false">&nbsp;{{ interpolate == "" ? "" : parseFloat(interpolate).toFixed(5) }}</strong>
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
            x1: "",
            x2: "",
            y1: "",
            y2: "",
            x0: ""
        }
    },
    computed: {
        interpolate() {
            if (this.x1 != "" && this.x2 != "" && this.y1 != "" && this.y2 != "" && this.x0 != "") {
                return parseFloat(this.y1) + (this.x0 - this.x1)*((this.y2 - this.y1)/(this.x2 - this.x1))
            } else {
                return ""
            }
        }
    },
    methods: {
        clear() {
            this.x1 = ""
            this.x2 = ""
            this.y1 = ""
            this.y2 = ""
            this.x0 = ""
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