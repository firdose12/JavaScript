/* 

1.reduce is one of the higher order function 

2. higher order function means where a function is used as a value thats it.

3. reduce is generally used where we do some manipulation on array and returns finally single

object or single item etc

4. array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

*/

// Example 1 :

console.log("Sum of all the elements in an array");

const sum = [10 , 20 , 30 , 40 , 50 , 60];

const output = sum.reduce((acc , curr) => acc = curr + acc ,0);

//function for the above logic would be 


// here acc is like to initalize something liek sum = 0 etc , curr represents the current element

/* 
function sumOfElements(num){
    let sum = 0 ;
    return sum + num;
}

*/

console.log(output);

//Example 2 :

console.log("Subtract the numbers in the array, starting from the beginning:");

const numbers = [175, 50, 25];

// const output1 = numbers.reduce((total , num) => total - num, 0);

const output2 = numbers.reduce(myFunc);

function myFunc(total, num) {
    return total - num;
  }

console.log(output2);

