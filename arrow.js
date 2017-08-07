'use strict';
var getPrice = () => 5.99;
console.log(typeof getPrice); //function

var invoice = {
  number: 123,
  process: function () {
    console.log(this); // object{number: 123 ...}
  }
};
invoice.process();


var invoice = {
  number: 123,
  process: () => {
    console.log(this); // window...
  }
};
invoice.process();

var invoice = {
  number: 123,
  process: function() {
    // because we are working in a scope of a funciton, and not window any more
    return () => console.log(this.number); // 123
  }
};
invoice.process()();

var newInvoice = {
  number: 456
}
invoice.process().bind(newInvoice)(); //with arrow function you can not bind into it, because you can not change this
invoice.process().call(newInvoice); //with arrow function you can not bind into it, because you can not change this

console.log(getPrice.hasOwnProperty("prototype"));// again, arrow function doesn't have anything that normal function has, so it lacks basic properties like prototype
