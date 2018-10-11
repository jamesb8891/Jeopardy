var playerOneInput = document.querySelector('.player-one-input');
var playerTwoInput = document.querySelector('.player-two-input');
var playerThreeInput = document.querySelector('.player-three-input');
var playerOneName = document.querySelector('.player-one-name');
var playerTwoName = document.querySelector('.player-two-name');
var playerThreeName = document.querySelector('.player-three-name');
var startButton = document.querySelector('.start-button');
var startMenu = document.querySelector('.start-menu');


startButton.addEventListener('click', initializePlayers);

function initializePlayers() {
  playerOneName.innerText = playerOneInput.value || 'Player 1';
  playerTwoName.innerText = playerTwoInput.value || 'Player 2';
  playerThreeName.innerText = playerThreeInput.value || 'Player 3';
  hideMenu();
}

const hideMenu = () => {
  startMenu.remove()
}
