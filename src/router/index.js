import VueRouter from 'vue-router';
import Notifications from "../components/Pages/Notification";
import Map from "../components/Map/Map.vue";
import Vue from 'vue';
const routes = [
    { path: "/Notifications", component: Notifications},
    { path: "/", component: Map},
];

const router = new VueRouter({routes:routes});

Vue.use(VueRouter);

export default router;
