// CALL_APPLY_BIND


// problem statement

// let user={
//     name1:"kopal",
//     age:22,
//     designation:"Software Engineer",
//     printDetails:function(){
//         console.log(this.age);
//     }
// }
// user.printDetails()

// let user1={
//     name1:"suman",
//     age:21,
//     designation:"Software Engineer",
// }

// user.printDetails.call(user1);




// let user={
//     name1:"kopal",
//     age:22,
//     designation:"Software Engineer",
// }

// let printDetails=function(){
//     console.log(this.age);
// }


// printDetails.call(user);

// let user1={
//     name1:"suman",
//     age:21,
//     designation:"Software Engineer",
// }

// printDetails.call(user1);



let user={
    name1:"kopal",
    age:22,
    designation:"Software Engineer",
}

let printDetails=function(state,country){
    console.log(this.name1+" "+state+" "+country);
}


printDetails.call(user,"mp","delhi");

let user1={
    name1:"suman",
    age:21,
    designation:"Software Engineer",
}


// function borrowing
printDetails.call(user1,"mp","india");


//Apply

printDetails.apply(user1,["mp","india"]); 


//Bind

let newfun=printDetails.bind(user1,"mp","india");
(newfun());





