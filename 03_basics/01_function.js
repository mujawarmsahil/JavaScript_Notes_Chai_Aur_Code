function showSomething() //defination of function
{
    console.log("sahil");
}

for (let index = 0; index < 10; index++) {
    showSomething(); //calling the function
}

// showSomething -->reference of function

function addTwo(number1,number2)
{
    console.log(number1+number2);
}

// addTwo() -->NaN 
addTwo(3,4) //--> 7
addTwo(3,"4") //--> 34

const result = addTwo(20,40)
console.log(result);//-->NaN because function doesnt return any value

function addTwoNumbers(num1,num2)
{
    return num1+num2;
}

const newResult = addTwoNumbers(20,30);
console.log(newResult) //-> 50

function loginUserMessage(userName="user") {
    if(userName === undefined)
    {
        console.log('enter a username');
        return
    }
    return `${userName} just logged in`
}

loginUserMessage("Hitesh") ;
console.log(loginUserMessage("sahil"));
console.log(loginUserMessage()); //-->Undefined


//variable arguments in js

function calculateCartPrice(...value) { //(... --> rest operator)
    return value;
}

console.log(calculateCartPrice(10,20,30,40,50)); //[10,20,30,40,50]
console.log(calculateCartPrice(100,20,300,40,500)); //[100,20,300,40,500]

const user = {
    username : "sahil",
    price:900
}

function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

handleObject({
    username:"sahil",
    price:399
})

const myNewArray = [200,569,236,210]

function secondValue (Array)
{
    return Array[1];
}

console.log(secondValue(myNewArray))
console.log(secondValue([10,20,30,40,50,60]))
