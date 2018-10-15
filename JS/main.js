var playerOneInput = document.querySelector('.player-one-input');
var playerTwoInput = document.querySelector('.player-two-input');
var playerThreeInput = document.querySelector('.player-three-input');
var startButton = document.querySelector('.start-button');
var category1 = document.querySelector('.category1');
var category2 = document.querySelector('.category2');
var category3 = document.querySelector('.category3');
var category4 = document.querySelector('.category4');
let categoriesArray = []

startButton.addEventListener("click", initializePlayers);

function initializePlayers() {
  document.querySelector('.player-one-name').innerText = playerOneInput.value || "Player 1";
  document.querySelector('.player-two-name').innerText = playerTwoInput.value || "Player 2";
  document.querySelector('.player-two-name').innerText = playerThreeInput.value || "Player 3";
  hideMenu();
}

const hideMenu = () => {
  document.querySelector('.start-menu').remove()
}

const domCategories = () => {
  category1.innerText = categoriesArray[0]
  category2.innerText = categoriesArray[1]
  category3.innerText = categoriesArray[2]
  category4.innerText = categoriesArray[3]
}


const setCategories= () => {
  var categoryKeys = Object.keys(data.categories).map(key => {    
    return key.replace(/([A-U])/g, ' $1').replace(/^./, function(string){ return string.toUpperCase(); })
  })
  for(var i = 0; categoriesArray.length < 4; i++) {
    let newCat = (categoryKeys[Math.floor(Math.random()* (0, 10))])
    if (!categoriesArray.includes(newCat)) {
    categoriesArray.push(newCat);
    }
  }
  domCategories()
  return categoriesArray
}

setCategories()


