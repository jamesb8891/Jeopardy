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
  domCategories() {
    category1.innerText = gameQuestions[0].categoryId;
    category2.innerText = gameQuestions[5].categoryId;
    category3.innerText = gameQuestions[11].categoryId;
    category4.innerText = gameQuestions[16].categoryId;
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
        e.target.parentElement.remove();
        clueContainer.classList.remove("hidden");
        clueCard.innerHTML = `${gameQuestions[`${i}`].question}`;
      }
    }
    console.log(clueCard);
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
    console.log('questionCounter:', game.questionCounter);
    game.roundChecker();
  }
};

if (typeof module !== "undefined") {
  module.exports = domUpdates;
}
