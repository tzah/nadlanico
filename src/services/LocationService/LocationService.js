import Swal from 'sweetalert2';
// import {mapActions} from "vuex";
import store from '../../store/index.js';


const userLocation = window.navigator.geolocation;

const locationPermissions = {
    PERMISSION_DENIED: 1
};

function ShowMessage(message) {
    if (message.code === locationPermissions.PERMISSION_DENIED) {
        Swal.fire("Please enable your location");
    }
}

function getCoords(geoPos) {
    console.log("getCoords");
    store.dispatch('setUserLocation', {
        longitude: geoPos.coords.longitude,
        latitude: geoPos.coords.latitude
    }).then(console.log("hey"));
}

function getTheUserLocation() {
    console.log("getTheUserLocation");
    userLocation.getCurrentPosition(getCoords, ShowMessage);
}

export default getTheUserLocation;
