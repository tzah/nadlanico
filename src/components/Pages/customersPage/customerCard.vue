<template>
  <card>
    <template v-slot:header>
      <customer-status class="customer-status" />
      <profile-image />
    </template>
    <template v-slot:content>
    </template>
    <template v-slot:actions>
      <v-btn color="deep-purple lighten-2" text> Actions </v-btn>
    </template>
  </card>
</template>
<script>
import ProfileImage from "../../shell/ProfileImage.vue";
import card from "../cardsPage/card.vue";
import CustomerStatus from "./customerStatus.vue";
export default {
  components: { card, ProfileImage, CustomerStatus },
  name: "customerCard",
};
</script>

<style scoped>
.customer-status {
  position: absolute;
  top: 3vh;
  left: -1vh;
}
</style>
