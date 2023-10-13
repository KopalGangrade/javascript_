// How do I check if an Array includes a value in JavaScript?

// we are going to learn how to check if a value is present in an array or not. To do so we will require the array to search in and the target element whose presence has to be checked. 



// Linear Search Algorithm (Naive approach)

// time complexity = o(n)


let number=[1,2,3,4,5,6,7,8,9];
function check(num){
    for (let i=0;i<number.length;i++){
        if (number[i]==num){
            let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        }
    }

    return num + " is not present in the arra";
}
// console.log(check(18));



// 2.  using indexOf()

// Arr=[1,2,3,4,5,6];
// m=Arr.indexOf(5);
// console.log(m);


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let element = 41;
// if (num.indexOf(element) > 0)
//     console.log(element + " is present.");
// else
//     console.log(element + " is not present.");





// 3. Binary search

// The Binary search algorithm works only on sorted arrays and keeps dividing the array into 2 equal halves and works recursively.


// function bsearch(arr, l, r, x) {
//     if (r >= l) {
//         let mid = l + Math.floor((r - l) / 2);
 
//         if (arr[mid] == x)
//             return mid;
 
//         if (arr[mid] > x)
//             return bsearch(arr, l, mid - 1, x);
 
//         return bsearch(arr, mid + 1, r, x);
//     }
 
//     return -1;
 
// }
 
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// // To check if 85 is present or not
// console.log("Is 85 present? " + (bsearch(num, 0, num.length, 85) != -1));
 
// // To check if 1 is present or not
// console.log("Is 1 present? " + (bsearch(num, 0, num.length, 1) != -1));




// 4. filter() Method:


// The filter() method is used with the array to pull out the desired element from the array. We first create the array and use the filter method on an array with a method that checks element is present or not. If the element is present in the array it returns an array with an element else returns an empty array.



let num = [12, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function check(element) {
 
//     let ans = num.filter(x => x == element);
//     if (ans.length)
//         return element + " is present in the array.";
 
//     return element + " is not present in the array.";
// }
// console.log(check(81));
