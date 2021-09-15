// Clousures are nothing but the child component forms the lexical scope and the reference of its 
// parents scope


// Example 1 : 
console.log("Example 1");

function x(){
    var a = 100;
   return  function y(){
        console.log(a);
    }
}

var z = x();
console.log(z);

/*output : 

Example 1
Clousers.js:16 ƒ y(){
        console.log(a);
    }*/

//Example 2 : 

console.log("Example 2");

function v () {
    var a = 10 ; 
    function p(){
        console.log(a);
    }
    return p;
}

var h = v();
console.log(h);

/*output : 

Example 2
Clousers.js:38 ƒ p(){
        console.log(a);
    }*/


// Example 3

console.log("Example 3");

function j(){
    var u = 50 ;
    function i(){
        console.log(u);
    }
    return i;
}

var o = j(); // this will give the output var o = fucntion i(){console.log(u);} , Now Call o();
console.log(o);

o(); // in o we have i function , j function is poped out the scope once it returns i , now what will be the output

/*output : 50 
 because even though we dont have j funtion not in the scope , child function i remembers the scope
 of the parent scope and its reference
*/

// Example 4 : 

console.log("Example 4");

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++; //2
    return checkNumber; // o/p : return function checkNumber() { console.log(num);}
  }
  
  var number = numberGenerator(); // o/p : var number = function checkNumber() { console.log(num);}
  number(); //o/p : 2

  /*output: 2 checkNumber forms a closure with numberGenerator with its reference variables as well*/

//   Example 5 : 

console.log("Example 5");

  function sayHello() {
    var say = function() { console.log(hello); }
    // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    return say; // o/p : return function() { console.log(hello); }
  }
  var sayHelloClosure = sayHello(); //o/p : var sayHelloClosure = function() { console.log(hello); }
  sayHelloClosure(); //o/p : Hello, world!

  /*output : function() { console.log(hello); } forms a closure with sayHello with its reference variables as well*/


  //Example 6 :

  console.log("Example 6");

  var s = 10;
function foo(k) { //foo(5);
  var q = 20;

  function bar(c) {
    var d = 30;
    return boop(s + k + q + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar; // return function bar(c){var d = 30 ; return boop(s+k+q+c+d);}
}

var moar = foo(5); // var moar = function bar(c){var d = 30 ; return boop(s+k+q+c+d);}
var hold = moar(15); //o/p : function bar (15) {var d = 30 ; return boop(10+5+20+15+30)} , function boop(85){ return 85 * -1 })
console.log(hold);



