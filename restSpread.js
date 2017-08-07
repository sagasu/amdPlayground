'use strict';

var showCategories = function(productId, ...categories){
  console.log(categories instanceof Array); //true
}
showCategories(1, 'foo', 'bar');


var prices = [12, 20, 233];
var maxPrice = Math.max(...prices);
console.log(maxPrice);

var codeArray = ['A', ...'BCD', "E"];
console.log(codeArray);//[A,B,C,D,E]
