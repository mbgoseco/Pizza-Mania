'use strict';

var allToppings = ['bacon', 'broccoli', 'canadianBacon', 'cilantro', 'mint', 'redPepper', 'pepperoni', 'mushroom', 'olive', 'onion', 'shrimp', 'tomato', 'turkeyBacon', 'americanCheese', 'cheddarCheese', 'mozzorella', 'pestoSauce', 'marinaraSauce', 'alfredoSauce', 'BBQSauce'];
var cartWindow = document.getElementById('orderingBox');
var pizzaCart;

if(localStorage.getItem('toppingData')) {
  buildPizza();
} else {
  var emptyEl = document.createElement('h1');
  emptyEl.innerText = 'YOUR CART IS EMPTY!';
  cartWindow.appendChild(emptyEl);
}

function addTopping(topping, name, type) {
  for (var i in allToppings) {
    if (topping === allToppings[i]) {
      pizzaCart.toppings.push(allToppings[i]);
      pizzaCart.toppingNames.push(name);
      var imgEl = document.createElement('img');
      imgEl.src = `../assets/${topping}Topping.png`;
      imgEl.className = type;
      pizzaCart.toppingType.push(type);
      imgEl.id = name;
      cartWindow.appendChild(imgEl);
    }
  }
}

function buildList(name) {
  var toppingList = document.getElementById('toppingList');
  
}

function buildPizza() {
  pizzaCart = new Pizza();
  var toppingData = JSON.parse(localStorage.getItem('toppingData'));
  var toppingNameData = JSON.parse(localStorage.getItem('toppingNameData'));
  var toppingTypeData = JSON.parse(localStorage.getItem('toppingTypeData'));
  var pizzaBase = document.createElement('img');
  pizzaBase.src = '../assets/pizzadough.png';
  pizzaBase.id = 'pizza-dough';
  cartWindow.appendChild(pizzaBase);
  for (var i in toppingData) {
    addTopping(toppingData[i], toppingNameData[i], toppingTypeData[i]);
    buildList(toppingNameData[i]);
  }
}