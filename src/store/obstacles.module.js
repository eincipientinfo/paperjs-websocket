import geoLocation from "./model/geoLocation";

// action types
export const GET_OBSTACLES = "getObstacles";

// mutation types
export const ADD_OBSTACLES = "setObstacles";

const state = {
  moving: [],
  static: []
};

const getters = {
  obstaclesMoving(state) {
    return state.moving;
  },
  obstaclesStatic(state) {
    return state.static;
  }
};

const actions = {};

const mutations = {
  [ADD_OBSTACLES](state, data) {
    let movingObstacles = data.moving;
    let staticObstacles = data.static;
    let movingObstaclesArray = [];
    let staticObstaclesArray = [];
    movingObstacles.forEach(movingObstacle => {
      movingObstacle.location = new geoLocation(movingObstacle.location);
      movingObstaclesArray.push(movingObstacle);
    });

    staticObstacles.forEach(staticObstacle => {
      staticObstacle.location = new geoLocation(staticObstacle.location);
      staticObstaclesArray.push(staticObstacle);
    });

    state.static = staticObstaclesArray;
    state.moving = movingObstaclesArray;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
