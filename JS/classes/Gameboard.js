class Gameboard {
  constructor() {
    this.gameCategories = [];
    this.gameQuestions = [];
    this.randomCategoryIds =[];
  }

  generateRandomCategoryIds() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    if (!this.randomCategoryIds.includes(randomNumber)) {
      this.randomCategoryIds.push(randomNumber);
      this.recursiveCall();
    }
  }

  recursiveCall() {
    for (var i = 0; this.randomCategoryIds.length < 4; i++) {
      this.generateRandomCategoryIds();
    }
  }

  filterQuestions(randomCategoryIdNumber, pointValue) {
    let filterQuestion = data.clues.filter(clue => {
      return (
        clue.categoryId === randomCategoryIdNumber &&
        clue.pointValue === pointValue
      );
    });
    const randomIndex = Math.floor(Math.random() * filterQuestion.length);
    return filterQuestion[randomIndex];
  }

  retrieveCategory(category) {
    for (var pointValue = 100; pointValue < 501; pointValue += 100) {
      var eachClue = this.filterQuestions(
        this.randomCategoryIds[category],
        pointValue
      );
      this.gameQuestions.push(eachClue);
    }
  }
}

if (typeof module !== "undefined") {
  module.exports = Gameboard;
}
