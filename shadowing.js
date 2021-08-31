/*Shadowing and Block Scope*/

/*const { exitCode } = require("process")

Before we study about block scope and shawdoing , a block is not but this ( { })
Where a user can be able to collect multpile statements and put it as a compund statements
and return to javascript where it needs a single statment

for example : 

we can write if(true) console.log("yes i can be written like this") ; this is a single statements
in if , but what if we want to write multpile statments if the conditions statifies so 
we define a block like : 

if ( true ) {
    console.log("first statment");
    console.log("second statment");
    console.log("third statmenet");
    etc...
} 

this is the use of block , */

                        /*************************Examples************************/


// 1. Example with Var : 
console.log("Example with Var");
{
    var a = 10 ;
    var b = 20 ; 
    var c = 30 ;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

// output : 

// 10
// 20
// 30
// 10
// 20
// 30

/*var will be pointing to the global varialbe window , under global scope you ll be able to see this
variable , now for example , see below */

console.log("Shawdowing with Var");
// 2. Example with Var : 

var a = 100 ; 

{
    var a = 10;
    var b = 20;
    var c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);

/*Output : 

10 
20
30
10

what happened here is what we call it as shawdowing , becasue first a = 100 will get assigned
to global variable , block will run there a = 10 , so 10 will get replaced with 100 because we are 
refering to the same variable , so 10 is shawdowing 100*/


console.log("Completed Example with Var");

console.log("Playing with Let and Const");
// 1. Example with let and const: 

{
    let x = 10 ; 
    let y = 10 ;
    let z = 30 ; 
    console.log(x);
    console.log(y);
    console.log(z);
}

// console.log(x);
// console.log(y); disabling this because it will throw error and wil  not run rest of the code
// console.log(z);


/*output : 

10
20
30
Uncaught ReferenceError: x is not defined
    at Shawdowing.js:93

here what happens is , as we already know let and const will get assigned to script scope not global scope , but here when you have let and 
const inside the block that will get assigned to seperate scope called block scope , thats y the output is 10,20,30 inside the block
and z not defined error for the console's outside the block , because for the x, y , z which is outside are not even declared */


// 2. Example with let and const : 

console.log("Block and Script Scope for let and const");

let d  = 40 ;
let e = 50;
let f = 60;

{
    let d = 10;
    let e = 20;
    let f = 30;
    console.log(d);
    console.log(e);
    console.log(f);
}
console.log(d);
console.log(e);
console.log(f);

/*
output : 

10
20
30
40
50
60

the picture of the scope will be something like this 

Block
d: 10
e: 20
f: 30
Script
d: 10
e: 20
f: 30

yes here for the block let and cost , those are stored in block scope , and for the one which is outside the block will be
stored in script scope , so these are 2 different scopes , same with const*/

console.log("Illegal shawdowing - accepted");

var v = 100; 
{
    let v = 30;
    console.log(v);
}

console.log(v); 

// output : 30 100

console.log("Illageal Shawdowing - not accpted");
let w = 100;
{
    var w = 100;
    console.log(w);
}
console.log(w);

// output : Uncaught SyntaxError: Identifier 'w' has already been declared because we cannot have duplicated for let and const, same with const as well




