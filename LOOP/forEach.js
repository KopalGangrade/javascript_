
// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// Syntax
// array.forEach(function(currentValue, index, arr), thisValue)





const myNum=[1,2,3,4,5,6,7,8];
const newNum=[];

myNum.forEach((num)=>{
    if(num>4){
        newNum.push(num);
    }
})
console.log(newNum);

