class Game {
  constructor(gameState, round, players) {
    this.gameState = gameState;
    this.round = round;
    this.players = players;
    // (array of instances of players)
  }
  // start()
  // reset()
  // pause()
  // advanceRound()
  // declareWinner()
}

class Clues {
  constructor(question, answer, pointValue) {
    this.question = question;
    this.answer = answer;
    this.pointValue = pointValue;
    this.categoryId = categoryId;
  }
}

class DailyDouble extends Clues {
  constructor(question, answer, pointValue) {
    super(question, answer, pointValue);
  }
  // checkWager()
}

class GameBoard {
  constructor(askedQuestions, unaskedQuestions, categories) {
    this.askedQuestions = askedQuestions;
    this.unaskedQuestions = unaskedQuestions;
    this.categories = categories;
  }
}

class Player {
  constructor(score, id) {
    this.score = score;
    this.id = id;
    // name
  }
  // submitAnswer()
  // submitWager()
  // updateScore()
}

if (typeof module !== 'undefined') {
  module.exports = { Game, Clues, DailyDouble, GameBoard, Player };
}


