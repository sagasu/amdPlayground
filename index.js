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

let updateFuncitons = [];
for (var i = 0; i < 10; i++) {
  updateFuncitons.push(function () {return i;});
}
console.log(updateFuncitons[0]()); //10
console.log(updateFuncitons[2]()); //10
console.log(updateFuncitons[9]()); //10

let updateFuncitons2 = [];
for (let ii = 0; ii < 10; ii++) {
  updateFuncitons2.push(function () {return ii;});
}
console.log(updateFuncitons2[0]()); //0
console.log(updateFuncitons2[2]()); //2
console.log(updateFuncitons2[9]()); //9

const myConst = 100;
console.log(myConst);//100

const myConst2;
//console.log(myConst2);//Syntaxt error: unexpected token ;

if(true){
  const myConst = 10; //if I just try to asing - w/o const here it would throw exception
}
console.log(myConst);//100
