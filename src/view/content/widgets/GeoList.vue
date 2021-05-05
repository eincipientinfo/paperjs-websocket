<template>
  <v-card class="ma-3" tile>
    <v-list dense>
      <v-subheader>{{ title }}</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-list-item-title>
              {{ item }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "GeoList",
  props: {
    items: {
      type: [Array, Object],
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  mounted() {}
};
</script>
