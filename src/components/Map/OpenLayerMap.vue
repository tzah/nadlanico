<template>
  <div>
    <div ref="map" class="map"></div>
    <div class="search">
      <actionBtn icon="home"/>
    </div>
  </div>
</template>

<script>
import View from "ol/View";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import getTheUserLocation from "../../services/LocationService/LocationService";
//import { createNamespacedHelpers } from 'vuex';
//const { mapState, mapActions } = createNamespacedHelpers('');
import { mapGetters } from "vuex";
import actionBtn from "../../components/Pages/cardsPage/actionBar/actionBtn";

export default {
  name: "OpenLayerMap",
  components: {
    actionBtn,
  },
  mounted() {
    getTheUserLocation();
    // eslint-disable-next-line no-console
    const map = new Map({
      target: this.$refs["map"],
      layers: [
        // adding a background tiled layer
        new TileLayer({
          source: new OSM(), // tiles are served by OpenStreetMap
        }),
      ],
      loadTilesWhileAnimating: true,
      loadTilesWhileInteracting: true,
      // the map view will initially show the whole world
      view: new View({
        center: this.currentUserLocation,
        zoom: 20,
        projection: "EPSG:4326",
        minZoom: 6,
        constrainResolution: true,
      }),
    });
  },
  computed: {
    ...mapGetters(["getUserLocation"]),
    currentUserLocation() {
      console.log(this.getUserLocation);
      return [this.getUserLocation.longitude, this.getUserLocation.latitude];
    },
  },
  watch: {
    currentUserLocation(newLocation) {},
  },
};
</script>

<style scoped>
.map {
  height: 100vh;
  width: 100%;
  z-index: 1;
}
.search {
  position: absolute;
  top: 10px;
  z-index: 2;
}
</style>
