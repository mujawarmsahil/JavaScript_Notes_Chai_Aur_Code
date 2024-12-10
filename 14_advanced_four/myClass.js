//classes are introduced in ES6
class user {
    constructor(username,email,password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword()
    {
        return `${this.password}`
    }

    ChangeUserName()
    {
        return `${this.username.toUpperCase()}`
    }
}

const userFirst = new user("sahil","sahil@gmail.com","123");;

console.log(userFirst.encryptPassword());
console.log(userFirst.ChangeUserName());

//behind the scene
function User(username , password , email){
    this.username = username;
    this.password = password ;
    this.email = email;
} 

User.prototype.ChangeUserName = function(){
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function()
{
    return `${this.password}`
}

const userSecond = new user("sahil","sahil@gmail.com","123");;

console.log(userSecond.encryptPassword());
console.log(userSecond.ChangeUserName());


