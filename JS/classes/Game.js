class Game {
  constructor(gameState) {
    this.gameState = gameState;
    this.round = 1;
    this.players = [];
    this.turnCounter = 1;
    this.questionCounter = 0;
  }

  advanceRound() {
     return this.round++;
  }

  generateRandomCategoryIds() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    if (!randomCategoryIds.includes(randomNumber)) {
      randomCategoryIds.push(randomNumber);
      this.recursiveCall();
    }
  }

  recursiveCall() {
    for (var i = 0; randomCategoryIds.length < 4; i++) {
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
        randomCategoryIds[category],
        pointValue
      );
      gameQuestions.push(eachClue);
    }
  }

  turnAssignment() {
    this.turnCounter++;
    if (this.turnCounter === 4) {
      this.turnCounter = 1;
    }
  }

  setRound2() {
    if (this.questionCounter === 20) {
      this.round = 2;
      gameQuestions = [];
      randomCategoryIds = [];
      card = [];
      categoryArr = [];
      this.recursiveCall();
      this.filterQuestions();
      this.retrieveCategory(0);
      this.retrieveCategory(1);
      this.retrieveCategory(2);
      this.retrieveCategory(3);
      domUpdates.resetRound();
      domUpdates.domCategories(-5);
      domUpdates.changeCat(-1);
      this.doublePoints();
      domUpdates.renderClues();
      domUpdates.displayRound();
    }
  }

  setRound3() {
    if (this.questionCounter === 40) {
      this.round = 3;
      gameQuestions = [];
      randomCategoryIds = [];
      card = [];
      this.recursiveCall();
      this.filterQuestions();
      this.retrieveCategory(0);
      domUpdates.displayRound();
      domUpdates.finalQuestion();
    }
  }

  doublePoints() {
    gameQuestions.map(question => {
      question.pointValue *= 2;
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = Game;
}
