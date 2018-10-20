class Gameboard {
  constructor() {
    this.gameCategories = [];
    this.gameQuestions = [];
    this.randomCategoryIds =[];
  }
}

if (typeof module !== "undefined") {
  module.exports = Gameboard;
}
