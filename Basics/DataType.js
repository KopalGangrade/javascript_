"use strict";  //treat all JS code as newer version

// There are 8 basic data types in JavaScript.

// Seven primitive data types:

// 1] number --> for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// 2] bigint   --> for integer numbers of arbitrary length.
// 3] string  --> for strings. A string may have zero or more characters, there’s no separate single-character type.
// 4] boolean --> for true/false.
// 5] null --> for unknown values – a standalone type that has a single value null.(object)
// 6] undefined --> for unassigned values – a standalone type that has a single value undefined.
// 7] symbol -->  for unique identifiers.

// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
// Symbols are often used to add unique property keys to an object



// And one non-primitive data type:
// 8] object --> for more complex data structures.

// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.


// symbol - The symbol type is used to create unique identifiers for objects.
// typeof Math - "object"  (1)

// typeof alert - "function"  (3)

const id = Symbol("123")
const aid = Symbol("123")
console.log(id===aid);
console.log(aid);

// Reference (Non primitive)

//Array , Objects , Functions


const bignumber=134566n
console.log(typeof bignumber);

