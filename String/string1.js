const prompt = require("prompt-sync")();

let Name=prompt("enter your name: ");

const am= new String('KOPAL-20')
console.log(am[0]);
console.log(am.__proto__);

console.log(am.length);
console.log(am.toLowerCase());
console.log(am.charAt(4));
console.log(am.indexOf('a'));


const newString=am.substring(0,4)
console.log(newString);

const anotherS=am.slice(1,3)
console.log(anotherS);

const newS="   kopalG   "
console.log(newS);
console.log(newS.trim());

const url="https//kopal.com/"
console.log(url.replace(".com","org"))
console.log(url.includes('sundar'));

console.log(am.split('&'));

let name="kopal"
let date="20/05/2000"
let home="khirkiya"
console.log(`My name is ${name}. My date of birth is ${date} , and i am from ${home}`);

d="hello world, this is kopal"
console.log(d.indexOf("is"));

console.log(d.lastIndexOf('is'));



let cat1="minisipy"
// let cat=str.cat1(1,3)

// console.log(cat);