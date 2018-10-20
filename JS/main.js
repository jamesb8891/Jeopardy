let answerInput = document.querySelector(".answer-input");
let matchedClue;


document.querySelector(".start-button").addEventListener("click", domUpdates.initializePlayers);
document.querySelector(".point-card-container").addEventListener("click", domUpdates.domClueCard);
document.querySelector(".answer-button").addEventListener("click", domUpdates.runPlayers);
document.querySelector(".final-question-wager-submit").addEventListener("click", domUpdates.checkWager);
document.querySelector(".final-question-answer-submit").addEventListener(
  "click",
  domUpdates.checkFinalAnswer
);

const initialize = () => {
  game = new Game();
  gameboard = new Gameboard();
  gameboard.recursiveCall();
  gameboard.filterQuestions();
  gameboard.retrieveCategory(0);
  gameboard.retrieveCategory(1);
  gameboard.retrieveCategory(2);
  gameboard.retrieveCategory(3);
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
console.log(gameboard.gameQuestions)
