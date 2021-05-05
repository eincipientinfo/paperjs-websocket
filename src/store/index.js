import Vue from "vue";
import Vuex from "vuex";
import vehicle from "./vehicle.module";
import pitch from "./pitch.module";
import obstacles from "./obstacles.module";
import paper from "./paper.module";
import websocket from "./websocket.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    vehicle,
    pitch,
    obstacles,
    paper,
    websocket
  }
});
