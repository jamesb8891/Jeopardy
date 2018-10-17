class Player {
  constructor(id) {
    this.score = 0;
    this.id = id;
  }

  initializeTurn() {
    if(this.id === 'player1') {
      this.turn = true;
    }
  }

  // yourTurn() {
  //   for() {

  //   }

  // }

  // notYourTurn() {
  //   this.turn = false;
  // }

  // increaseScore() {
  //   if(game.turncounter === 1) {
  //     player1.score += matchedClue.pointValue
  //   }
  //   if(game.turncounter === 2) {
  //     player2.score += matchedClue.pointValue
  //   }
  //   if(game.turncounter === 3) {
  //     player3.score += matchedClue.pointValue
  //   }
  // }


  // submitAnswer()
  // submitWager()
  // updateScore()
}



if (typeof module !== 'undefined') {
  module.exports = Player;
}