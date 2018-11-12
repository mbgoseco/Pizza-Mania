'use strict';

function Pizza() {
  this.marinaraSauce = false;
  this.alfredoSauce = false;
  this.BBQSauce = false;
  this.pestoSauce = false;
  this.cheddar = false;
  this.threeCheese = false;
  this.mozorella = false;
};


var myPizza = new Pizza();

console.log(myPizza[2]);