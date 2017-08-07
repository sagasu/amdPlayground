'use strict';
var getProduct = function(productId = 100){
  console.log(productId);
}
getProduct(); // 100

var getProduct = function(productId = 100, type = 'software'){
  console.log(productId + ', ' + type);
}
getProduct(undefined, 'hardware'); // 100, hardware   -- it is because we passed undefined
getProduct(null, 'hardware'); // null, hardware   -- null as always is treated differently ;)

var baseTax = 10;
//this is madnes, you have access to closure variables, and even variables that are also default parameters, or normal parameters of this function! price doesn't have to have default for it to work!
var getTotal = function(price = 10, tax = price * baseTax){
  console.log(price*tax); // 1000
}
getTotal();

var getNumber = () => 10;
//you have full access to closure, so functions, and arrow functions work
var getTotal = function(price, tax = price * getNumber()){
  console.log(price*tax); // 1000
}
getTotal(10);
