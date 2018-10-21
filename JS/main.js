var playerOneInput = document.querySelector(".player-one-input");
var playerTwoInput = document.querySelector(".player-two-input");
var playerThreeInput = document.querySelector(".player-three-input");
var startButton = document.querySelector(".start-button");
var categoryArr = [];
let gameQuestions = [];
let randomCategoryIds = [];
let pointCards = document.querySelector(".point-card-container");
let answerInput = document.querySelector(".answer-input");
let answerButton = document.querySelector(".answer-button");
let card = [];
let clueCard = document.querySelector(".card-question");
let clueContainer = document.querySelector(".clue-container");
let finalQuestionWagerSubmit = document.querySelector(
  ".final-question-wager-submit"
);
let finalQuestionAnswerSubmit = document.querySelector(
  ".final-question-answer-submit"
);
let matchedClue;


startButton.addEventListener("click", domUpdates.initializePlayers);
pointCards.addEventListener("click", domUpdates.domClueCard);
answerButton.addEventListener("click", domUpdates.runPlayers);
finalQuestionWagerSubmit.addEventListener("click", domUpdates.checkWager);
finalQuestionAnswerSubmit.addEventListener(
  "click",
  domUpdates.checkFinalAnswer
);

const initialize = () => {
  game = new Game();
  game.recursiveCall();
  game.filterQuestions();
  game.retrieveCategory(0);
  game.retrieveCategory(1);
  game.retrieveCategory(2);
  game.retrieveCategory(3);
  domUpdates.domCategories(-5);
  domUpdates.changeCat(-1);
  domUpdates.renderClues();
};

const addPlayers = () => {
  player = new Player("player")
  player1 = new Player("player1");
  player2 = new Player("player2");
  player3 = new Player("player3");
  game.players.push(player1);
  game.players.push(player2);
  game.players.push(player3);
};

initialize();
addPlayers();
console.log(gameQuestions)
