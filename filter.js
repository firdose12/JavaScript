/*
 filter is one of the higher order function 
1. higher order function means where a function is used as a value thats it.

2. filter generally filters the array based on some condition thats it

3. filter() does not execute the function for empty array elements.

4. filter() does not change the original array.

*/

//Example 1 : 

console.log("Return an array of all the values in ages[] that are 18 or over:");

const ages = [32, 33, 16, 40];

const ouput = ages.filter((x)=>x>=18);

console.log(ouput);

//Example 2 : 

//Scenario : filter an array whos name is "map" and return only name

let obj = 
[{
    name1: "map", type: "deals with the elements in the array"
}   , {
    name1: "filter", type: "filters out based on condition"
}, {
    name1: "reduce", type: "finally returns single value"
},{
    name1: "map", type: "deals with the elements in the array"
}]

const filteredArray = obj.filter((singleObject)=>singleObject.name1 === 'map'); // output : (2) [{…}, {…}]
// 0: {name1: 'map', type: 'deals with the elements in the array'}
// 1: {name1: 'map', type: 'deals with the elements in the array'}

// console.log(filteredArray);

const finalArray = filteredArray.map((x)=>x.name1);

console.log(finalArray);

//all together we can write like this

const combinationOutput = obj.filter((singleObject)=>singleObject.name1 === 'map').map((x)=>x.name1);
console.log(combinationOutput);

