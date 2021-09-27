/* Some is also one of the array method in an array if any one condition is 
also matching in the array then it will return true*/


const items = [{
    name: 'hello', type: 'greet', price : 20
},
{
    name: 'hi', type: 'greeting',price : 10
},
{
    name: 'hellohi', type: 'pleasing',price : 30
}]

const output = items.some(item => item.price <20)
console.log(output);
