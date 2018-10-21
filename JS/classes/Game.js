class Game {
  constructor() {
    this.round = 1;
    this.players = [];
    this.turnCounter = 1;
    this.questionCounter = 0;
    this.gameState = "active";
  }

  advanceRound() {
    return this.round++;
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
      gameboard.gameQuestions = [];
      gameboard.randomCategoryIds = [];
      gameboard.gameCategories = [];
      gameboard.randomIdsLengthSetter();
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
      gameboard.randomIdsLengthSetter();
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

  declareWinner() {
    let winnerScore = Math.max(player1.score, player2.score, player3.score)
    winner = this.players.find( player => {
      return player.score === winnerScore
    })
    // winner = winner.id
    // console.log(winner)
    domUpdates.displayWinner()
  }
}

if (typeof module !== "undefined") {
  module.exports = Game;
}
