<template>
  <v-app-bar app absolute dark id="toolbar">
    <v-toolbar-title>Viewer</v-toolbar-title>
    <v-spacer />
    <v-alert
      :type="isWebsocketConnected ? 'success' : 'error'"
      dense
      class="mt-4 mr-4"
    >
      Websocket</v-alert
    >
    <v-btn-toggle rounded>
      <v-btn icon @click="zoomOut">
        <v-icon> mdi-magnify-minus</v-icon>
      </v-btn>
      <v-btn icon @click="zoomReset">
        <v-icon>mdi-magnify-remove-outline</v-icon>
      </v-btn>
      <v-btn icon @click="zoomIn">
        <v-icon>mdi-magnify-plus</v-icon>
      </v-btn>
    </v-btn-toggle>
    <v-btn icon @click="gridToggle">
      <v-icon v-if="paperGrid === false">
        mdi-grid
      </v-icon>
      <v-icon v-if="paperGrid">
        mdi-grid-off
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import {
  ZOOM_IN,
  ZOOM_OUT,
  ZOOM_RESET,
  GRID_TOGGLE
} from "@/store/paper.module";
export default {
  name: "ToolBar",
  methods: {
    zoomIn() {
      this.$store.dispatch(ZOOM_IN);
    },
    zoomOut() {
      this.$store.dispatch(ZOOM_OUT);
    },
    zoomReset() {
      this.$store.dispatch(ZOOM_RESET);
    },
    gridToggle() {
      this.$store.dispatch(GRID_TOGGLE);
    }
  },
  computed: {
    ...mapGetters(["paperGrid", "isWebsocketConnected"])
  }
};
</script>
