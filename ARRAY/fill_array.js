// How to fill an array with given value in JavaScript ?

// 1. using fill method
//2. using for loop
//3. Array push()
//4. spread operator
//5. using the Array.from()




// 1. using fill method
// The Array.fill() method is used to fill an array with a specified value for a specified number of tiemes.

// Syntex

// Array_name.fill(value,start,end)

// let arr=new Array(10);
let arr1=[1,2,3,4,5,6,7,8,9]
// arr1.fill(5,3,7);
// console.log(arr1);



//2. using for loop

// let myArray = new Array(5);
// for (let i = 0; i < myArray.length; i++) {
// 	myArray[i] = "Hello";

// }
// console.log(myArray);

//3. Array push()

let arr2=[];
for(let i=0;i<10;i++){
    arr2.push(0);
}
// console.log(arr2);





//4. spread operator

let arr3 = new Array(7);
myarr = [...Array(7)].map(()=>'hello');
console.log(myarr);




// 5. using Array.from()

let arr6=Array.from({length: 5},()=>0);
console.log(arr.length);
console.log(arr);