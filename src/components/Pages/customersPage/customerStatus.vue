<template>
  <div>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <div
          class="status-bar"
          :style="{ backgroundColor: statusData.color }"
          v-on="on"
        />
      </template>
      <span>{{ statusData.description }}</span>
    </v-tooltip>
  </div>
</template>
<script>
import ProfileImage from "../../shell/ProfileImage.vue";
import card from "../cardsPage/card.vue";
import statuses from "../../Utils/customers/status.js";
export default {
  name: "customerStatus",
  props: {
    status: {
      type: String,
      default: "Active",
    },
  },
  computed: {
    statusData() {
      return statuses[this.status];
    },
  },
};
</script>

<style scoped lang="scss">
.status-bar {
  width: 3vw;
  height: 1vh;
  border: solid 0px black;
  border-radius: 20px;
  transform: rotate(90deg);
}
.status {
  width: 10px;
  height: 10px;
  border: solid 1px black;
}
</style>
