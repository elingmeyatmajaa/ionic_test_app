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
        <ion-item lines="full">
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" v-model="email" required @change="loginPost()"></ion-input>
        </ion-item>
        <ion-item lines="full">
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="password" required @change="loginPost()" ></ion-input>
        </ion-item>
        <ion-button expand="block" @click="() => router.push('/login')">Login</ion-button>
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
  IonInput
} from "@ionic/vue";
import axios from "axios";

import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginItem",
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput
  },

  setup() {
    return {
      router: useRouter(),
    };
  },

  data() {
    return {
      email: '',
      password: '',
      errors: []
    }
  },

  methods: {
    
    async loginPost(){
      try{
        await axios.post('http://localhost:8000/api/auth/login', {
          email: this.email,
          password: this.password
        })
      } catch(e) {
        this.errors.push(e)
      }
    }

  },
 

});
</script>
