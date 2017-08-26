// A helpful addition to the standard set of datatypes from JavaScript
// is the enum. As in language like C#, an enum is a way of giving more
// friendly names to sets of numeric values.

enum Color1 {Red, Green, Blue}
let c1Red: Color1 = Color1.Red;
let c1Green: Color1 = Color1.Green;
let c1Blue: Color1 = Color1.Blue;

console.log(c1Red); // 0
console.log(c1Green); // 1
console.log(c1Blue); // 2

// By default, enums begin numbering their members starting with at 0.
// You can change this by manually setting the value of one of its
// members. For example, we can start the previous example at 1
// instead of 0.
enum Color2 {Red = 1, Green, Blue};
let c2Red: Color2 = Color2.Red;
let c2Green: Color2 = Color2.Green;
let c2Blue: Color2 = Color2.Blue;

console.log(c2Red); // 1
console.log(c2Green); // 2
console.log(c2Blue); // 3


// Set all values manually
enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3Red: Color3 = Color3.Red;
let c3Green: Color3 = Color3.Green;
let c3Blue: Color3 = Color3.Blue;

console.log(c3Red); // 1
console.log(c3Green); // 2
console.log(c3Blue); // 4


// a handy feature of enums is that you can also go from numeric value
// to the name of that value in the enum. For example, if we had the
// value 2 but were not sure what that mapped to in the coloe enum
// above, we could look up the corresponding name.
enum Color4 {Red = 1, Green, Blue};
let colorName: string = Color4[2];
