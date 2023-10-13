// prettier extainsion
// using terminal - node + foldername + file name +.js
// dynamic type js
console.log("hello world");

const accountid=1200;
let email="kopalgangrade@gmail.com";
var password="2468@sf"
city="Pune"
let state; // if you will not assign value and print so ans will be undefined

email="kopal2920@gmail.com"

console.log(accountid);

console.table([accountid,email,password,city,state]);



// object
// console.log(typeof (null));  // object (null is an object)
console.log(typeof (accountid));
console.log(typeof email);
console.log(typeof undefined);




// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

// let name = "John";

// // embed a variable
// alert( `Hello, ${name}!` ); // Hello, John!

// // embed an expression
// alert( `the result is ${1 + 2}` ); // the result is 3