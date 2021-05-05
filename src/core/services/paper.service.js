import paper from "paper";

const PaperService = {
  init() {
    paper.setup(document.getElementById("paper_canvas"));
    paper.settings.handleSize = 0;
    paper.settings.hitTolerance = 4;
  }
};

export default PaperService;
