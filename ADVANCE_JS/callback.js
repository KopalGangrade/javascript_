
// Async js Programming

// CallBacks , Promise , Async & Await

// const datas=[{
//     name: "kopal",
//     id: 231,
// },
// {
//     name: "arti",
//     id: 233,
// }]


// function getDatas(){
//     setTimeout(()=>{
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output
//     },1000);
// }

// getDatas();



// Callback  -> is used set function in order.

// 1. Register
// 2. Send . welcome . Email
// 3. Login 
// 4. Get.user . data
// 5. Display . user . data



function wait(){
    let ms = 3000 + new Date().getTime();
    while(new Date()<ms){

    }
}

// function sen(){
//     setTimeout(()=>{
//         console.log('sedtd');
//     },3000);
// }

function register(callback){
    setTimeout(()=>{
        console.log('register end');
        callback();
    },1000);
    

}

function sendmail(callback){
    setTimeout(()=>{
        console.log('Email end');
        callback();
    },3000);
    
}

function login(callback){
    setTimeout(()=>{
        console.log('login end');
        callback();
    },1000);
}

function getuserdata(callback){
    setTimeout(()=>{
        console.log('Got user data');
        callback();
    },1000);
}

function display(){

    setTimeout(()=>{
        console.log('user data display');
    })
    
}


// callback hell

register(function(){
    sendmail(function(){
        login(function() {
            getuserdata(function(){
                display(); 
            });
        });
    });
});




