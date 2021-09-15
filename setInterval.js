/* Use setInterval() to specify a function to repeat with a time delay between executions.

1. setInterval() will continue to execute until it is cleared.

*/

//Example 1 : 

console.log("Example 1 ");

let intervalID;

function repeatEverySecond() {
  intervalID = setInterval(sendMessage, 1000);
}

function sendMessage() {
  console.log("One second elapsed.");
}

// repeatEverySecond();

//output : setInterval will run the function sendMessage every second (1000 ms). when we call repeatEverySecond
//here there is a risk , it will continue to execute until it is stopped.

//so we have two methods to stop  clearTimeout() to setTimeout() and clearInterval() to setInterval().

//something like this 

function repeatevery2seconds(){
    inteverl = setInterval(sendMessage, 2000);
}

repeatevery2seconds();

function clearAlert(){
    setTimeout(function(){
       clearInterval(inteverl);
    },10000)
}

clearAlert();

//output : Thats it , it prints for 5*2 = 10sec , then after 10sec it will stop

