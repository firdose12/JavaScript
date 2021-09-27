/*find is one of the array method which will find you the element in the array 

important , it will return the first element where it matches to the condition 

eg : 
const output = items.find(item => item.price <30)

for this it will return only  name: 'hello', type: 'greet', price : 10 , not 

name: 'hi', type: 'greeting',price : 20 , even though it satisfies it 

*/


const items = [{
    name: 'hello', type: 'greet', price : 10
},
{
    name: 'hi', type: 'greeting',price : 20
},
{
    name: 'hellohi', type: 'pleasing',price : 30
}]

const output = items.find(item => item.price ==20)
console.log(output);