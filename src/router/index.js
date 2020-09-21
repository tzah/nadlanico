import VueRouter from 'vue-router'
import Notifications from "../components/Pages/Notification";
import Vue from 'vue'
const routes = [
    { path: "/Notifications", component: Notifications},
];

const router = new VueRouter({routes:routes});

Vue.use(VueRouter);

export default router;
