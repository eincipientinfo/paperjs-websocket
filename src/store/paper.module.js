// action types
export const ZOOM_IN = "paperZoomIN";
export const ZOOM_OUT = "paperZoomOut";
export const ZOOM_RESET = "paperZoomReset";
export const GRID_TOGGLE = "paperGridToggle";

// mutation types
export const SET_ZOOM = "setPaperZoom";
export const SET_GRID = "setPaperGrid";

const state = {
  zoom: 1.0,
  zoomScale: 0.1,
  grid: true
};

const getters = {
  paperZoom(state) {
    return state.zoom;
  },
  paperGrid(state) {
    return state.grid;
  }
};

const actions = {
  [ZOOM_IN]({ commit, state }) {
    commit(SET_ZOOM, state.zoom + state.zoomScale);
  },
  [ZOOM_OUT]({ commit, state }) {
    commit(SET_ZOOM, state.zoom - state.zoomScale);
  },
  [ZOOM_RESET]({ commit }) {
    commit(SET_ZOOM, 1.0);
  },
  [GRID_TOGGLE]({ commit, state }) {
    commit(SET_GRID, !state.grid);
  }
};

const mutations = {
  [SET_ZOOM](state, zoom) {
    state.zoom = zoom;
  },
  [SET_GRID](state, grid) {
    state.grid = grid;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
