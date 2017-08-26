// declaring boolean
var isDone = false;
// declaring number (all numbers in TypeScript is floating point values)
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// declaring string with :string
// either with single-quote ' or double-quote "
var color = "blue";
color = "red";
// You can also use template strings, which can span multiple lines
// and have embedded expressions. These strings are surrounded by the
// backtick/backquote (`) character, and embedded expressions are of
// the form ${ expr. }
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// sentence is equivalent to sentence2 below
var sentence2 = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
console.log(sentence2);
// declare array using [] or Array<element-type>
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple types allow you to express an array where the type of a fixed
// number of elements is known, but need not be the same. For example,
// you may want to represent a value as a pair of string and a number
var x; // declare a Tuple
x = ["hello", 10]; // initialize it
// x = [10, "hello"]; // error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // error
