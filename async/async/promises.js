/*

this is nothing but a general meaning of the promise , 

generally we face issues in setTimeout , like for example 

suppose say we want to add one student and fetch that in html , 
lets say both are in different different timeouts 

so to make that only after student is enrolled then only fetch it 
irrespective of the setTimeout time , this will happen only if satifies 


Simply promise is a event which might be tentatively fulfulling something in future or 
might be not 

*/

// Example 1 : 

function func1() {
    return new Promise(function (resolve, reject) {
        const error = false;
        if (!error) {
            resolve(); // this points to the function which is in then ( the one which is in then will get executed) 
        }
        else {
            reject(); // this points to the function which is in catch ( the one which is in then will get executed)
        }
    })
}

func1().then(function () {
    console.log("Resolved");
}).catch(function () {
    console.log("Rejected");
})

// Example 2 : 

//Scenario here is , i want harry function to complete its job first calling to db or what 
//ever it may be  , then only call potter


const harry = () => {
    setTimeout(() => {
        console.log("Wohooooo");
    }, 3000);
}

const potter = () => {
    console.log("I am there");
}

harry();
potter();

//for this the out put will be , 
//I am there , Wohoooo

// Example 2 : 

const dos = () => {
    setTimeout(() => {
        return "I am from dos"
    }, 3000);
}

const thros = () => {
    return "I am from Thros"
}

const callMe = () => {
    let valOne = dos();
    console.log(valOne);

    let valTwo = thros();
    console.log(valTwo);
}

callMe();

//output here will be  : Undefined , I am from thros
// we got undefined fromt he setTimeout method , because by the time console finds it
//setTimeout is still in execution
//so instead simply try giving a promise called async for dos , and see what happens in Example 3


//Example 3 

const dos1 = async() => {
    setTimeout(() => {
        return "I am from dos1"
    }, 3000);
}

const thros1 = () => {
    return "I am from Thros1"
}

const callMe1 = () => {
    let valOne = dos1();
    console.log(valOne);

    let valTwo = thros1();
    console.log(valTwo);
}

callMe1();

//output : 

//Promise {<fulfilled>: undefined}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
//  I am from Thros1
//if you mention that as async it says that this is a promise that this might come back to you
//in future , something like i am not yet done with the execution


//Example 3 : 

const dos2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve( "I am from dos2")
        }, 3000);
    })
}

const thros2 = () => {
    return "I am from Thros2"
}

const callMe2 = async() => {
    let valOne = await dos2();
    console.log(valOne);

    let valTwo = thros2();
    console.log(valTwo);
}

callMe2();

//output : I am from dos2 I am from Thros2

// we have used async to the calling function because it might have so many 
//await functions inside , what await does is ? it will say "Hey Wait let me complete my
//execution first then only start with the other dont leave me here :) " , try using
//reject instead of resolve you ll see the errors 