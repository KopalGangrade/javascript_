
// Closures

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


// let msg="Good Morning";
// function hello(){
//     msg="Good Evening";
//     console.log('hello '+msg);
// }

// hello()





// let msg="Good Morning";
// function hello(){
//     msg="Good Evening";
//     {
//         let msg="Good Afternoon";
//         console.log('hello '+msg);
//     }
//     // console.log(msg);
//     let c=function hello2(){
//         console.log('hello '+msg);
//     }
//     msg="kopal" // if you will change data so output will also change.
//     return c;
// }

// hello()
// c=hello()
// c()



// function returnFunc(){
//     const x=()=>{
//         let a=1
//         console.log(a);
//         const y=() =>{
//             let a=2
//             console.log(a);
//             const z=() =>{
//                 let a=3
//                 console.log(a);
//             }
//             z()
//         }
//         a=999
//         y()
//     }
//     return x
// }

// let a=returnFunc()
// a()



// let sum=function(a){
//     console.log('live '+a);
//     let c=4;
//     return function(b) {
//         return (a+b+c);
//     }
// }

// let store=sum(2);
// console.log(store(5));



let sum=function(a,b,c){
    return{
        getsumtwo:function(){
            return a+b;
        },
        getsumthree:function(){
            return a+b+c;
        }
    }
}
let store=sum(3,5,7);
console.log(store.getsumtwo());

console.log(store.getsumthree());

let store1=sum(2,3,6);