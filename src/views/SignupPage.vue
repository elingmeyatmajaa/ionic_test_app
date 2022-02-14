<template>
    <img width="375" height="350"  src="@/assets/image/signup_1.png">

    <ion-grid>
      <ion-row >
        <ion-col >
          <div>
            <ion-button expand="block" color="light">
              <ion-text >
                Sign In
              </ion-text>
            </ion-button>
          </div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <div>
            <ion-button expand="block" fill="outline" color="light">Register</ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
    
</template>

<script>
import { IonGrid, IonRow, IonCol, IonText } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignupPage",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonText
    
  },
});
</script>
