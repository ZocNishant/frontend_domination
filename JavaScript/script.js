// js the language
// basics
// inbuilt features

// console.log("Yes Pasa I am back and will stick with you.");
// console.warn("Dude k vo");
// console.error("You got an error dude.");

// alert("Nepal is the best country.");
// prompt("What up dude?");

// variables constants
// let a = 12;
// const pi = 3.14;

// compilers and interoreters

// window
// type

// primitive and reference data types
// reference {} [] ()

//conditionals
// let age = 24;

// if (age > 24) {
//   console.log("Pasa Thulo Vayexa");
// }

// truthy and falsy values
// false, NaN, 0, "", ', document.all

// if..else
// let a = 22;

// if (a > 22) {
//   console.log("pasa");
// } else {
//   console.log("Another Pasa");
// }

// else..if

// if (a > 22) {
//   console.log("Pasa");
// } else if (age < 22) {
//   console.log("Pasa");
// } else {
//   console.log("Pasa Square.");
// }

// loops
// for , while, foreach

// for(start; end; change){}
// for (let num = 5; num <= 50; num++) {
//   console.log(`Pasa, ${num}.`);
// }

// while loop

// start;

// while(end){
//     change;
// }

// let num = 10;

// while (num <= 100) {
//   console.log(`${num}`);
//   num++;
// }

// foreach

// functions

// const pasa = () => {};

// es5 -> fucntion statements, function expression and anonymous fucntion
// es6 -> basic fat arrow, fat arrow with one parameter and fat arrow with implicit return

// function abcd(~param){}

// function statement
// function fnName(){}

// function expression
// var abac = function (){}

// anonymous function
// function () {}

// fat arrow
// const abce = () => {}

// fat arrow with one parameter
// const abce = (param) => {}

// fat arrow with implicit return
// const abce = () => literally anything written here will be returned

// return
// function pasa() {
//   return 12;
// }

// console.log(pasa());

// undefined, not defined and null

// let a; undefined
// console.log(name) // not defined cuz "name" is not defined anywhere
// null is received ehrn something is not found

// arrays
// let myName = ["Nishant", "Pasa", "Topre", "Shante", "Gilu"];
// document.writeln(myName[0]);

// loop with array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach(function (pasa) {
//   console.log(pasa);
// });

// objects

// let obj = {
//   name: "Nishant",
//   age: 22,
//   pasa: true,
// };

// console.log(obj.name);

// synchronous and asynchronous JS

// this call apply bind

// global
// console.log(this);

// // funtion
// function pasa() {
//   console.log(this);
// }

// pasa();

//method
// let obj = {
//   name: function () {
//     console.log(this);
//   },
//   age: 25,
//   email: "pasa@gmail.com",
// };

// obj.name();

// function inside method (es5)
// let obj2 = {
//   syname: function () {
//     function pasaji() {
//       console.log(this);
//     }
//     pasaji();
//   },
// };

// obj2.syname();

// function inside method (es6)

// const obj3 = {
//   synaam: function () {
//     const paaa = () => {
//       console.log(this);
//     };
//     paaa();
//   },
//   age: 26,
// };

// obj3.synaam();

//  Constructor Function

// function add() {
//   console.log(this);
// }

// new add();

// Event Listener

// document.querySelector("button").addEventListener("click", () => {
//   console.log(this);
// });

// call, apply and bind

// function passsa(a, b, c) {
//   console.log(this);
// }

// const nepal = {
//   name: "Nepal",
//   isHere: "Asia",
//   doYouLive: true,
// };

// passsa.call(nepal, 1, 2, 3); // call
// passsa.apply(nepal, [4, 5, 6]); // apply

// const me = {
//   name: "Nishant",
//   age: 26,
// };

// function defg() {
//   console.log(this);
// }

// const paxiChalauni = defg.bind(me);

// paxiChalauni();

// Prototypal Inheritance

// function makeHuman(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const humanOne = new makeHuman("Nishant", "Joshi");

// function myFullName(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const fullName = new myFullName("Nishant", "Joshi");

// prototypes
// prototypal inheritance

// function mySathiHaru(fname, lname) {
//   this.fname = fname;
//   this.lname = lname;
// }

// mySathiHaru.prototype.printName = function () {
//   console.log(this.name);
// };

// const sathi1 = new mySathiHaru("Pasa", "Pandey");
// const sathi2 = new mySathiHaru("Dude", "Sup");
// const sathi3 = new mySathiHaru("Yoo!", "Bitch.");

// closures
// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// Event Delegation
// let parent = document.querySelector(".parent");

// parent.addEventListener("click", function (event) {
//   console.log(event.clientX, event.clientY, event.target);
// });

// Higher Order Functions

// function abcd(param) {}

// abcd(function () {});

// try ..... catch

// function divide(a, b) {
//   try {
//     if (b == 0) {
//       throw Error("Something is wrong.");
//     }
//     console.log(a / b);
//   } catch (err) {
//     console.log(err);
//   }
// }

// divide(12, 0);

// Custom Events

// HOW

const evt = new Event("pasa");

document.querySelector("#play").addEventListener("pasa", function () {
  console.log("pasa event vayo.");
});

document.querySelector("#play").dispatchEvent(evt);

// asynchronous

// es6 climax

// questions
