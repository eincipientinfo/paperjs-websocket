import Vue from "vue";
import { vehicle, pitch, obstacles } from "./data";
var MockAdapter = require("axios-mock-adapter");

const MockService = {
  init() {
    // this sets the mock adapter on the default instance
    var mock = new MockAdapter(Vue.axios);

    // mock getVehicle request
    mock.onPost("getVehicle").reply(() => {
      return [200, vehicle];
    });

    // mock getPitch request
    mock.onPost("getPitch").reply(() => {
      return [200, pitch];
    });

    // mock getObstacles request
    mock.onPost("getObstacles").reply(() => {
      return [200, obstacles];
    });
  }
};

export default MockService;
