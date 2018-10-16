var playerOneInput = document.querySelector('.player-one-input');
var playerTwoInput = document.querySelector('.player-two-input');
var playerThreeInput = document.querySelector('.player-three-input');
var startButton = document.querySelector('.start-button');
var category1 = document.querySelector('.category1');
var category2 = document.querySelector('.category2');
var category3 = document.querySelector('.category3');
var category4 = document.querySelector('.category4');
let gameQuestions = [];
let randomCategoryIds = [];
let pointCards = document.querySelector('.point-card-container')
let answerInput = document.querySelector('.answer-input')
let answerButton = document.querySelector('.answer-button')

startButton.addEventListener("click", domUpdates.initializePlayers);

pointCards.addEventListener("click", domUpdates.domClueCard)
document.querySelector('.display-card').addEventListener("click", domUpdates.domGetAnswer)
// document.querySelector(".answerthing").addEventListener("click", domUpdates.domGetAnswer)

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
