class Game {
  constructor(gameState) {
    this.gameState = gameState;
    this.round = 1;
    this.players = ['player1', 'player2', 'player3'];
  }
  
  advanceRound() {
    return this.round++
  }

  // setCategories () {
  //   var categoryKeys = Object.keys(data.categories).map(key => {    
  //     return key.replace(/([A-U])/g, ' $1').replace(/^./, function(string){ return string.toUpperCase(); })
  //   })
  //   for(var i = 0; categoriesArray.length < 4; i++) {
  //     let newCat = (categoryKeys[Math.floor(Math.random()* (0, 10))])
  //     if (!categoriesArray.includes(newCat)) {
  //     categoriesArray.push(newCat);
  //     }
  //   }
  //   domUpdates.domCategories()
  //   return categoriesArray
  // }

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


  // declareWinner()
  // start()
  // reset()
  // advanceRound()

}
// console.log(randomCategoryIds)


if (typeof module !== 'undefined') {
  module.exports = Game;
}

