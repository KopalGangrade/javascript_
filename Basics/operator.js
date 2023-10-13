
// The following math operations are supported:

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// console.log("6"+2);      //concinate   62
// console.log(3+"7");      //37
// console.log(3+4+"5");     //75
// console.log("3"+3+7);     //337


console.log("7"-2);   //5
// console.log(6-"3");   //3
// console.log("3"*5);    //15
// console.log("8"/4);



// Unary oprations
// No effect on numbers
let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0



// Name	Sign

// unary plus	+
// unary negation	-
// exponentiation	**
// multiplication	*
// division	/
// addition	+
// subtraction	-
// assignment	=


// also can assign in chain
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4


// note -> using let also can modifications.



//Comparition opretor

// A strict equality operator === checks the equality without type conversion.
// if a and b are of different types, then a === b immediately returns false without an attempt to convert them.





// There is also a “strict non-equality” operator !== analogous to !=.

// The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.



// For a strict equality check ===
// These values are different, because each of them is a different type.

// alert( null === undefined ); // false
// For a non-strict check ==
// There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

// alert( null == undefined ); // true