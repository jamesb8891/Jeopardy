class Player {
  constructor(id) {
    this.score = 0;
    this.id = id;
  }

  checkAnswer() {matchedClue = gameQuestions.find(clue => {
      return (
        clue.question === currentClue
      );
    });
    console.log(matchedClue)
    if (matchedClue.answer === answerInput.value) {
      var correct = true
    } else {
      var correct = false
    }
    this.updateScore(correct)
    domUpdates.clearInput();
    clueContainer.classList.add("hidden");
    game.turnAssignment();
    game.questionCounter++;
    game.setRound2();
    game.setRound3();
  }

  updateScore(answer) {
    switch(answer) {
      case true:
        if (game.turnCounter === 1) {
          var newScore = (game.players[0].score += matchedClue.pointValue);
          domUpdates.playerScore(1, newScore)
        }
        if (game.turnCounter === 2) {
          var newScore = (game.players[1].score += matchedClue.pointValue);
          domUpdates.playerScore(2, newScore)
        }
        if (game.turnCounter === 3) {
           var newScore = (game.players[2].score += matchedClue.pointValue);
           domUpdates.playerScore(3, newScore)
        }
        break;
      case false:
        if (game.turnCounter === 1) {
          var newScore = (game.players[0].score -= matchedClue.pointValue);
          domUpdates.playerScore(1, newScore)
        }
        if (game.turnCounter === 2) {
          var newScore = (game.players[1].score -= matchedClue.pointValue);
          domUpdates.playerScore(2, newScore)
        }
        if (game.turnCounter === 3) {
          var newScore = (game.players[2].score -= matchedClue.pointValue);
          domUpdates.playerScore(3, newScore)
        }
        break;
    }
  }
}


if (typeof module !== "undefined") {
  module.exports = Player;
}
