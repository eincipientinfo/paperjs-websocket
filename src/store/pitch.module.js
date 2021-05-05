import geoLocation from "./model/geoLocation";

// action types
export const GET_PITCH = "getPitch";

// mutation types
export const SET_PITCH = "setPitch";

const state = {
  centerPoint: null,
  corner: null
};

const getters = {
  pitchCenterPoint(state) {
    return state.centerPoint;
  },
  pitchCorner(state) {
    return state.corner;
  }
};

const actions = {};

const mutations = {
  [SET_PITCH](state, payload) {
    let centerPoint = new geoLocation(payload.centerPoint);
    state.centerPoint = centerPoint;
    state.corner = payload.corner;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
