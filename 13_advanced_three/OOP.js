// object literal = literally a object 
const userDetails = {
    userName : "sahil",        //all key value pairs are properties of object
    password : "8856953523",
    loginCount : 8
}

//this keyword gives the current context 

function UserDetails (userName , password , loginCount , isLoggedIn)
{
    this.userName = userName;
    this.isLoggedIn = isLoggedIn;
    this.password = password;
    this.loginCount = loginCount;


    this.loginMessage = function()
    {
        console.log(`Welcome ${this.userName}`)
    }
}

const userOne = new UserDetails("sahil" , "sahil2803" , 8 , false);
const userTwo = new UserDetails("sajid" , "sajid0104" , 2 , true);

console.log(userOne);