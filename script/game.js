'use strict';

var allToppings = ['bacon', 'broccoli', 'canadianBacon', 'cilantro', 'mint', 'redPepper', 'pepperoni', 'mushroom', 'olive', 'onion', 'shrimp', 'tomato', 'turkeyBacon', 'americanCheese', 'cheddarCheese', 'mozzorella', 'pestoSauce', 'marinaraSauce', 'alfredoSauce', 'BBQSauce'];

var myPizza;
var ourPizza;

var timerEl = document.getElementById('timer');
var timeLeft = 60;
timerEl.innerText = `${timeLeft} seconds remaining`;

var scoreEl = document.getElementById('score');
var score = 0;
scoreEl.innerText = `SCORE: ${score}`;

var answerBox = document.getElementById('answerBox');

function Pizza() {
  this.toppings = [];
  this.toppingNames = [];
  this.toppingType = [];
};

function toppingHandler() {
  var clickClass =  event.target.classList[0];
  var clickId = event.target.id;
  var clickName = event.target.name;
  if (clickId === clickClass) {
    removeTopping(clickClass, clickName);
  } else if (myPizza.toppings.indexOf(clickClass) === -1) {
    addTopping(clickClass, clickName);
  }
}

function addTopping(topping, name) {
  for (var i in allToppings) {
    if (topping === allToppings[i]) {
      myPizza.toppings.push(allToppings[i]);
      myPizza.toppingNames.push(name);

      var layerEl = document.getElementById('pizza-preview');
      var imgEl = document.createElement('img');
      imgEl.src = `../assets/${topping}Topping.png`;
      imgEl.className = document.getElementById(topping).classList[1];
      myPizza.toppingType.push(imgEl.className);
      imgEl.id = name;
      layerEl.appendChild(imgEl);

      var buttonEl = document.getElementById(topping);
      buttonEl.style.visibility = 'visible';
    }
  }
}

function generateOurToppings() {
  var usedToppings = [];
  var randSauce = Math.floor((Math.random() * 4) + 16);
  addOurTopping(allToppings[randSauce]);
  var randCheese = Math.floor((Math.random() * 3) + 13);
  addOurTopping(allToppings[randCheese]);
  for (var i = 0; i < Math.floor((Math.random() * 9) + 1); i++) {
    var randTopping = Math.floor(Math.random() * 13);
    if (usedToppings.indexOf(randTopping) === -1) {
      addOurTopping(allToppings[randTopping]);
      usedToppings.push(randTopping);
    }
  }
}

function addOurTopping(topping) {
  for (var i in allToppings) {
    if (topping === allToppings[i]) {
      ourPizza.toppings.push(allToppings[i]);

      var layerEl = document.getElementById('pizza-preview');
      var imgEl = document.createElement('img');
      imgEl.src = `../assets/${topping}Topping.png`;

      var getToppingTypes = document.querySelectorAll('button');
      for (var j = 0; j < getToppingTypes.length; j++) {
        if (topping === (getToppingTypes[j].classList[0])) {
          imgEl.className = `our${getToppingTypes[j].classList[1]}`;
          console.log(imgEl.className);
        }
      }
      ourPizza.toppingType.push(imgEl.className);
      layerEl.appendChild(imgEl);
    }
  }
}

function removeTopping(topping, name) {
  for (var i in myPizza.toppings) {
    if (topping === myPizza.toppings[i]) {
      myPizza.toppings.splice(i, 1);
      myPizza.toppingNames.splice(i, 1);
      myPizza.toppingType.splice(i, 1);
    }
  }

  var imgEl = document.getElementById(name);
  imgEl.parentNode.removeChild(imgEl);

  var buttonEl = document.getElementById(topping);
  buttonEl.style.visibility = 'hidden';
}

function submitAnswer() {
  myPizza.toppings.sort();
  ourPizza.toppings.sort();
  for (var i in myPizza.toppings) {
    if (myPizza.toppings.indexOf(ourPizza.toppings[i]) === -1) {
      console.log('wrong!');
      wrongAnswer();
      return;
    }
  }
  for (var j in ourPizza.toppings) {
    if (ourPizza.toppings.indexOf(myPizza.toppings[j]) === -1) {
      console.log('wrong!');
      wrongAnswer();
      return;
    }
  }
  console.log('correct!');
  rightAnswer();
}

function rightAnswer() {
  var givePoints = 5 * myPizza.toppings.length;
  score += givePoints;
  scoreEl.innerText = `SCORE: ${score}`;
  answerBox.style.visibility = 'visible';
  answerBox.style.color = 'green';
  answerBox.innerText = `CORRECT! +${givePoints} POINTS!`;
  timeLeft += 10;
  setTimeout(function(){
    answerBox.innerText = '';
    answerBox.style.visibility = 'hidden';
  }, 2000);
  clearBoard();
  newRound();
}

function wrongAnswer() {
  answerBox.style.visibility = 'visible';
  answerBox.style.color = 'red';
  answerBox.innerText = 'WRONG! KEEP TRYING!';
  setTimeout(function(){
    answerBox.innerText = '';
    answerBox.style.visibility = 'hidden';
  }, 2000);
}

function clearBoard() {
  var toppingEls = document.querySelectorAll('img.sauces, img.cheeses, img.toppings, img.oursauces, img.ourcheeses, img.ourtoppings');
  for(var x = 0; x < toppingEls.length; x++) {
    toppingEls[x].parentNode.removeChild(toppingEls[x]);
  }
  var hideXButtons = document.querySelectorAll('button[value="remove"]');
  for(var i = 0; i < hideXButtons.length; i++) {
    hideXButtons[i].style.visibility = 'hidden';
  }
}

function newRound() {
  myPizza = new Pizza();
  ourPizza = new Pizza();
  generateOurToppings();
}

function gameOver() {
  clearInterval(timer);
  answerBox.style.color = 'black';
  answerBox.style.fontSize = '38px';
  answerBox.innerText = 'GAME OVER';
  answerBox.style.fontWeight = 'bold';
  answerBox.style.left = '840px';
  answerBox.style.visibility = 'visible';

  tableEl.removeEventListener('click', toppingHandler);
  answerEl.removeEventListener('click', submitAnswer);
}

function countdown() {
  if (timeLeft <= 0) {
    gameOver();
    return;
  }
  timeLeft--;
  timerEl.innerText = `${timeLeft} seconds remaining`;
}

newRound();

var timer = setInterval(countdown, 1000);

var tableEl = document.getElementById('toppings');
tableEl.addEventListener('click', toppingHandler);

var answerEl = document.getElementById('yourAnswer');
answerEl.addEventListener('click', submitAnswer);