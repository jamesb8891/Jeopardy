class Player {
  constructor(id) {
    this.score = 0;
    this.id = id;
  }

  checkAnswer() {
    matchedClue = gameboard.gameQuestions.find(clue => {
      return (
        clue.question === currentClue
      );

    });
    if (matchedClue.answer === answerInput.value) {
      var correct = true;
    } else {
      var correct = false;
    }
    this.updateScore(correct);
    domUpdates.clearInput();
    domUpdates.toggleClueContainer();
    game.turnAssignment();
    game.questionCounter++;
    game.setRound2();
    game.setRound3();
  }

  updateScore(answer) {
    switch (answer) {
      case true:
        if (game.turnCounter === 1) {
          var newScore = (game.players[0].score += matchedClue.pointValue);
          domUpdates.playerScore(1, newScore);
        }
        if (game.turnCounter === 2) {
          var newScore = (game.players[1].score += matchedClue.pointValue);
          domUpdates.playerScore(2, newScore);
        }
        if (game.turnCounter === 3) {
          var newScore = (game.players[2].score += matchedClue.pointValue);
          domUpdates.playerScore(3, newScore);
        }
        break;
      case false:
        if (game.turnCounter === 1) {
          var newScore = (game.players[0].score -= matchedClue.pointValue);
          domUpdates.playerScore(1, newScore);
        }
        if (game.turnCounter === 2) {
          var newScore = (game.players[1].score -= matchedClue.pointValue);
          domUpdates.playerScore(2, newScore);
        }
        if (game.turnCounter === 3) {
          var newScore = (game.players[2].score -= matchedClue.pointValue);
          domUpdates.playerScore(3, newScore);
        }
        break;
    }
  }

  updateWagerScore(answer1, answer2, answer3) {
   if (answer1 === true) {
      player1.score += playerWager1
   } else {
      player1.score -= playerWager1
   }
   if (answer2 === true) {
      player2.score += playerWager2
   } else {
      player2.score -= playerWager2
   }
   if (answer3 === true) {
      player3.score += playerWager3
   } else {
      player3.score -= playerWager3
   }
   game.declareWinner()
  }

  checkFinalAnswers(answer1, answer2, answer3) {
    matchedClue = gameboard.gameQuestions.find(clue => {
      return (
        clue.question === currentClue
      );
    });
    if (matchedClue.answer === answer1) {
      var correct1 = true
    } else {
      var correct1 = false
    }
    if (matchedClue.answer === answer2) {
      var correct2 = true
    } else {
      var correct2 = false
    }
    if (matchedClue.answer === answer3) {
      var correct3 = true
    } else {
      var correct3 = false
    }
    this.updateWagerScore(correct1, correct2, correct3)
  }
}

if (typeof module !== "undefined") {
  module.exports = Player;
}
