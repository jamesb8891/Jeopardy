var playerOneInput = document.querySelector('.player-one-input');
var playerTwoInput = document.querySelector('.player-two-input');
var playerThreeInput = document.querySelector('.player-three-input');
var startButton = document.querySelector('.start-button');
var category1 = document.querySelector('.category1');
var category2 = document.querySelector('.category2');
var category3 = document.querySelector('.category3');
var category4 = document.querySelector('.category4');
// let categoriesArray = [];
let gameQuestions = [];
let randomCategoryIds = [];

startButton.addEventListener("click", domUpdates.initializePlayers);

const initialize = () => {
  var game = new Game;
  game.recursiveCall();
  game.filterQuestions();
  game.retrieveCategory(0);
  game.retrieveCategory(1);
  game.retrieveCategory(2);
  game.retrieveCategory(3);
  game.updateCategoryId();
  domUpdates.domCategories();
  domUpdates.domClues();
}

initialize()

console.log(randomCategoryIds)
console.log(gameQuestions)
