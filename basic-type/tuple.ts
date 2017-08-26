// Tuple types allow you to express an array where the type of a fixed number
// elements is known, but need not be the same.

// Declare a tuple type
let x: [string, number];
// initiliaze it
x = ["Hello", 1];

// x = [10, "hello"]; // ERROR

console.log(x[0]);
console.log(x[1]);

// When accessing an element with a known index, the correct type is retrieved
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // ERROR

// When accessing an element outside the set of known indices, a union type is
// used instead.
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(x[3].toString()); // OK, 'string' and 'number' noth have 'toString'

// x[6] = true; // ERROR: 'boolean' isn't 'string | number'

// NOTE: Union types are an advanced topic that will be covered in a later chapter.
