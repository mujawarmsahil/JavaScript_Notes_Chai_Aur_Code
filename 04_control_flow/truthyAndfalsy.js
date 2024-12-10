const userEmail = "sahil.ai";

if(userEmail)
{
    console.log("have email");
}
else
{
    console.log("dont have email");
}

//falsy values -> false , 0 , -0 , BigInt 0n , "", null , undefined ,Nan .
//truthy value -> true , 1 or any except 0 and -0, [] , "0" , 'false' , " " , {} , function(){} , 


let cartItems = [];
if(cartItems.length == 0)
{
        console.log("Cart is empty");
}

let emptyObj = {};

if(Object.keys(emptyObj).length == 0)
    {
        console.log("object is empty");
    }

//Nullish Coalesing operator(??) :  it works on null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);//5

val1 = null ?? 10;
console.log(val1); //10

val1 = undefined ?? 10;
console.log(val1); //10

val1 = null ?? 10 ?? 20;
console.log(val1); //10 first value is assigned

//Ternary operator
// condition ? true : false;

let gameScore = 300;
console.log(gameScore < 200 ? "buy" : "show low price items");