// Function -> Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// alert(message), prompt(message, default) and confirm(question)

// Function Declaration

// function showMessage(){
//     alert("Hello World!");
// }

// function name(parameter1,parameter2,parameter){
    //body           // can declaration of more then 1
// }


// Calling function

// function msg(){
//     alert('hello world!');
// }
// msg();
// msg();


// LOCAL VARIABLES

// function msg1(){
//     let msg="hello everyone";
//     alert(msg);
// }
// msg1(); // hello everyone
// alert(msg);     // <--Error ! The variable is local to the function


//Outer variables


// let name='john';
// function msg34(){
//     let msg='hello'+name1;
//     alert(msg);
// }
// msg(); // hello , john



// The function has full access to the outer variable. It can modify it as well.


let userName = 'John';
