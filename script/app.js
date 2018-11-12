
var Toppings = function(mainFilePath, name, type, toppingsFilePath) {
    this.mainFilePath = mainFilePath;
    this.name = name;
    this.type = type;
    this.toppingsFilePath = toppingsFilePath;
    
    Toppings.allToppings.push(this);
};
var Toppings.allToppings [];

  function generateToppingList () {
      new Toppings ('./assets/image.png', 'Pepperoni', 'meat', './assets/image.png');
      new Toppings ('./assets/image.png', 'Bacon', 'meat', './assets/image.png');
      new Toppings ('./assets/image.png', 'Shrimp', 'meat', './assets/image.png');
      new Toppings ('./assets/image.png', 'Canadian bacon', 'meat', './assets/image.png');
      new Toppings ('./assets/image.png', 'Turkey bacon', 'meat', './assets/image.png');
      new Toppings ('./assets/image.png', 'Olives', 'veggie', './assets/image.png');
      new Toppings ('./assets/image.png', 'Tomatoes', 'veggie', './assets/image.png');
      new Toppings ('./assets/image.png', 'Mushroom', 'veggie', './assets/image.png');
      new Toppings ('./assets/image.png', 'Brocolli', 'veggie', './assets/image.png');
      new Toppings ('./assets/image.png', 'Cilantro', 'veggie', './assets/image.png');
      new Toppings ('./assets/image.png', 'Mint', 'veggie', './assets/image.png');
      new Toppings ('./assets/image.png', 'Pepper', 'veggie', './assets/image.png');
      new Toppings ('./assets/image.png', 'Onions', 'veggie', './assets/image.png');
      new Toppings ('./assets/image.png', 'Marinara', 'sause', './assets/image.png');
      new Toppings ('./assets/image.png', 'Alfredo', 'sause', './assets/image.png');
      new Toppings ('./assets/image.png', 'Pesto', 'sause', './assets/image.png');
      new Toppings ('./assets/image.png', 'BBQ', 'sause', './assets/image.png');
      new Toppings ('./assets/image.png', 'Cheddar', 'cheese', './assets/image.png');
      new Toppings ('./assets/image.png', '3 cheese', 'cheese', './assets/image.png');
      new Toppings ('./assets/image.png', 'Mozorella', 'cheese', './assets/image.png');
  }
