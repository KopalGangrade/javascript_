// Using push() Method
// Using concat() Method
// Using Spread Operator




// 1. Using push() Method
// we also use the spread operator(…) which iterates over each of the values.

const arr=[1,2,3,4];
const arr1=[5,6,7,8];
// arr.push(...arr1);
// console.log(arr);



// 2. Using concat() Method

// store=arr.concat(arr1)
// console.log(store);


// Using Spread Operator

const store1=[...arr,...arr1];
console.log(store1);