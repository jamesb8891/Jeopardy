var playerOneInput = document.querySelector(".player-one-input");
var playerTwoInput = document.querySelector(".player-two-input");
var playerThreeInput = document.querySelector(".player-three-input");
var playerOneName = document.querySelector(".player-one-name");
var playerTwoName = document.querySelector(".player-two-name");
var playerThreeName = document.querySelector(".player-three-name");
var startButton = document.querySelector(".start-button");

startButton.addEventListener("click", initializePlayers);

function initializePlayers(e) {
  e.preventDefault()
  playerOneName.innerText = playerOneInput.value;
  playerTwoName.innerText = playerTwoInput.value;
  playerThreeName.innerText = playerThreeInput.value;
}


 // newElement.innerHTML = `<li>Tax Amount (in dollars): $${taxAmount}</li>