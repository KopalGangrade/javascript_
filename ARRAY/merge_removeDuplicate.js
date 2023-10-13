// Using Spread Operator and Set() Object
// Using concat() Method and Set() Object
// Using concat() Method and Filter() Method

arr=[1,2,3,4,8,5]
arr1=[8,7,6,5,6]


// Using Spread Operator and Set() Object   

// const arr_spread=[...arr, ...arr1];         // add first
// const removeDuplicate=[...new Set(arr_merge)]; // remove duplicate
// console.log(removeDuplicate);



// Using concat() Method and Set() Object

const arr_concat=arr.concat(arr1);
// const removeDuplicat1=[...new Set(arr_concat)];
// console.log(removeDuplicat1);




// Using concat() Method and Filter() Method


// const arr_concat1=arr.concat(arr1);
// const removeDuplicat2=filter(item) => arr1.indexOf(item)<0);
// console.log(removeDuplicat2);


let arr6 = [1, 5, 3];
let arr7 = [4, 5, 6];
let newArr = arr6.concat(arr7.filter((item) => arr1.indexOf(item) < 0));
console.log(newArr);
