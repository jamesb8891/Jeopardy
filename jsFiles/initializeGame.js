var playerOneInput = document.querySelector('.player-one-input');
var playerTwoInput = document.querySelector('.player-two-input');
var playerThreeInput = document.querySelector('.player-three-input');
var playerOneName = document.querySelector('.player-one-name');
var playerTwoName = document.querySelector('.player-two-name');
var playerThreeName = document.querySelector('.player-three-name');
var startButton = document.querySelector('.start-button');
var startMenu = document.querySelector('.start-menu');
var category1 = document.querySelector('.category1');
var category2 = document.querySelector('.category2');
var category3 = document.querySelector('.category3');
var category4 = document.querySelector('.category4');
let categoriesArray = []



startButton.addEventListener('click', initializePlayers);

function initializePlayers() {
  playerOneName.innerText = playerOneInput.value || 'Player 1';
  playerTwoName.innerText = playerTwoInput.value || 'Player 2';
  playerThreeName.innerText = playerThreeInput.value || 'Player 3';
  hideMenu();
}

const hideMenu = () => {
  startMenu.remove()
}

const domCategories = () => {
  category1.innerText = categoriesArray[0]
  category2.innerText = categoriesArray[1]
  category3.innerText = categoriesArray[2]
  category4.innerText = categoriesArray[3]
}

const setCategories= () => {
  for(var i = 0; categoriesArray.length < 4; i++) {
    let newCat = (Object.keys(data.categories)[Math.floor(Math.random()* (0, 10))])
    if (!categoriesArray.includes(newCat)) {
    categoriesArray.push(newCat);
    }
  }
  domCategories()
  return categoriesArray
}
setCategories()


console.log(categoriesArray)