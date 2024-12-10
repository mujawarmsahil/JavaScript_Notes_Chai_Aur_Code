const user = {
    ID : 123 ,
    username : "Sahil_mujawar",
    fullname : "Sahil Manik Mujawar",
    mail : "sahilmmujawar28@gmail.com",
    mobileno : 8856953523,
    pricePaid : 900,
    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to website`);
        // console.log(this); this will print current contextof obj
    },
    password : "S@h!l_2803",
    isLoggedIn : false,
    lastLogin : [ "wednseday" ,  "thursday" , "monday"]
}

// user.welcomeMessage();
// user.welcomeMessage; //nothing will print
// user.username = "sameer"
// user.welcomeMessage();

// console.log(this); //when we are in node enviroment this will refer to empty object and  print empty

//in past there is only one way to execute js which is inside the browser because the engine required to run js is only available inside the browser . After some time search engines are taken outside and name as node , dino etc which means search engines are stand alone rn .
//Window is a global object in browser so if we try to print this in node console it will give empty and if we try to do in browser console it will give us whole window object

// function chai()
// {
//     const username = "sahil" 
//     console.log(this); //if we print this in function it will give global objects etc etc performance values
//     console.log(this.username); //this value will give us undefined because we cannot use this in function without DOM manupulation
// }
// chai()

// ----------------------------------ARROW---------------------------------------

const myUser = () =>
{
    const username = "sahil" 
    console.log(this);  //if we print this in arrow function it will give empty
}

myUser();

//basic arrow function syntax
// var_name = () => {} ;

const addThree = (num1, num2 , num3) => //explicit return 
{
    return num1 + num2 + num3;
}

addThree(5,6,9,);

//we have one another type of arrow function which is called as implicit return

const addAnotherThree = (num1, num2 , num3) => (num1 + num2 + num3);
addAnotherThree(9 , 6  , 8);

//returning object from arrow function
const returnObject = () => ({username :  "sahil", id : 885 });

console.log(returnObject());