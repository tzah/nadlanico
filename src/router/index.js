import VueRouter from 'vue-router';
// import Notifications from "../components/Pages/Notification";
// import LeafletMap from "../components/Map/LeafletMap";
import OpenLayerMap from "../components/Map/OpenLayerMap";
import card from "../components/Pages/cardsPage/cardPage";
import NotFoundPage from "../components/Pages/notFoundPage/NotFoundPage";
import Map from "../components/Map/Map.vue";
import Vue from 'vue';

const routes = [
    // { path: "/Notifications", component: Map},
    // { path: "/OpenLayers", component: OpenLayerMap},
    { path: "/MyCardsPage", component: card},
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/Map',
        component: OpenLayerMap
    },
    {
        path: '*',
        components: NotFoundPage
    },
];

const router = new VueRouter({routes: routes});

Vue.use(VueRouter);

export default router;
