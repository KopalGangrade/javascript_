// For Loop

// let i=1;
// for (let i=1;i<=10;i++){
//     console.log(i);
// }


// While loop

// let i=1;

// while (i<=10){
//     console.log(i);
//     i=i+2;
// }


// Do While Loop


// let i=4;
// do{
//     console.log(i);
//     i++;
// }while(i<=3)



// for in  => used in array and object indexing   
// but for in is not reliable for Array..
let b=[1,2,9,7,5]
// for (i in b){
//     console.log(b[i]);
// }


// for of loop

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// for (i of b){
//     console.log(i);
// }




// Array.forEach()

// The forEach() method calls a function (a callback function) once for each array element.

// Example

// const numbers = [45, 4, 9, 16, 25];

// numbers.forEach((num)=>{
//     console.log(num);
// });



// JavaScript map Loop

// A map loop is a method on arrays that creates a new array by executing a function on each element in the array.

let arr=[1,2,3,4,5];
// let newarr=arr.map((value)=> value*2);
// console.log(newarr);

let newArr=arr.map((n)=>{
    return n*2;
})
console.log(newArr);



