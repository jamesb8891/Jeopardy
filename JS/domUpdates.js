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
    i = i;
  },

  domClueCard(e) {
    for (var i = 0; i < 20; i++) {
      if (e.target.className === `card${i}`) {
        e.target.parentElement.remove();
        // e.target.parentElement.classList.add('disable')
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
      console.log("correct");
      game.increaseScore();
    } else {
      console.log("fail poop on you");
      game.decreaseScore();
    }
    clueContainer.classList.add("hidden");
    game.turnAssignment();
  }
};

if (typeof module !== "undefined") {
  module.exports = domUpdates;
}
