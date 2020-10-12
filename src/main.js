import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import VueLayers from 'vuelayers';
import 'vuelayers/lib/style.css';

Vue.config.productionTip = false;
Vue.use(VueLayers,{dataProjection: 'EPSG:4326'});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
