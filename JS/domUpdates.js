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
      switch (gameQuestions[index].categoryId) {
        case 1:
          categoryArr.push("US History");
          break;
        case 2:
          categoryArr.push("Life Sciences");
          break;
        case 3:
          categoryArr.push("Public Health");
          break;
        case 4:
          categoryArr.push("Education Jargon");
          break;
        case 5:
          categoryArr.push("Board Game");
          break;
        case 6:
          categoryArr.push("American Literature");
          break;
        case 7:
          categoryArr.push("Biography");
          break;
        case 8:
          categoryArr.push("American Cities");
          break;
        case 9:
          categoryArr.push("Food");
          break;
        case 10:
          categoryArr.push("Cable TV");
          break;
      }
    }
  },

  changeCat(index) {
    for (var i = 1; i < 5; i++) {
      index += 1;
      categoryArr[index] = document.querySelector(`.category${i}`).innerText =
        categoryArr[`${index}`];
    }
  },

  domClues() {
    for (var i = 0; i < 20; i++) {
      card[i] = document.querySelector(`.card${i}`).innerText =
        gameQuestions[`${i}`].pointValue;
    }
  },

  domClueCard(e) {
    for (var i = 0; i < 20; i++) {
      if (e.target.className === `card${i}`) {
        e.target.parentElement.classList.add("hidden");
        clueContainer.classList.remove("hidden");
        clueCard.innerHTML = `${gameQuestions[`${i}`].question}`;
      }
    }
  },

  clearInput() {
    answerInput.value = "";
  },

  checkAnswer() {
    domUpdates.clearInput();
    matchedClue = gameQuestions.find(clue => {
      return (
        clue.question === document.querySelector(".card-question").innerText
      );
    });
    if (matchedClue.answer === answerInput.value) {
      game.increaseScore();
    } else {
      game.decreaseScore();
    }
    clueContainer.classList.add("hidden");
    game.turnAssignment();
    game.questionCounter++;
    game.setRound2();
    game.setRound3();
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

  checkWager() {},

  checkFinalAnswers() {}
};

if (typeof module !== "undefined") {
  module.exports = domUpdates;
}
