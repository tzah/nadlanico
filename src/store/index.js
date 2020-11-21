import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        location: {
            longitude: 34.58605,
            latitude: 31.681778599999998,
        }
    },
    getters: {
        getUserLocation(state) {
            return state.location;
        }
    },
    mutations: {
        changeUserLocation(state, location) {
            // eslint-disable-next-line no-console
            console.log("changeUserLocation mutation the location is:");
            // eslint-disable-next-line no-console
            console.log(location);
            state.location = {...location};
        }
    },
    actions: {
        setUserLocation({ commit }, location) {
            // eslint-disable-next-line no-console
            console.log("setUserLocation action");
            commit('changeUserLocation', { location })
        }
    },
    modules: {}
})
