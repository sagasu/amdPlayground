'use strict';
let salary = [123,234,534];
let [low, medium, high] = salary;
console.log(medium); //234

let [a, , b] = salary;
console.log(b); //234

let [aa, ...tail] = salary;
console.log(tail); //[234,534]

let [aaa, bbb, ccc=200] = salary;
console.log(ccc); //200

let o = {
  foo: 'foo',
  mbuzz: 'mbuzza'
}
let {mbuzz, buf} = o;
console.log(mbuzz); //mbuzza

let {abuzz, buff} = o;
console.log(abuzz); //undefined

let {mbuzz: bbuzz, foo: afoo} = o;
console.log(bbuzz); //mbuzza
