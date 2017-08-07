'use strict';
var price = 33, quantity = 30;
var product = {
  price,
  quantity
};
console.log(product); //{price: 33, quantity: 30}

var product = {
  price: 10,
  quantity: 20,
  "foo bar"() {
    return this.price * this.quantity;
  }
}
console.log(product["foo bar"]()); //200


var myName = "foobar"
var product = {
  [myName]: price
}
console.log(product);// {foobar: 33}
