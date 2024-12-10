//code which flows on conditional base this is called as control floe or logc flow

//1st one is if
const isUserLoggedIn = true;


if(isUserLoggedIn) //if condition is true then it will execute otherwise not
{
    console.log(true);
}


//there are some basic comparison operator
// < , > , <= , >= , == , != , === , !==

if(2 == '2')
{
    console.log("executed");
}

if(2 === '2')
{
    console.log("executed");
}

//2nd one if-else . Either if will execute or else will execute
const temp = 20;
if(temp < 50)
{
    console.log("less than 50");
}
else
{
    console.log("Greater than 50");
}

const score = 5000;
if(score < 20000) console.log("passed"); //implicit scope

if(score < 20000) console.log("checked") ,  //use this syntax for immplicit scope
console.log("passed");


// if(score < 20000) console.log("checked") , console.log("passed"); this is a correct syntax but its not a good practice

//3rd one else if
let balance = 1000;
if (balance < 500) {
    console.log("less than 500");
}
else if(balance < 750)
{
    console.log("less than 750");
}  
else
{
    console.log("greater than 750");
} 

const isUserLoggedin =  true;
const debitCard = true;

if(isUserLoggedin && debitCard)
{
    console.log("allowed to purchase");
}