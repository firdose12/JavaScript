/* 

1. Object.Keys => returns the array of keys

2. Object.Values => returns the array of values

3. Object . entries => returns array of array with key and value as 0 and 1 

*/


// Example 1 : 

console.log("Object Keys");

let myKeys = {
    firstName: "hary",
    surName: "potter",
    age: 24,
    studies: "B tech"
}

let keysOutput = Object.keys(myKeys);

console.log(keysOutput);

/*output : ['firstName', 'surName', 'age', 'studies']  on the array as you know you can 
filter using reduce , filter , map etc .. 
*/

var myVals = {
    firstName: "hary",
    surName: "potter",
    age: 24,
    studies: "B tech"
}

const myValsOutput = Object.values(myVals);
console.log(myValsOutput);

/*Output : ['hary', 'potter', 24, 'B tech']  on the array as you know you can 
filter using reduce , filter , map etc ..*/

var myEntries = {
    firstName: "hary",
    surName: "potter",
    age: 24,
    studies: "B tech"
}

const myEntriesOutput = Object.entries(myEntries);
console.log(myEntriesOutput);

/*Output : 

0: (2) ['firstName', 'hary']
1: (2) ['surName', 'potter']
2: (2) ['age', 24]
3: (2) ['studies', 'B tech']  on the array as you know you can 
filter using reduce , filter , map etc ..

*/

var ownProperty = {
    firstName: "hary",
    surName: "potter",
    age: 24,
    studies: "B tech"
}


/*The hasOwnProperty() method returns true if the property is directly present
in the object (not in its prototype chain). If an object is an Array,
then the hasOwnProperty() method can check if an index is available 
(not empty) in the array. */


const hasOwnProperty = ownProperty.hasOwnProperty("firstName");
console.log(hasOwnProperty); //true


// Example 2 :

console.log("Lets play with objects");

let play = {
    firstName: "hary",
    surName: "potter",
    age: 24,
    studies: "B tech"
}

let addplay = play

console.log(addplay); /*output 
age: 24
firstName: "hary"
studies: "B tech"
surName: "potter"
*/

let addArray = [addplay];
console.log(addArray);
/*output 

[{…}]
0:
age: 24
firstName: "hary"
studies: "B tech"
surName: "potter"
[[Prototype]]: Object
length: 1
[[Prototype]]: Array(0)

*/ 

let addArray1 = [addplay , {hobbie : "cricket"}]
console.log(addArray1);

/*output : 

(2) [{…}, {…}]
0: {firstName: 'hary', surName: 'potter', age: 24, studies: 'B tech'}
1: {hobbie: 'cricket'}
length: 2


you can access object using object.propertyName or object[propertyName]

*/






