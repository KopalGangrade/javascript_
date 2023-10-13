// HIGHER ORDER ARRAY METHOD

// Map() -> Create a new array by performing some operation on each array element.

arr=[1,2,3,4,5,6,7]
// let a=arr.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value + 1
// })


const num=[1,2,3,4,5,6];

// const newNum=num.map( (n) => n + 10)

const newNum=num
            .map((n)=>n*10)
            .map((n)=>n+1)
            .filter((n)=>n>=20)
// console.log(newNum);




// filter => filters an array with values that passes a test creates a new array.
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.


// syntax=> array.filter(function(currentValue, index, arr), thisValue)

arr2=[2,3,4,5,6,7];

// ex 1
// a2=arr2.filter((value)=>{
//     return value<4
// })
// console.log(a2);


// ex 2
// const myNum=[1,2,3,4,5,6,7,8];
// const mt=myNum.filter((value)=> value<6);
// console.log(mt);


// ex3    




// reduce() ->
// The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

// arr4=[1,4,7,9,3,2,9];
// arr4.reduce((n)=>{

// })

let data=[2,2,3,4,5];
// let a=data.map((num)=> num*2);
// console.log(a);

let b=data.reduce((n,v)=> console.log(n,v),1); // final value
console.log(b);
// n=v*n


const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
// console.log(fruits);



const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.find("Orange"));

var i=fruits1.find((number)=> number == "kiwi");
console.log(i);

var datavalue=[1,2,3,4,5]

var v=datavalue.find(function(value){
    return value==15
})
console.log(v);




// console.log(i);







