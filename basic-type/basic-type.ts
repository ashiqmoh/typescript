// declaring boolean
let isDone: boolean = false;

// declaring number (all numbers in TypeScript is floating point values)
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// declaring string with :string
// either with single-quote ' or double-quote "
let color: string = "blue";
color = "red";

// You can also use template strings, which can span multiple lines
// and have embedded expressions. These strings are surrounded by the
// backtick/backquote (`) character, and embedded expressions are of
// the form ${ expr. }
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.


I'll be ${age + 1} years old next month.`;
console.log(sentence);

// sentence is equivalent to sentence2 below
let sentence2:string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
console.log(sentence2);

// declare array using [] or Array<element-type>
let list: number[] = [1,2,3];

let list2: Array<number> = [1,2,3];


// Tuple types allow you to express an array where the type of a fixed
// number of elements is known, but need not be the same. For example,
// you may want to represent a value as a pair of string and a number

let x : [string, number];  // declare a Tuple
x = ["hello", 10];   // initialize it
// x = [10, "hello"]; // error


console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // error
