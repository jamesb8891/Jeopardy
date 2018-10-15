const domUpdates = {
  initializePlayers(){
    document.querySelector('.player-one-name').innerText = playerOneInput.value || "Player 1";
    document.querySelector('.player-two-name').innerText = playerTwoInput.value || "Player 2";
    document.querySelector('.player-three-name').innerText = playerThreeInput.value || "Player 3";
    document.querySelector('.start-menu').remove()
  },
   domCategories(){
    category1.innerText = categoriesArray[0]
    category2.innerText = categoriesArray[1]
    category3.innerText = categoriesArray[2]
    category4.innerText = categoriesArray[3]
  }
} 

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}