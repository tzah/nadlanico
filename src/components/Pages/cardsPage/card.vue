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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  z-index: 1;
}
.card:hover + .card{
   transform: scale(0.8, 0.8);
}
.card:hover {
  transform: scale(1.1, 1.1);
  z-index: 2;
  border: 1px solid #295a84;
}

</style>
