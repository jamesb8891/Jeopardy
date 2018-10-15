class Game {
  constructor(gameState) {
    this.gameState = gameState;
    this.round = 1;
    this.players = ["player1", "player2", "player3"];
  }

  advanceRound() {
    return this.round++;
  }
  // declareWinner()
  // start()
  // reset()
  // advanceRound()
}

if (typeof module !== "undefined") {
  module.exports = Game;
}
