// mutation types
export const SOCKET_ONOPEN = "✅ Socket connected!";
export const SOCKET_ONCLOSE = "❌ Socket disconnected!";
export const SOCKET_ONERROR = "❌ Socket Error!!!";
export const SOCKET_ONMESSAGE = "Websocket message received";
export const SOCKET_RECONNECT = "Websocket reconnected";
export const SOCKET_RECONNECT_ERROR =
  "Websocket is having issues reconnecting..";

const state = {
  socket: {
    isConnected: false,
    message: "",
    reconnectError: false
  }
};

const getters = {
  isWebsocketConnected(state) {
    return state.socket.isConnected;
  }
};

const actions = {};

const mutations = {
  [SOCKET_ONOPEN](state) {
    state.socket.isConnected = true;
  },
  [SOCKET_ONCLOSE](state) {
    state.socket.isConnected = false;
  },
  [SOCKET_ONERROR](state, event) {
    console.error(state, event);
  },
  // default handler called for all methods
  [SOCKET_ONMESSAGE](state, message) {
    state.socket.message = message;
  },
  // mutations for reconnect methods
  [SOCKET_RECONNECT](state, count) {
    console.info(state, count);
  },
  [SOCKET_RECONNECT_ERROR](state) {
    state.socket.reconnectError = true;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
