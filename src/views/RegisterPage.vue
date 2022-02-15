<template>
  <ion-page>
    <img width="375" height="300" src="@/assets/image/signup_1.png" />

    <ion-content>
      <ion-item>
        <div>
          <ion-label position="floating">Name</ion-label>
          <ion-input
            type="text"
            v-model="name"
            required
            @change="registerPost()"
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
            @change="registerPost()"
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
            @change="registerPost()"
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
            @change="registerPost()"
          ></ion-input>
        </div>
      </ion-item>

      <ion-button expand="block" @click="() => router.push('/register')"
        >Register</ion-button
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
  name: "RegisterPage",
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
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      errors: [],
    };
  },

  methods: {
    async registerPost() {
      try {
        await axios.post("http://localhost:8000/api/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,
        });
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
});
</script>
