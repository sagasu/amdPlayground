'use strict'
console.log(productId); //undefined will be displayed
var productId = 12;


//console.log(productId2); //reference error
let productId2 = 12;

let productId3;
console.log(productId3); //undefined

{
  let productId2 = 33;
}
console.log(productId2); //12


{
  let productId4 = 33;
}
//console.log(productId4); //reference error

function updateId(){
  productId5 = 12;
}
let productId5 = 1;
updateId();
console.log(productId5); //12,


let productId6 = 3;
for (let productId6 = 0; productId6 < 10; productId6++) {
  //this let is scoped to a for loop, that's why it is not reseting value to 0
}
console.log(productId6); //3
