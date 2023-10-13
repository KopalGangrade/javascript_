// Use the keyword class to create a class.

// Always add a method named constructor():

// class ka syntex

Syntax:

// creating a class
// class Name {
//     constructor(var) {
//         this.var = var;
//     }
// }





// object of calss

var c=new Car()
console.log(c);
c.data=1001;
c.name="kopal"
console.log(c);

class student{
    constructor(id, name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    display(){
        console.log(this.name);
    }
}

var s=new student();
console.log(s);

s.id=101;
s.name="sita";
s.age=21;
console.log(s);

var s1=new student(12990,"seema",23)
console.log(s1);
s1.display()  // function declearation