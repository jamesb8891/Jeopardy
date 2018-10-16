const domUpdates = {
  initializePlayers(){
    document.querySelector('.player-one-name').innerText = playerOneInput.value || "Player 1";
    document.querySelector('.player-two-name').innerText = playerTwoInput.value || "Player 2";
    document.querySelector('.player-three-name').innerText = playerThreeInput.value || "Player 3";
    document.querySelector('.start-menu').remove()
  },
  domCategories(){
    category1.innerText = gameQuestions[0].categoryId;
    category2.innerText = gameQuestions[5].categoryId;
    category3.innerText = gameQuestions[11].categoryId;
    category4.innerText = gameQuestions[16].categoryId;
  },

  domClues(){
    document.querySelector('.card1a').innerText = gameQuestions[0].pointValue;
    document.querySelector('.card2a').innerText = gameQuestions[1].pointValue;
    document.querySelector('.card3a').innerText = gameQuestions[2].pointValue;
    document.querySelector('.card4a').innerText = gameQuestions[3].pointValue;
    document.querySelector('.card5a').innerText = gameQuestions[4].pointValue;
    document.querySelector('.card1b').innerText = gameQuestions[5].pointValue;
    document.querySelector('.card2b').innerText = gameQuestions[6].pointValue;
    document.querySelector('.card3b').innerText = gameQuestions[7].pointValue;
    document.querySelector('.card4b').innerText = gameQuestions[8].pointValue;
    document.querySelector('.card5b').innerText = gameQuestions[9].pointValue;
    document.querySelector('.card1c').innerText = gameQuestions[10].pointValue;
    document.querySelector('.card2c').innerText = gameQuestions[11].pointValue;
    document.querySelector('.card3c').innerText = gameQuestions[12].pointValue;
    document.querySelector('.card4c').innerText = gameQuestions[13].pointValue;
    document.querySelector('.card5c').innerText = gameQuestions[14].pointValue;
    document.querySelector('.card1d').innerText = gameQuestions[15].pointValue;
    document.querySelector('.card2d').innerText = gameQuestions[16].pointValue;
    document.querySelector('.card3d').innerText = gameQuestions[17].pointValue;
    document.querySelector('.card4d').innerText = gameQuestions[18].pointValue;
    document.querySelector('.card5d').innerText = gameQuestions[19].pointValue;
  }
} 

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}