<template>
  <v-row class="row-container">
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <customer-card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
  </v-row>
</template>
<script>
import customerCard from "../customersPage/customerCard.vue";
import card from "./card.vue";
export default {
  name: "CardPage",
  components: {
    card,
    customerCard,
  },
  props: {},
};
</script>

<style scoped>
.row-container {
  margin-right: 1.8vw;
}
</style>
