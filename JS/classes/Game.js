class Game {
  constructor() {
    this.round = 1;
    this.players = [];
    this.turnCounter = 1;
    this.questionCounter = 0;
  }

  advanceRound() {
     return this.round++;
  }

  //move to gameboard??

  // generateRandomCategoryIds() {
  //   const randomNumber = Math.floor(Math.random() * 10 + 1);
  //   if (!gameboard.randomCategoryIds.includes(randomNumber)) {
  //     gameboard.randomCategoryIds.push(randomNumber);
  //     this.recursiveCall();
  //   }
  // }

  //move to gameboard??

  // recursiveCall() {
  //   for (var i = 0; gameboard.randomCategoryIds.length < 4; i++) {
  //     this.generateRandomCategoryIds();
  //   }
  // }

  // filterQuestions(randomCategoryIdNumber, pointValue) {
  //   let filterQuestion = data.clues.filter(clue => {
  //     return (
  //       clue.categoryId === randomCategoryIdNumber &&
  //       clue.pointValue === pointValue
  //     );
  //   });
  //   const randomIndex = Math.floor(Math.random() * filterQuestion.length);
  //   return filterQuestion[randomIndex];
  // }

  // retrieveCategory(category) {
  //   for (var pointValue = 100; pointValue < 501; pointValue += 100) {
  //     var eachClue = this.filterQuestions(
  //       gameboard.randomCategoryIds[category],
  //       pointValue
  //     );
  //     gameboard.gameQuestions.push(eachClue);
  //   }
  // }

  turnAssignment() {
    this.turnCounter++;
    if (this.turnCounter === 4) {
      this.turnCounter = 1;
    }
  }

  setRound2() {
    if (this.questionCounter === 20) {
      this.round = 2;
      gameboard.gameQuestions = [];
      gameboard.randomCategoryIds = [];
      gameboard.gameCategories = [];
      gameboard.recursiveCall();
      gameboard.filterQuestions();
      gameboard.retrieveCategory(0);
      gameboard.retrieveCategory(1);
      gameboard.retrieveCategory(2);
      gameboard.retrieveCategory(3);
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
      gameboard.gameQuestions = [];
      gameboard.randomCategoryIds = [];
      gameboard.recursiveCall();
      gameboard.filterQuestions();
      gameboard.retrieveCategory(0);
      domUpdates.displayRound();
      domUpdates.finalQuestion();
    }
  }

  doublePoints() {
    gameboard.gameQuestions.map(question => {
      question.pointValue *= 2;
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = Game;
}
