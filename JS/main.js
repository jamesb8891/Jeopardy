var playerOneInput = document.querySelector('.player-one-input');
var playerTwoInput = document.querySelector('.player-two-input');
var playerThreeInput = document.querySelector('.player-three-input');
var startButton = document.querySelector('.start-button');
var category1 = document.querySelector('.category1');
var category2 = document.querySelector('.category2');
var category3 = document.querySelector('.category3');
var category4 = document.querySelector('.category4');
let categoriesArray = [];

startButton.addEventListener("click", domUpdates.initializePlayers);

const initialize = () => {
  var game = new Game;
  game.setCategories()
}

initialize()
