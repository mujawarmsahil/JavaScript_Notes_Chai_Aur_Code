function multiplyBy5(num) // works as a function and a object too.
{
    return num * 5 ;
}

multiplyBy5.power = 3 ;

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype) // its a context of that function or object means this keyword

function createUser(username , score)
{
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function()
{
    this.score++;
}

createUser.prototype.printMe = function()
{
    console.log(`score is ${this.score} of ${this.username}`)
}

console.log(createUser.prototype)

const first = new  createUser("first",25) // new keyword gives all the properties of createUser
const second = new createUser("second",250)
first.printMe();