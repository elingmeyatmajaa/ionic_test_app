<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      
                {{ tags }}  
      
    </ion-content>
  </ion-page>
</template>

<script>

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

import axios from 'axios';

export default defineComponent({
  name: "DashboardPage",
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
      return {
          tags: []
      }
  },
 mounted () {
    axios
      .get('http://localhost:8000/api/tags')
      .then(response => (this.tags = response))
  }
});


</script>
