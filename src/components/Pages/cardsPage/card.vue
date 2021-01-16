<template>
  <v-card :width="`${width}vw`" :height="`${height}vh`" class="card">
    <div class="header">
      <slot name="header" />
    </div>
    <div>
      <slot name="content" />
    </div>
    <v-card-actions class="actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "card",
  props: {
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
  transition: 500ms border ease-in-out;
}
.card:hover {
  border: 1px solid #295a84;
  cursor: pointer;
}
.header {
  width: fit-content;
  margin: auto;
  margin-top: 1vh;
}
.actions {
  position: absolute;
  bottom: 0px;
}
</style>
