class Game {
  constructor(gameState) {
    this.gameState = gameState;
    this.round = 1;
    this.players = ['player1', 'player2', 'player3'];
  }
  
  advanceRound() {
    return this.round++
  }

  setCategories () {
    var categoryKeys = Object.keys(data.categories).map(key => {    
      return key.replace(/([A-U])/g, ' $1').replace(/^./, function(string){ return string.toUpperCase(); })
    })
    for(var i = 0; categoriesArray.length < 4; i++) {
      let newCat = (categoryKeys[Math.floor(Math.random()* (0, 10))])
      if (!categoriesArray.includes(newCat)) {
      categoriesArray.push(newCat);
      }
    }
    domUpdates.domCategories()
    return categoriesArray
  }


  // declareWinner()
  // start()
  // reset()
  // advanceRound()

}


if (typeof module !== 'undefined') {
  module.exports = Game;
}

