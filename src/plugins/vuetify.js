import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import HomeIcon from "../components/Icons/HomeIcon";
import SettingsIcon from "../components/Icons/SettingsIcon";
import GroupIcon from "../components/Icons/GroupIcon";
import MegaPhone from "../components/Icons/MegaPhone";
import MyCardsIcon from "../components/Icons/MyCardsIcon";
import HeartIcon from "../components/Icons/HeartIcon";

const Icons = {
    home: {component: HomeIcon},
    settings:{component: SettingsIcon},
    group:{component:GroupIcon},
    heart:{component:HeartIcon},
    megaPhone:{component:MegaPhone},
    myCards:{component:MyCardsIcon},
};

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: Icons
    },
    rtl: true,
});
