/* map is one of the higher order function 

1. higher order function means where a function is used as a value thats it.

2. Using map() allows us to iterate through all items in an array, performing actions on each item.
 The results of this activity are returned to us inside a new array.

 3. map() returns a new array with the same length as the parent array.
*/

// Example 1 : 

console.log("Example 1");

/*Scenario : say you have one array let a = [1, 2, 3, 4, 5, 6 ] 
you have return the double of this array how will you do this ? 
*/

let arr = [1, 2, 3, 4, 5, 6];

function double(x) {
    return x * 2;
}
const output = arr.map(double);

console.log(output);


// Example 2 

//the above thing can also be written as below

const output1 = arr.map(function double(x) {
    return x * 2;
})

console.log(output1);

// Example 3 : 

//the above thing can be written as 

const output2 = arr.map((x) => x * 2);
console.log(output2);

// Example 4 : 

//Scenario : Return array / list with all the names

console.log("Array of Objects");

let obj = 
[{
    name1: "map", type: "deals with the elements in the array"
}   , {
    name1: "filter", type: "filters out based on condition"
}, {
    name1: "reduce", type: "finally returns single value"
}]

function mappedNames(singleObject){
     return singleObject.name1;
}
const listOfnames = obj.map(mappedNames);

console.log(listOfnames);

// Example 5 : 

//Scenario : return new array with [name1 type]

function combinedList(eachObject){
    return eachObject.name1 + ' ' + eachObject.type; 
}

const listOfCombination = obj.map(combinedList);

console.log(listOfCombination);

//Example 6 : 

console.log("Convert input to uppercase");

let input = ['John', 'Tom', 'Katy'];

function convertToUpperCase(input){
    return input.toUpperCase();
}

const convertedOutput = input.map(convertToUpperCase);

console.log(convertedOutput);

//Example 7 : 

//Scenario : Add all the numbers by 10 and multiply by 2 

const num =  [2, 30 , 8 , 3 , 5 , 6] ;

function addByTen(num){
    return num + 10;
}

function multiplyByTwo(num){
    return num * 2;
}

const mutilpeManipulation  = num.map(addByTen).map(multiplyByTwo);

console.log(mutilpeManipulation);