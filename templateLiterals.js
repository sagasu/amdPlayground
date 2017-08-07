'use strict';
let invoiceNumber = '123';
console.log(`invoice number ${invoiceNumber}`); //invoice number 123

console.log(`invoice number ${"foo " + invoiceNumber}`); //invoice number foo 123

function processMe(foo){
  console.log(foo); // ["bar", raw: Array(1)]     --- it is interesting that it is an array
}
processMe `bar`;


processMe(`bar ${invoiceNumber}`); //bar 123   ---not it will be showed as a string
