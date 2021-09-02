<template>
    <ion-menu menu-id="app-menu" side="start" content-id="main">
        <ion-header>
            <ion-toolbar>
                <ion-title>Fluids Calculator</ion-title>
            </ion-toolbar>
            <ion-toolbar>
                <ion-searchbar @ionInput="search($event)"></ion-searchbar>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item button @click="menuNavigation('/home')">
                    <ion-label>
                        Home
                    </ion-label>
                </ion-item>
                <div v-for="num in order" :key="items[num].title">
                    <ion-item v-if="items[num].show" button @click="menuNavigation(items[num].path)">
                        <ion-label>
                            {{ items[num].title }}
                        </ion-label>
                    </ion-item>
                </div>
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
    IonSearchbar,
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
        IonInput,
        IonSearchbar
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
            order: this.$store.state.order,
            items: [...this.$store.state.pages],
        }
    },
    mounted() {
        this.decimal = this.$store.state.decimal
        this.items.forEach(item => {
            item.show = true
        })
    },  
    methods:{
        menuNavigation(url){
            menuController.close("app-menu")
            this.$router.push(url);
        },
        search(event) {
            const query = event.target.value.toLowerCase()
            requestAnimationFrame(() => {
                this.items.forEach(item => {
                    const shouldShow = item.title.toLowerCase().indexOf(query) > -1
                    item.show = shouldShow ? true : false
                })
            })
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