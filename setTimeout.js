// /*setTimeout is one of the advantage or usage of closures*/

// /*setTimeout() is used to delay the execution of the passed function by a specified amount of time.*/

// // Example 1:

// console.log("Example 1");

// function a(){
//     var b = 10;
//     setTimeout(function(){
//         console.log(b);
//     },1000);
// console.log("Hello JavaScript");
// }

// a();

// //o/p: what do you think output will be , output will be something like wait for 4 secs and print b and 
// //then console hello javascript ? Absolutely no , javascript will not wait for anything
// //setTimeout is a function call (); which contains callback function , setTimeout parks the 
// //inner function somewhere and attaches its timer to it , mean while it will cross the other lines 
// //and execute 

// //so Output : Hello Javascript , 10

// // Example 2 :

// console.log("Example 2");

// console.log("print 1 after 1 sec , print 2 after 2 sec , print 3 after3 sec etc..s");

// function c(){
//     for(var i = 1 ; i<=5 ; i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }
// }

// c();

// //Output : This is what we do right :) , check the output once it will be something like this
// // 6 6 6 6 6  :) shocked ? i will tell you the reason function inside the setTimeout forms a 
// //closure with function c  , so that function holds the reference of i along with it , 
// // but as you can see i is keep on increasing for one iteration one setTimeout wil be set aside
// //along with its timer like we have 5 timers , final i will be incremented value that is 6 
// //since it is var its a global variable so it will print the final value of i .

// //Example 2 : Lets Fix the above case

// console.log("Example 2 Fix");

// //i is getting incremented and getting refered the same variable that is var i variable, 
// //lets take a let :) , which is not a global scope , which is a block scope , everytime 
// //it comes to for loop , i will be a new variable with the incremented value something like this

// function e(){
//     for(let f = 1 ; f<=5 ; f++){ // f = 1 , f= 2 , f= 3 , f= 4, f= 5  f is restricted to block
//         setTimeout(function() {
//             console.log(f);
//         },f*1000);
//     }
// }

// e();

// //Eample 2 - Fix with Var

// console.log("Example - Fix with Var");

// function g(){
//     for ( var j = 1 ; j <= 5 ; j++){
//         function close(j){
//         setTimeout(function(){
//             console.log(j);
//         },j*1000)
//     }
//     close(j);
//     }
// }

// g();

// //output : make it to work with var is form a closure and send reference evertime for each
// //iteration so that function inside can form a closure with close function which contains the 
// //latest reference of the variable

// //Example 3 : 

console.log("Trust Issues with setTimeout");

console.log("start");
setTimeout(function cb(){
    console.log("Callback Function");
},5000);
console.log("End");

//make to wait the program for 10 sec 

let startTime = new Date().getTime();
let endTime = startTime;
while(endTime < startTime + 10000){
    endTime = new Date().getTime();
}

console.log("While loop completed");