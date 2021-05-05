import Vue from "vue";
import VueNativeSock from "vue-native-websocket";
import store from "@/store";
import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from "../../store/websocket.module";

const mutations = {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
};

Vue.use(VueNativeSock, "ws://127.0.0.1:7000/", {
  format: "json",
  store: store,
  mutations: mutations,
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 1, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000 // (Number) how long to initially wait before attempting a new (1000)
});
