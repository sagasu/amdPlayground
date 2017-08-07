'use strict';
var categories = ['foo', 'bar', 'buzz'];
for (var item of categories) {
  console.log(item); //foo, bar, buzz
}

var categories = [,,];
for (var item of categories) {
  console.log(item); //undefined, undefined    --- only 2 undefined, because in js array ends with undefined
}

for (var item of "abcd") {
  console.log(item); //a,b,c,d
}
