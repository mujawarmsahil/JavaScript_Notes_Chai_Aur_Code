//Immediately invoked function expression(IIFE)
//when we write a function and we want to execute it immediately .Thats called IIFE
//When we dont want to pollute our code with global variables and the function should get immediately execute at that time we use IIFE

// function chai() --> normal function
// {
//     console.log("DB connect");
// }

// chai();

(function chai()                             //IIFE function 
{
    console.log("DB connect");
})() ;

//--> first () means function defination and  second one is for execution
//Problem will cause because of global scope's pollutions and we dont want this problem thats why we use IIFE and 

(function chai()                             //Named IIFE = If we try to execute another IIFE function and the above one is not ended with semmicolon then compiler give error because code editor know about function invoking but dont know where to stop it .If we want to execute two or more IIFE function we have to end them at there places 
{
    console.log("DB connect two");
})() ;

((name)=>
{
    console.log(`DB connect three ${name}`);
})("hitesh");