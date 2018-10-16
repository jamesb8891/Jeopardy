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

  domClues() {
    for(let i = 0; i < 20; i++) {
      card[i] = document.querySelector(`.card${i}`).innerText = gameQuestions[`${i}`].pointValue
    }
  },
  
  domClueCard(e){
    for(var i = 0; i < 20; i++) {
      if(e.target.className === `card${i}`) {
        clueContainer.classList.remove('hidden')
        clueCard.innerHTML = `${gameQuestions[`${i}`].question}` 

      }
    } 
    console.log(clueCard)
  },

  domGetAnswer(e) {
    if(e.target.className === 'answer-button') { 
      console.log(answerInput.value)
    }
  },
} 

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}