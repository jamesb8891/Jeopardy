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
    // game.setRound3();
  },

  resetRound() {
    let allPointCards = document.querySelectorAll(".hidden-cards")
    allPointCards.forEach((card) => {
      card.classList.remove("hidden");
    })
  },

  displayRound() {
    if(game.round === 2) {
      document.querySelector('.round-number').innerText = 2 
    }
    // if(game.round === 3) {
    //   document.querySelector('.round-number').innerText = 3 

    // }
  },

  // finalQuestion() {
  //   document.querySelector('.final-question').classList.remove('hidden');
  // },

  // checkWager(){
  //   // wager needs to be more than $5,
  //   // player must have enough money
  // },

  // checkFinalAnswers() {
  //   // if question is right, wager is added to score
  //   // if question is wrong, wager is subtracted from score
  //   // points have to go to the right player
  // }
};

if (typeof module !== "undefined") {
  module.exports = domUpdates;
}
