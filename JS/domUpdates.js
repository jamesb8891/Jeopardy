const domUpdates = {
  initializePlayers() {
    document.querySelector(".player-one-name").innerText =
      playerOneInput.value || "Player 1";
    document.querySelector(".player-two-name").innerText =
      playerTwoInput.value || "Player 2";
    document.querySelector(".player-three-name").innerText =
      playerThreeInput.value || "Player 3";
    document.querySelector(".start-menu").remove();
  },

  domCategories(index) {
    for (var i = 1; i < 5; i++) {
      index += 5;
      switch (gameboard.gameQuestions[index].categoryId) {
        case 1:
          gameboard.gameCategories.push("US History");
          break;
        case 2:
          gameboard.gameCategories.push("Life Sciences");
          break;
        case 3:
          gameboard.gameCategories.push("Public Health");
          break;
        case 4:
          gameboard.gameCategories.push("Education Jargon");
          break;
        case 5:
          gameboard.gameCategories.push("Board Game");
          break;
        case 6:
          gameboard.gameCategories.push("American Literature");
          break;
        case 7:
          gameboard.gameCategories.push("Biography");
          break;
        case 8:
          gameboard.gameCategories.push("American Cities");
          break;
        case 9:
          gameboard.gameCategories.push("Food");
          break;
        case 10:
          gameboard.gameCategories.push("Cable TV");
          break;
      }
    }
  },

  changeCat(index) {
    for (var i = 1; i < 5; i++) {
      index += 1;
      gameboard.gameCategories[index] = document.querySelector(`.category${i}`).innerText =
        gameboard.gameCategories[`${index}`];
    }
  },

  renderClues() {
    let card = [];
    for (var i = 0; i < 20; i++) {
      card[i] = document.querySelector(`.card${i}`).innerText =
        gameboard.gameQuestions[`${i}`].pointValue;
    }
  },

  domClueCard(e) {
    for (var i = 0; i < 20; i++) {
      if (e.target.className === `card${i}`) {
        e.target.parentElement.classList.add("hidden");
        domUpdates.toggleClueContainer();
        currentClue = `${gameboard.gameQuestions[`${i}`].question}`;
        document.querySelector(".card-question").innerHTML = currentClue
      }
    }
  },

  toggleClueContainer() {
    document.querySelector(".clue-container").classList.toggle("hidden")
  },

  clearInput() {
    answerInput.value = "";
  },

  playerScore(i, score) {
    document.querySelector(`.player${i}-score`).innerText = score;
  },

  resetRound() {
    let allPointCards = document.querySelectorAll(".hidden-cards");
    allPointCards.forEach(card => {
      card.classList.remove("hidden");
    });
  },

  displayRound() {
    if (game.round === 2) {
      document.querySelector(".round-number").innerText = 2;
    }
    if (game.round === 3) {
      document.querySelector(".round-number").innerText = 3;
    }
  },

  finalQuestion() {
    document.querySelector(".final-question-wager").classList.remove("hidden");
  },

  runPlayers() {
    player.checkAnswer();
  },


  checkWager() {},

  checkFinalAnswers() {}
};

if (typeof module !== "undefined") {
  module.exports = domUpdates
}
