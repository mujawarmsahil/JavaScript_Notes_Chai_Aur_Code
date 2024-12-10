function SetUserName(username){
    this.username = username;
}

//first

// function createUser(username , email , password)
// {
//     this.username = null;
//     SetUserName(username);
//     this.email = email ;
//     this.password = password;
// }

// const user = new createUser("me","sahil","7846");
// console.log(user); //username is not defined because from call to another call this context gets converted to global context because username is present in it

//seconds

// function createUser(username , email , password)
// {
//     SetUserName.call(username);
//     this.email = email ;
//     this.password = password;
// }

// const user = new createUser("me","sahil","7846");
// console.log(user); //username is not defined because from call to another call this context gets converted to global context because username is present in it

//third

function createUser(username , email , password)
{
    SetUserName.call(this,username);
    this.email = email ;
    this.password = password;
}

const user = new createUser("me","sahil","7846");
console.log(user); //username is not defined because from call to another call this context gets converted to global context because username is present in it
