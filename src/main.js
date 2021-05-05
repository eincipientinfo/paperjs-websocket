import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApiService from "@/core/services/api.service";
import MockService from "@/core/mock/mock.service";

Vue.config.productionTip = false;

// Vue 3rd party plugins
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/websocket";

// API service init
ApiService.init();

// Remove this to disable mock API
MockService.init();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
