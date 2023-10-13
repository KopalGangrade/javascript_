// 1. call stack -> checks first that console is Syncronous or Asyncronous 
//   if syncronous, it will excute
    //  but if Asyncronous, it will send console to Web API 
// 2. Web API's
// 3. callback queue 

// Asynchronous Process ->
//  1. go to call Stack (checks console is Synchronous or Asynchronous, if Synchronous, runs instantly but if it is Asynchronous itwill process further.)




console.log('hello');

// function hello(){
//     console.log('this is js');
// }

// setTimeout (hello, 8000);
// console.log('good morning');



// Anonmous function


// setTimeout (function(){
//     console.log('i am kopal');
// }, 8000);


// setTimeout (function(){
//     console.log('i am arti');
// }, 3000);



console.log('Start');

function wait(){
    let ms = 7000 + new Date().getTime();
    while(new Date()<ms){

    }
}

setTimeout(() => {
    console.log('i am kopal');
}, 2000)


wait()

console.log('end');




