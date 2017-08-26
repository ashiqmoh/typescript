// A helpful addition to the standard set of datatypes from JavaScript
// is the enum. As in language like C#, an enum is a way of giving more
// friendly names to sets of numeric values.
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var c1Red = Color1.Red;
var c1Green = Color1.Green;
var c1Blue = Color1.Blue;
console.log(c1Red);
console.log(c1Green);
console.log(c1Blue);
// By default, enums begin numbering their members starting with at 0.
// You can change this by manually setting the value of one of its
// members. For example, we can start the previous example at 1
// instead of 0.
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2Red = Color2.Red;
var c2Green = Color2.Green;
var c2Blue = Color2.Blue;
console.log(c2Red);
console.log(c2Green);
console.log(c2Blue);
