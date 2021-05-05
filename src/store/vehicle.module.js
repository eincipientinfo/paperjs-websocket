import GeoLocation from "./model/geoLocation";

// action types
export const GET_VEHICLE = "getVehicle";

// mutation types
export const SET_VEHICLE = "setVehicle";

const state = {
  location: null,
  shape: null
};

const getters = {
  vehicleLocation(state) {
    return state.location;
  },
  vehicleShape(state) {
    return state.shape;
  }
};

const actions = {};

const mutations = {
  [SET_VEHICLE](state, payload) {
    let location = new GeoLocation(payload.location);
    state.shape = payload.shape;
    state.location = location;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
