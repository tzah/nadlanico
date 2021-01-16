import VueRouter from 'vue-router';
import OpenLayerMap from "../components/Map/OpenLayerMap";
import card from "../components/Pages/cardsPage/cardPage";
import NotFoundPage from "../components/Pages/notFoundPage/NotFoundPage";
import customersPage from "../components/Pages/customersPage/customersPage"
import Vue from 'vue';

const routes = [
    { path: "/myCardsPage", component: card },
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
        component: NotFoundPage
    },
    {
        path: '/customersPage',
        component: customersPage
    },
];

const router = new VueRouter({ routes: routes });

Vue.use(VueRouter);

export default router;
