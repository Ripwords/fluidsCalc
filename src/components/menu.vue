<template>
    <ion-menu menu-id="app-menu" side="start" content-id="main">
        <ion-header>
            <ion-toolbar>
                <ion-title>Fluids Calculator</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item v-for="item in items" :key="item.title" button @click="menuNavigation(item.path)">
                    <ion-label>
                        {{ item.title }}
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
        <ion-item>
            <ion-label class="menu" position="floating">Decimal Place</ion-label>
            <ion-input class="menu" type="number" v-model="decimal" :value="dec" min="0" max="6"></ion-input>            
        </ion-item>
        <ion-item>
            <ion-label class="menu">{{ version }}</ion-label>
        </ion-item>
    </ion-menu>
</template>

<script>
import {
    IonMenu,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
    IonInput,
    menuController
} from "@ionic/vue";
export default {
    components: {
        IonMenu,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle,
        IonItem,
        IonList,
        IonLabel,
        IonInput
    },
    beforeCreate() {
        window.ipcRenderer.send("app_version")
        window.ipcRenderer.receive("app_version", (args) => {
            console.log(args.version)
            this.version = "v " + args.version
        })
    },
    data() {
        return {
            version: "",
            decimal: "",
            items: [
                {
                    title: "Home",
                    path: "/home"
                },
                {
                    title: this.$store.state.titles[0],
                    path: this.$store.state.paths[0]
                },
                {
                    title: this.$store.state.titles[1],
                    path: this.$store.state.paths[1]
                },
                {
                    title: this.$store.state.titles[2],
                    path: this.$store.state.paths[2]
                },
                {
                    title:  this.$store.state.titles[3],
                    path: this.$store.state.paths[3]
                },
                {
                    title: this.$store.state.titles[4],
                    path: this.$store.state.paths[4]
                },
                {
                    title: this.$store.state.titles[5],
                    path: this.$store.state.paths[5]
                }
            ]
        }
    },
    mounted() {
        this.decimal = this.$store.state.decimal
    },  
    methods:{
        menuNavigation(url){
            menuController.close("app-menu")
            this.$router.push(url);
        }
    },
    computed: {
        dec() {
            return this.$store.state.decimal
        }
    },
    watch: {
        decimal: function(val) {
            this.$store.commit("updateDec", parseInt(val))
        }
    }
};
</script>

<style scoped>
.menu {
    margin: 2%;
    color: rgb(124, 124, 124);
}
</style>