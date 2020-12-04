<template>
  <v-card :width="`${width}vw`" :height="`${height}vh`" class="card">
    <v-img :src="card_image" />
    <v-card-actions>
      <v-card-title primary-title>
        <v-row>
          <h3 class="headline mb-0"></h3>
          <div>{{ card_text }}</div>
        </v-row>
      </v-card-title>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "card",
  props: {
    card_image: {
      type: String,
      default: "none", //todo: adding default picture
    },
    title: {
      type: String,
      default: "the card title",
    },
    card_text: {
      type: String,
      default: "the card text",
    },
    width: {
      type: Number,
      default: 15,
    },
    height: {
      type: Number,
      default: 35,
    },
  },
};
</script>

<style scoped>
.card {
  margin: 7px;
}
</style>
