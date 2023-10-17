// Fetch() is a method in the browser, threw fetch data can be take from server using HTTP/HTTPS

// only accepts network errors
// syntex 

// fetch() method starts the process of fetching a resource from the network, returning a promise which is fullfilled once the response is aviable. 

fetch('https')
.then((Response)=>{
    console.log('');
})
.catch(function(err){
    console.log('unable to fetch -',err);
})



// fetch('https://api.github.com/users')
// .then(response=> response.json())
// .then(response=>console.log(response))




const formData = new FormData();
formData.append('username','abc');


fetch('https://api.github.com/users')
.then(response=> response.json())
.then(response=>console.log(response))
.catch(err=>console.log('err',err))


fetch('https://api.github.com/users'),{
    method: "post",
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
        'custom': 'hello'
    },
    body:JSON.stringify({name:'coderdost'})
}
.then(response=> response.json())
.then(response=>console.log(response))



fetch('https://api.github.com/users')
.then(response=> response.ok)
.then(response=>console.log(response))
.catch(err=>console.log('err',err);)
