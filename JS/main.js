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
let answerButton = document.querySelector('.answer-button');
let card = []
let clueCard = document.querySelector('.card-question')
let clueContainer = document.querySelector('.clue-container')

startButton.addEventListener("click", domUpdates.initializePlayers);

pointCards.addEventListener("click", domUpdates.domClueCard)
answerButton.addEventListener("click", domUpdates.checkAnswer)


const initialize = () => {
  game = new Game;
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

const addPlayers = () => {
  player1 = new Player('player1');
  player2 = new Player('player2');
  player3 = new Player('player3');
  player1.initializeTurn();
  game.players.push(player1)
  game.players.push(player2)
  game.players.push(player3)
}

initialize();
addPlayers();

console.log(gameQuestions)
