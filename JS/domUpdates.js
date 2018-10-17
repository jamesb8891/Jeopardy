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
    if (game.round === 1) {
      category1.innerText = gameQuestions[0].categoryId;
      category2.innerText = gameQuestions[5].categoryId;
      category3.innerText = gameQuestions[10].categoryId;
      category4.innerText = gameQuestions[15].categoryId;
    }
    if (game.round === 2) {
      category1.innerText = newGameQuestions[0].categoryId;
      category2.innerText = newGameQuestions[5].categoryId;
      category3.innerText = newGameQuestions[10].categoryId;
      category4.innerText = newGameQuestions[15].categoryId;
    }
  },

  domClues() {
    for (var i = 0; i < 20; i++) {
      if (game.round === 1) {
        card[i] = document.querySelector(`.card${i}`).innerText =
        gameQuestions[`${i}`].pointValue;
      }
      if(game.round === 2) {
        card[i] = document.querySelector(`.card${i}`).innerText =
        newGameQuestions[`${i}`].pointValue;
      }
    }
  },

  domClueCard(e) {
    for (var i = 0; i < 20; i++) {
      if (e.target.className === `card${i}`) {
        e.target.parentElement.classList.toggle("hidden");
        clueContainer.classList.remove("hidden");
        if(game.round === 1) {
          clueCard.innerHTML = `${gameQuestions[`${i}`].question}`;  
        }
        if(game.round === 2) {
          // e.target.classList.remove("hidden");
          clueCard.innerHTML = `${newGameQuestions[`${i}`].question}`;
        }
      }
    }
  },

  clearInput() {
    answerInput.value = "";
  },

  checkAnswer() {
    domUpdates.clearInput();
    if (game.round === 1) {
      matchedClue = gameQuestions.find(clue => {
        return (
          clue.question === document.querySelector(".card-question").innerText
        );
      });
    }
    if (game.round === 2) {
      matchedClue = newGameQuestions.find(clue => {
        return (
          clue.question === document.querySelector(".card-question").innerText
        );
      });
    }
    if (matchedClue.answer === answerInput.value) {
      game.increaseScore();
    } else {
      game.decreaseScore();
    }
    clueContainer.classList.add("hidden");
    game.turnAssignment();
    game.questionCounter++;
    game.roundChecker();
  }
};

if (typeof module !== "undefined") {
  module.exports = domUpdates;
}
