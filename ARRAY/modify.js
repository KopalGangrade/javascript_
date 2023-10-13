// How to modify an object’s property in an array of objects in JavaScript ?


// Using Array.map() method
// Using for-of loop
// Using Array.map() with spread operator
// Using forEach() method
// Using the find() method and destructuring.


// 1. Using Array.map() method

// Using the map() method to create a new array by transforming each element of the original array based on a specified function.

let employee=[
    {
        employee_id:1,
        employee_name:"kopal"
    },
    {
        employee_id:2,
        employee_name:"ram"
    },
    {
        employee_id:3,
        employee_name:"siya"
    },
    {
        employee_id:4,
        employee_name:"jyoti"
    },
];

// const modify_employee=employee.map((obj)=> {
//     if (obj.employee_id===2){
//         return {employee_name:"suman"};
//     }
//     return obj;
// });
// console.log(modify_employee);



// Using for-of loop

// for (let obj of employee){
//     if (obj.employee_id===2){
//         obj.employee_name="riya";
//     }
// }
// console.log(employee);


// Using Array.map() with spread operator

// const Modify = employee.map((obj1)=>
// {
//     if (obj1.employee_id===2){
//         return{
//             ...obj1,employee_name:"yesh",
//         };
//     }
//     return obj1;
// })
// console.log(employee);


// Using forEach() method

// const store=employee.forEach(element => {
//     if (element.employee_id===4){
//         element.employee_name="rimmi";
//     }
// });
// console.log(employee);


const modify = (element, targetId, newProperty) => {
    element.forEach(obj => {
        if (obj.employee_id === targetId) {
            obj.employee_name = newProperty;
        }
    });
};
 
modifyProperty(employee, 2, "Ankit");
// console.log(employee);



// Using the find() method and destructuring.

prac