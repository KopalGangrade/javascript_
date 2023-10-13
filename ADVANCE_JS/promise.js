function wait(){
    let ms = 3000 + new Date().getTime();
    while(new Date()<ms){

    }
}

function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('register end');
            resolve();
        },1000);
    });
}

function sendmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Email end');
            resolve();
        },3000);
    })
    
    
}

function login(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('login end');
            resolve('won');
        },1000);
    })
    
}

// function getuserdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return reject('Error While getuser data');
//             console.log('Got user data');
            
//         },1000);
//     })
// }

function display(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('user data display');
            resolve();
        },1000)
    })
    
    
}


// callback hell

// register(function(){
//     sendmail(function(){
//         login(function() {
//             getuserdata(function(){
//                 display(); 
//             });
//         });
//     });
// });



// promise  using then keyword
// register()
// .then(sendmail)
// .then(login)
// .then(getuserdata)
// .then(display)
// .catch((error)=>{
//     console.log('Error:',error);
// });




// Promise using Async / Await 

async function authenticate(){

    try{

        await register();
        await sendmail();
        const msg= await login();
        await display();
        console.log(msg);

    } catch(err){
        console.log(err);
        // throw new Error();
    }

}


//     try{

//         await register();
//         await sendmail();
//         await login();
//         // await getuserdata();
//         await display();

//     } catch(err){
//         console.log(err);
//         // throw new Error();
//     }

// }


// authenticate();

authenticate().then(()=>{
    console.log('All set!');
})
// .catch((err)=>{
//     console.log(err);
// })
