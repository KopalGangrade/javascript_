// How to get first N number of elements from an array


// Using the slice() Method
// Using a for loop
// Using the splice() Method
// Using the filter() Method


// 1. Using the slice() Method

const arr=[1,2,3,4,5,6,7,8];

// d=arr.slice(3,6);
// console.log(d);



// 2. Using the splice() Method
// Syntax  => array.splice(start,deletCount)

// m=arr.splice(2);    // if i will store arr in a variable it will give me a deleted values.
// console.log(m); //[ 3, 4, 5, 6, 7 ] 



// arr.splice(4);   // if i will not store arr in variable it will show indexing values.
// console.log(arr); 



//3.  Using the filter() Method

const arr7 = [1,2,3,4,5,6];
const n = 4;
  
const newArray = arr7.filter((element, index) => index < n);
console.log(newArray);



//5. using loop

const result=[];
// const n=3
// for (let i=0;i<5;i++){
    // console.log(i);
    // result.push(arr[i]);

// }
// console.log(result);