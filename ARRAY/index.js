// Using indexOf()
// Using findIndex()
// Using for loop


let arr=['kopal','sita','riya','neha'];
// b=arr.indexOf('riya');
// console.log(b);

// if value will not be avilable in the array output will be -1





// Syntax: Here is the syntax for using the findIndex() method:

// array.findIndex(
//     callback(currentValue[, index[, array]])[, 
//     thisArg]
// )
// Parameters:

// callback: The function that tests each element in the array. It requires three arguments.
// array (optional): The array on which the findIndex() method was called.
// currentValue: The current array element being processed.
// index (optional): The index of the current array element to be handled.
// thisArgument (optional): An object to which the this keyword in the callback function can refer.
// The callback function should return true if the current element passes the test; otherwise, it should return false.

c=arr.findIndex(arr=> arr=='riya')
// console.log(c);


// for (let i=0;i<=arr.length;i++){
//     console.log(i);
// }

for (let i=0;i<=arr.length;i++){
        if (arr[i]==='riya')
            break;
    }
    console.log(arr[i]);

