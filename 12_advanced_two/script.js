// as we know there was not built promises before ES6 (EcmaScript 6 ) but developer still uses promises with the help of Q or bluebird libraries but after ES6 promises are directly available in ES6

//how to create promise
//promises are objects which represent eventual completion or failure of an asynchronous operation and its resulting value

//for example we want to access file them we have to get kernel access then it will give us file access  or in app development we access sound devices , camera devices
//database --->  calls , connect , inject , cryptography related , network related

// -----------------------------creation of promises------------------------------------------------------
// whenever we create promise we have to consume it 
const promiseOne = new Promise(function(resolve,reject){ // resolve means completion and reject means failed and both are reference variables of methods
    setTimeout( function()
    {
        console.log("Async is completed")
        resolve();                              //connected to .then()
    },1000);
    // console.log(resolve); this are the references of resolve() and reject() function
    // console.log(reject);
});

/* 
syntax  variable = new Promise(callBackFunction(
    do async task 
))
console.log(promiseOne);*/

// then has direct connection with resolve and we will study this in fetch and it gives a callback which receives a argument automatically from the promise function which is in the promiseOne

promiseOne.then(function () { // this is called consumption of promises. 
    console.log("promise consumed");
    
}) 

//--------------------------------------second promise syntax using arrow function --------------------
new Promise((resolve , reject)  => {
    setTimeout( function()
    {
        let error = true;
        if(!error)
        {
            resolve({username:"Sahil@2803" , firstName : "Sahil" , lastName:"Mujawar",mobileNo:"8856953523"})
        }
        else
        {
            reject('Promise not resolved')
        }
    }, 1000)
}).then(function(user){
    console.log(user);
}).catch(function(error)
{
    console.log(error)
})

//--------------------------------third promise--------------------
const promiseThree = new Promise(function(resolve,reject)
{
    setTimeout( function()
    {
        let error = true;
        if(!error)
        {
            resolve({username:"_________sahilllll" , Name:"Sahil Mujawar" , phoneNumber:"8856953523" , platform:"Instagram",password:"sahil_.08"})
        }
        else
        {
            reject('Login details not found')
        }
    }, 1000)
});

//return will be passed to further then 
promiseThree.then( function ( user ) {
    console.log(user);
    return user.username;
}).then( function ( username ) {
    console.log(username)
}).catch( function ( error ) {
    console.log(error)
}).finally ( function ( ) { //this block will run both time either then is called or catch called
        console.log("promise three completed")//it will run by default 
})

//-----------------------------------------promise four----------------------------------------------------
const promiseFour = new Promise(function(resolve,reject)
{
    setTimeout( function () {
        let error = false;
        if(!error)
        {
            resolve({username:"_________sahilllll" , Name:"Sahil Mujawar" , phoneNumber:"8856953523" , platform:"Instagram",password:"sahil_.08"})
        }
        else
        {
            reject('login details not found');
        }
    }, 1000)
})

//It is not mandatory to use .then and .catch to consume the promise .Sometimes we use async await to consume the promises

//async await cannot handle errors directly thats why we use try catch 
async function consumePromiseFour() { //when we are using async await we have to use try and catch
    try {
        const response  = await promiseFour; //its an object thats why we wait till the response come and it is consumed by reference variable not by like syntax of function promiseFour() --> this is wrong
        console.log(response.username)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour() //function called

//-----------------------------------fetch-----------------------
//it will work faster because of high priority queue

// using async await 
async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary') // fetch hone tak ruko
        const data = await response.json(); // here .json() also taken time to convert thats why we use await here 
        console.log(data);
    } catch (error) {
        
    }
}

getAllUsers();

// using then catch 
fetch(`https://api.github.com/users/hiteshchoudhary`).then((response) => 
{
    return response.json()
}).then( ( data ) => {
    console.log(data)
}).catch( ( error ) => { 
    console.log(error)
});

let arry = [5,5353535225,2,4,5,3];
