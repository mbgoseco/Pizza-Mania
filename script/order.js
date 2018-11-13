'use strict';
var allToppings = ['bacon', 'broccoli', 'canadianBacon', 'cilantro', 'mint', 'redPepper', 'pepperoni', 'mushroom', 'olive', 'onion', 'shrimp', 'tomato', 'turkeyBacon', 'americanCheese', 'cheddarCheese', 'mozzorella', 'pestoSauce', 'marinaraSauce', 'alfredoSauce', 'BBQSauce'];

function Pizza() {
  this.toppings = [];
  this.toppingNames = [];
};

function addTopping() {
  var clickClass =  event.target.className;
  var clickValue = event.target.value;
  var clickName = event.target.name;
  console.log(myPizza.toppings.indexOf(clickClass));
  if (clickValue === 'remove') {
    removeTopping(clickClass, clickName);
  } else if (myPizza.toppings.indexOf(clickClass) === -1) {
    for (var i in allToppings) {
      if (clickClass === allToppings[i]) {
        myPizza.toppings.push(allToppings[i]);
        myPizza.toppingNames.push(clickName);
        console.log(`${clickName} added`);
      }
    }
  }
}

function removeTopping(topping, name) {
  for (var i in myPizza.toppings) {
    if (topping === myPizza.toppings[i]) {
      myPizza.toppings.splice(i, 1);
      console.log(`${topping} removed`);
    }
  }
  for (var j in myPizza.toppingNames) {
    if (name === myPizza.toppingNames[j]) {
      myPizza.toppingNames.splice(j, 1);
      console.log(`${name} removed`);
    }
  }
}

var myPizza = new Pizza();

var tableEl = document.getElementById('toppings');
tableEl.addEventListener('click', addTopping);