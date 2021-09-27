/*As i have mentioned in the notes , to make some of the things 
work as asynchronous we use callback functions

    1. Generally javascript is a synchronous and single threaded language , means , it will run one after
    the other and only if one line is completed then it will go to anotehr line 
    
    2. but here , using callbacks , Example setTimout(function x(){console.log("x"),4000}) , here javascript
    will not wait for 4000 ms to get completed , here in this case , setTimeout will store the function
    somewhere else and attact a timer and js will continue its execution , means  , even though the setTimeout
    operation is not completed the javscript is continuing its execution, this is what we call it as 
    asynchronous call, this is the power of callback function.

    3. so if you debug and see , even when the call stack becomes empty after all the operatio
    by the time setTimeout completes its timer and then you can see some anonymous stack der.

*/



// Example 1 : 

console.log("Example 1");

function x(y){
    console.log("x");
}

x(function y(){console.log("y");});

// output : x

// Example 2:

console.log("Example 2");

function a(b){
    console.log("a");
    b();
}

a(function b(){console.log("b")});

// output : a  b 