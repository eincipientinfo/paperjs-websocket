<template>
  <v-app>
    <ToolBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from "./ToolBar";
export default {
  name: "Layout",
  components: {
    ToolBar
  }
};
</script>
