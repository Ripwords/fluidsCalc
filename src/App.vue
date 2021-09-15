<template>
  <ion-app>
    <Menu></Menu>
    <ion-router-outlet animated=false id="main"/>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from './components/menu.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu
  }
});
</script>
