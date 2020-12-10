<template>
  <v-row class="row-container">
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
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
  </v-row>
</template>
<script>
import card from "./card.vue";
export default {
  name: "cardPage",
  components: {
    card,
  },
  props: {},
};
</script>

<style scoped>
.row-container {
  margin-right: 1.8vw;
}
</style>
