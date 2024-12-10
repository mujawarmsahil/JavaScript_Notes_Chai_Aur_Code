//There are two ways to define objects in js 
//1- as a literal 2-as a constructor
//singleton --> means when we create a object by constructor then it will make a singleton object.It a only object similar to himself.
// Object.create
//When we declare object as literal then it will not make singleton object


//Object literals
const JsUser = {
    name : "sahil", // system will process key as a strings like as "name"
    age : 21,
    email :"Sahilmmujawar28@gmail.com",
    m_np : 8856953523,
    isLoggedIn : false,
    "full name" : "sahil manik mujawar",
    lastLogin : [ "monday" , "tuesday" , "friday"]
}

//ways to access values
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

//Interview question use a symbol variable as a key in object

const mySyb = Symbol("Key");
const mySyb1 = Symbol("Key");

const accountDetails = {
    name : "sahil", // system will process key as a strings like as "name"
    age : 21,
    email :"Sahilmmujawar28@gmail.com",
    m_np : 8856953523,
    isLoggedIn : false,
    "full name" : "sahil manik mujawar",
    lastLogin : [ "monday" , "tuesday" , "friday"],
    mySyb : "key2", // incorrect
    [mySyb1] : "key2" //correct
}

console.log(typeof accountDetails.mySyb) // it will give string but we declared it as symbol hence its wrong approach for this question

console.log(accountDetails[mySyb1]); //correct way

JsUser.email = "sahil@google.com" // approach for changing values of object
console.log(JsUser)
Object.freeze(JsUser) // after this method you will not able to make changes in object
console.log(JsUser)
JsUser.email = "sahil@twitter.com" // this change will not be applied to object

accountDetails.greetings = function () { // this is a function of object and we can declare it outside of object block
    console.log(`Hello user ${this["full name"]}`)
}

console.log(accountDetails.greetings()) //this will run the function 
console.log(accountDetails.greetings) //this will give reference of function


