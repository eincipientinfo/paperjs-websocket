<template>
  <canvas
    class="paper_canvas"
    id="paper_canvas"
    ref="paper_canvas"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUpOrOut"
    @mouseout="handleMouseUpOrOut"
  >
  </canvas>
</template>

<script>
import paper from "paper";
import { mapGetters } from "vuex";
import PaperService from "@/core/services/paper.service";

export default {
  name: "PaperCanvas",
  data() {
    return {
      gridLayer: null,
      viewLayer: null,
      offset: {
        x: 0,
        y: 0
      },
      start: {
        x: 0,
        y: 0
      },
      ctx: null,
      isDown: false,
      canvasHeight: 0,
      canvasWidth: 0
    };
  },
  mounted() {
    this.ctx = this.$refs.paper_canvas.getContext("2d");
    PaperService.init();
    this.createLayers();
    this.drawGrid();
    //this.drawCircle();
    this.canvasHeight = paper.view.size.height;
    this.canvasWidth = paper.view.size.width;
    this.offset.x = paper.view.bounds.left;
    this.offset.y = paper.view.bounds.top;
  },
  methods: {
    handleMouseUpOrOut(e) {
      e.preventDefault();
      e.stopPropagation();

      // clear the isDragging flag
      this.isDown = false;
    },
    handleMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();

      // calculate the starting mouse X,Y for the drag
      this.start.x = parseInt(e.clientX - this.offset.x);
      this.start.y = parseInt(e.clientY - this.offset.y);

      // set the isDragging flag
      this.isDown = true;
    },
    handleMouseMove(e) {
      // only do this code if the mouse is being dragged
      if (!this.isDown) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      // get the current mouse position
      let mouseX = parseInt(e.clientX - this.offset.x);
      let mouseY = parseInt(e.clientY - this.offset.y);

      // dx & dy are the distance the mouse has moved since
      // the last mousemove event
      let dx = mouseX - this.start.x;
      let dy = mouseY - this.start.y;

      // reset the start for next mousemove
      this.start.x = mouseX;
      this.start.y = mouseY;

      paper.view.translate(new paper.Point(dx, dy));
    },
    createLayers() {
      this.gridLayer = new paper.Layer();
      this.viewLayer = new paper.Layer();
    },
    drawCircle() {
      this.viewLayer.activate();
      const point = new paper.Point(200, 300);
      const circle = new paper.Path.Circle(point, 200 / 2);
      circle.fillColor = "grey";
      circle.strokeColor = "black";
    },
    drawPitch() {
      this.viewLayer.activate();
      let pitch = new paper.Path();
      pitch.segments = this.pitchCorner;
      pitch.fillColor = "#f2f8ea";
      pitch.closed = true;
    },
    drawVehicle() {
      this.viewLayer.activate();
      let pitch = new paper.Path();
      pitch.segments = this.vehicleShape;
      pitch.fillColor = "black";
      pitch.closed = true;
    },
    drawStaticObstacles() {
      this.viewLayer.activate();
      this.obstaclesStatic.forEach(staticObstacle => {
        let pitch = new paper.Path();
        pitch.segments = staticObstacle.shape;
        pitch.fillColor = "#2196f3";
        pitch.closed = true;
      });
    },
    drawMovingObstacles() {
      this.viewLayer.activate();
      this.obstaclesMoving.forEach(movingObstacle => {
        let pitch = new paper.Path();
        pitch.segments = movingObstacle.shape;
        pitch.fillColor = "red";
        pitch.closed = true;
      });
    },
    drawGrid() {
      this.gridLayer.activate();
      let height = paper.view.size.height;
      let width = paper.view.size.width;
      // Vertical Lines
      for (let x = 0; x <= width; x += 10) {
        let topPoint = new paper.Point(x, 0);
        let bottomPoint = new paper.Point(x, height);
        let line = new paper.Path.Line(topPoint, bottomPoint);
        line.set(this.lineStyle(x));
      }
      // horizontal lines
      for (let y = 0; y <= height; y += 10) {
        let topPoint = new paper.Point(0, y);
        let bottomPoint = new paper.Point(width, y);
        let line = new paper.Path.Line(topPoint, bottomPoint);
        line.set(this.lineStyle(y));
      }
      this.toggleGrid();
    },
    lineStyle(coord) {
      if (coord % 50 == 0) {
        return { strokeColor: "lightblue", strokeWidth: 2 };
      } else {
        return { strokeColor: "lightblue", strokeWidth: 1 };
      }
    },
    toggleGrid() {
      this.gridLayer.visible = this.paperGrid;
    }
  },
  watch: {
    paperZoom: function(zoom) {
      paper.view.zoom = zoom;
    },
    paperGrid: function() {
      this.toggleGrid();
    },
    pitchCorner: function(pitchCorner) {
      if (pitchCorner) this.drawPitch();
    },
    vehicleShape: function(vehicleShape) {
      if (vehicleShape) this.drawVehicle();
    },
    obstaclesStatic: function(obstaclesStatic) {
      if (obstaclesStatic) this.drawStaticObstacles();
    },
    obstaclesMoving: function(obstaclesMoving) {
      if (obstaclesMoving) this.drawMovingObstacles();
    }
  },
  computed: {
    ...mapGetters([
      "paperZoom",
      "paperGrid",
      "pitchCenterPoint",
      "pitchCorner",
      "vehicleShape",
      "obstaclesStatic",
      "obstaclesMoving"
    ])
  }
};
</script>
<style>
.paper_canvas {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
