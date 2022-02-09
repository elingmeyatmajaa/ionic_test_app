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
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input></ion-input>
      </ion-item>
       <ion-item>
        <ion-label position="floating" type="password" id="password">Password</ion-label>
        <ion-input></ion-input>
      </ion-item>
        <ion-button shape="round" @click="() => router.push('/dashboard')">Login</ion-button>
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
import { useRouter } from 'vue-router';


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
  setup(){
    return{
      router:useRouter()
    }
  }
});
</script>
