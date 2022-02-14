<template>
  <ion-page>
    <img width="375" height="300" src="@/assets/image/signup_1.png" />

    <ion-content>
      <ion-item>
        <div>
          <ion-label position="floating">Nama</ion-label>
          <ion-input
            type="nama"
            v-model="nama"
            required
            @change="loginPost()"
          ></ion-input>
        </div>
      </ion-item>

      <ion-item>
        <div>
          <ion-label position="floating">Email</ion-label>
          <ion-input
            type="email"
            v-model="email"
            required
            @change="loginPost()"
          ></ion-input>
        </div>
      </ion-item>
      <ion-item>
        <div>
          <ion-label position="floating">Password</ion-label>
          <ion-input
            type="password"
            v-model="password"
            required
            @change="loginPost()"
          ></ion-input>
        </div>
      </ion-item>

       <ion-item>
        <div>
          <ion-label position="floating">Confirm Password</ion-label>
          <ion-input
            type="password"
            v-model="confirm_password"
            required
            @change="loginPost()"
          ></ion-input>
        </div>
      </ion-item>

      <ion-button expand="block" @click="() => router.push('/login')"
        >Login</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonInput } from "@ionic/vue";
import axios from "axios";

import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginItem",
  components: {
    IonContent,
    IonPage,
    IonInput,
  },

  setup() {
    return {
      router: useRouter(),
    };
  },

  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },

  methods: {
    async loginPost() {
      try {
        await axios.post("http://localhost:8000/api/auth/login", {
          email: this.email,
          password: this.password,
        });
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
});
</script>
