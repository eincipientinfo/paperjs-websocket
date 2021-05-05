<template>
  <PaperCanvas />
</template>

<script>
import { mapGetters } from "vuex";
import { SET_VEHICLE } from "@/store/vehicle.module";
import { SET_PITCH } from "@/store/pitch.module";
import { ADD_OBSTACLES } from "@/store/obstacles.module";
import PaperCanvas from "@/view/content/PaperCanvas";
export default {
  name: "Dashboard",
  components: {
    PaperCanvas
  },
  computed: {
    ...mapGetters([
      "vehicleLocation",
      "vehicleShape",
      "pitchCenterPoint",
      "pitchCorner",
      "obstaclesMoving",
      "obstaclesStatic",
      "isWebsocketConnected"
    ])
  },
  methods: {
    addWebsocketListner() {
      this.$options.sockets.onmessage = ({ data }) => {
        let payload = JSON.parse(data);
        switch (payload.response) {
          case "getPitch":
            // save getPitch request
            this.$store.commit(SET_PITCH, payload.data.pitch);
            break;
          case "getObstacles":
            // save getObstacles request
            this.$store.commit(ADD_OBSTACLES, payload.obstacles);
            break;
          case "getVehicle":
            // save getVehicle request
            this.$store.commit(SET_VEHICLE, payload.data);
            break;

          default:
            break;
        }
      };
    }
  },
  mounted() {
    this.addWebsocketListner();
    if (this.isWebsocketConnected) {
      this.$socket.sendObj({
        request: "getPitch"
      });
      this.$socket.sendObj({
        request: "getObstacles"
      });
      this.$socket.sendObj({
        request: "getVehicle"
      });
    }
  }
};
</script>
