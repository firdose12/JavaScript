/* Event Listnerrs , here i will say one sceanrio 

1. Scenario : have one button called click Me , whenever you click that button 
a eventlistener should be called which is (click) and this code should be handled in 
javascript , not on html , so when we do something like that , see below what happens

2. Event Listerners needs to be garbage collected or removed , becuase go to dev tools
and select element and there you can see one tab event listeners , there you could 
see the handler , scope of the event and its closurer , even though we dont click a 
button we could see listeners are having all this information and when we click it will 
get pushed into call stack and then executed, so evet listeres are HEAVY and needs to be
garbage collected

*/

// Example 1 : 

console.log("Example 1");

// document.getElementById("clickMe")
// .addEventListener("click", function xyz(){
//     console.log("Clicked Me");
// });

//When button is clicked the function xyz should be pushed to call stack and execute it 
//so here function xyz is a call back function 

//output : ClickedMe 
//if you debug and see when we click button event listeners will get called and call back 
//function xyz will be pushed to the callstack 

//Example 2 

console.log("Example 2");

//Scenario : when ever user clicks on a button , it should print the count also 

//we can use a  global variable with count and we can use count ++ which is a normal
//appraoch but , it is not safe and secure so lets form a closure

function attachListener(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function xyx(){
        console.log("Clicked Me" , ++count);
    })
}

attachListener();

//output : Clicked Me 1 Clicked Me 2 Clicked Me 3 
//here function xyz formed a closure with attachListener function  , function xyz remebers
//the count reference and prints it

