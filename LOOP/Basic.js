const prompt = require("prompt-sync")();

// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.

// To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

// If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

// break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.




// For loop

// let i=0;
// for (i=0;i<6;i++){
//     console.log(i);
// }


let name1=["kopal","nikita","neha","seema"]
// for(let i=0; i<name1.length; i++){
//     const element=name1[i]
//     // console.log(name1);
//     console.log(name1[i]);
// }

// name1.forEach(function f(element){
//     console.log("hello,"+element);
// })


// for (element of name1){
//     console.log('hello '+element);
// }
    


// FOR IN OBJECT 
let employee={
    name: "kopal",
    salary: "500000",
    job: "mumbai"
}


// Use this loop to itrate over object in javascript

// for (key in employee){
//     console.log(`the ${key} of employee is ${employee[key]}`);
// }


// while loop in js

// let i=0;
// while (i<=35) {
//     console.log(i);
//     i++;
// }


// do while 

// if condiction is false but it will print atlesat one Time.
// let i=9;
// do{
//     console.log(i);
//     i++;
// }while(i<=6);



// for (i=0; i<=10;i++){
//     console.log(i);
// }


// let i=1;
// while (i<=5){
//     let j=1;
//     let pattern =" "
//     while (j<=i){
//         pattern+= (i);
//         j++;
//     }
//     console.log(pattern);
//     i++;
// }



// let i=1;
// while (i<=5){
//     let j=1;
//     let pattern =" "
//     while (j<=i){
//         pattern+= (i);
//         j++;
//     }
//     document.write(pattern);
//     i++;
// }




// let i=1
// while (i<=5){
//     console.log("*".repeat(i));
//     i++
// }



// let i=1;
// while (i<=6){
//     let j= 1;
//     let str="";
//     console.log("*".repeat(i)+str.repeat(j));
//     i++;
// }


// let n=prompt("enter number");
// for(let i=1;i<=n;i++){
//     console.log(" ".repeat(n-i)+"*".repeat(i));
// }

//     *
//    **
//   ***
//  ****
// *****



// Break in loop

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// console.log( 'Sum: ' + sum );


// let a=prompt('enter number:');
// while (a>=5){
//     console.log('true');
//     if (a==12) break;
//     a++;
// }


// Continue in loop

// for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    // if (i % 2 == 0) continue;
  
    // console.log(i); // 1, then 3, 5, 7, 9
//   }


//   for (let i = 0; i < 10; i++) {

//     if (i % 2)
//       console.log( i );
//     }
  
//   }


for(let i=0 ;i<=10 ; i++){
    if (i > 5) {
        console.log(i);
    } 
    else {
        continue;
    }
}


// Continue does not work with the ternary oprator

// for(let i=0 ;i<=10 ; i++){
//     (i > 5) ? console.log(i) : continue; // 
    
// }





// A label is an identifier with a colon before a loop:

// labelName: for (...) {
//     ...
//   }






outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
console.log('done!');  


