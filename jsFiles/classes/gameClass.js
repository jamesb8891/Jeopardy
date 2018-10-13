class Game {
  constructor(gameState) {
    this.gameState = gameState;
    this.round = 1;
    this.players = ['player1', 'player2', 'player3'];
    // (array of instances of players)
  }
  // start()
  // reset()
  // advanceRound()
  // declareWinner()
}

class Clue {
  constructor(question) {
    this.poop = question;
    // this.answer = answer;
    // this.pointValue = pointValue;
    // this.categoryId = categoryId;
  }
}

// class DailyDouble extends Clues {
//   constructor(question, answer, pointValue) {
//     super(question, answer, pointValue);
//   }
//   // checkWager()
// }

// class GameBoard {
//   constructor(askedQuestions, unaskedQuestions, categories) {
//     this.askedQuestions = askedQuestions;
//     this.unaskedQuestions = unaskedQuestions;
//     this.categories = categories;
//   }
// }

// class Player {
//   constructor(score, id) {
//     this.score = score;
//     this.id = id;
//     // name
//   }
//   // submitAnswer()
//   // submitWager()
//   // updateScore()
// }



if (typeof module !== 'undefined') {
  module.exports = Game;
}
