class Game {
  constructor(gameState) {
    this.gameState = gameState;
    this.round = 1;
    this.players = ['player1', 'player2', 'player3'];
  }
  
  advanceRound() {
    return this.round++
  }

  initializePlayers() {
    document.querySelector('.player-one-name').innerText = playerOneInput.value || "Player 1";
    document.querySelector('.player-two-name').innerText = playerTwoInput.value || "Player 2";
    document.querySelector('.player-three-name').innerText = playerThreeInput.value || "Player 3";
    this.hideMenu();
  }

  hideMenu() {
    document.querySelector('.start-menu').remove()
  }

  domCategories () {
    category1.innerText = categoriesArray[0]
    category2.innerText = categoriesArray[1]
    category3.innerText = categoriesArray[2]
    category4.innerText = categoriesArray[3]
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
    this.domCategories()
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
