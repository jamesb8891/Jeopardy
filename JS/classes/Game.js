class Game {
  constructor(gameState) {
    this.gameState = gameState;
    this.round = 1;
    this.players = [];
    this.turnCounter = 1;
    this.questionCounter = 0;
  }
  
  advanceRound() {
    return this.round++
  }

  generateRandomCategoryIds(){
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    if (!randomCategoryIds.includes(randomNumber)) {
      randomCategoryIds.push(randomNumber);
      this.recursiveCall();
    }
  };

  recursiveCall(){
    for (var i = 0; randomCategoryIds.length < 4; i++) {
      this.generateRandomCategoryIds();
    }
  };

  filterQuestions(randomCategoryIdNumber, pointValue){
    let filterCategory = data.clues.filter(clue => {
      return (
        clue.categoryId === randomCategoryIdNumber &&
        clue.pointValue === pointValue
      );
    });
    const randomIndex = Math.floor(Math.random() * filterCategory.length);
    return filterCategory[randomIndex];
  };

  retrieveCategory(category){
    for (var pointValue = 100; pointValue < 501; pointValue += 100) {
      var eachCategory = this.filterQuestions(randomCategoryIds[category], pointValue);
      gameQuestions.push(eachCategory);
    }
  };

  updateCategoryId(){
    var mappedGameQuestions = Object.values(gameQuestions);
    gameQuestions = mappedGameQuestions.map((question) => {
      Object.keys(data.categories).forEach((category) => {
        if (question.categoryId === data.categories[category]) {
          question.categoryId = category
            .replace(/([A-U])/g, " $1")
            .replace(/^./, function(string) {
              return string.toUpperCase();
            });
        }
      });
      return question;
    });
    gameQuestions.map(obj => {
      return obj.categoryId;
    });
  };

  turnAssignment() {
    this.turnCounter++
    if(this.turnCounter === 4) {
      this.turnCounter = 1
    }
  }

  increaseScore() {
    if(this.turnCounter === 1) {
      let newScore = this.players[0].score += matchedClue.pointValue;
      document.querySelector('.player1-score').innerText = newScore;
    }
    if(this.turnCounter === 2) {
      let newScore = this.players[1].score += matchedClue.pointValue
      document.querySelector('.player2-score')
    }
    if(this.turnCounter === 3) {
      let newScore = this.players[2].score += matchedClue.pointValue
      document.querySelector('.player3-score').innerText = newScore
    }
  }

  decreaseScore() {
    if(this.turnCounter === 1) {
      let newScore = this.players[0].score -= matchedClue.pointValue;
      document.querySelector('.player1-score').innerText = newScore
    }
    if(this.turnCounter === 2) {
      let newScore = this.players[1].score -= matchedClue.pointValue
      document.querySelector('.player2-score').innerText = newScore
    }
    if(this.turnCounter === 3) {
      let newScore = this.players[2].score -= matchedClue.pointValue
      document.querySelector('.player3-score').innerText = newScore
    }
  }

  roundChecker() {
    if(this.questionCounter === 20) {
      this.round = 2;
      this.questionCounter = 0;
      gameQuestions = [];
      randomCategoryIds = [];
      card = [];
      this.recursiveCall();
      this.filterQuestions();
      this.retrieveCategory(0);
      this.retrieveCategory(1);
      this.retrieveCategory(2);
      this.retrieveCategory(3);
      this.updateCategoryId();
      domUpdates.resetRound()
      console.log(gameQuestions);
      domUpdates.domCategories();
      this.doublePoints()
      domUpdates.domClues();
      domUpdates.displayRound();
    }
  }

  doublePoints() {
    gameQuestions.map((question) => {
      question.pointValue *= 2
    })
  }




  // declareWinner()
  // start()
  // reset()
  // advanceRound()

}


if (typeof module !== 'undefined') {
  module.exports = Game;
}

