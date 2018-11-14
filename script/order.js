'use strict';
var allToppings = ['bacon', 'broccoli', 'canadianBacon', 'cilantro', 'mint', 'redPepper', 'pepperoni', 'mushroom', 'olive', 'onion', 'shrimp', 'tomato', 'turkeyBacon', 'americanCheese', 'cheddarCheese', 'mozzorella', 'pestoSauce', 'marinaraSauce', 'alfredoSauce', 'BBQSauce'];

function Pizza() {
  this.toppings = [];
  this.toppingNames = [];
};

function addTopping() {
  var clickClass =  event.target.classList[0];
  var clickToppingType = event.target.classList[1];
  var clickId = event.target.id;
  var clickName = event.target.name;
  console.log(myPizza.toppings.indexOf(clickClass));
  if (clickId === clickClass) {
    removeTopping(clickClass, clickName);
  } else if (myPizza.toppings.indexOf(clickClass) === -1) {
    for (var i in allToppings) {
      if (clickClass === allToppings[i]) {
        myPizza.toppings.push(allToppings[i]);
        myPizza.toppingNames.push(clickName);
        console.log(`${clickName} added`);

        var layerEl = document.getElementById('pizza-preview');
        var imgEl = document.createElement('img');
        imgEl.src = `../assets/${clickClass}Topping.png`;
        imgEl.className = clickToppingType;
        imgEl.id = clickName;
        layerEl.appendChild(imgEl);

        var buttonEl = document.getElementById(clickClass);
        console.log(buttonEl);
        buttonEl.style.visibility = 'visible';
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
  var imgEl = document.getElementById(name);
  imgEl.parentNode.removeChild(imgEl);

  var buttonEl = document.getElementById(topping);
  buttonEl.style.visibility = 'hidden';
}

function storeToCheckout() {
  var toppingData = localStorage.setItem('toppingData', JSON.stringify(myPizza.toppings));
  console.log(toppingData);
  var toppingNameData = localStorage.setItem('toppingNameData', JSON.stringify(myPizza.toppingNames));
  console.log(toppingNameData);
}

var myPizza = new Pizza();

var tableEl = document.getElementById('toppings');
tableEl.addEventListener('click', addTopping);

var submitEl = document.getElementById('orderButton');
submitEl.addEventListener('click', storeToCheckout);