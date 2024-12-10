//---------------------------------------------------------------SET TIME OUT--------------------------------//
//this is a method which calls and API and it works as mentioned below
/*
setTimeout(handler , number which define milliseconds)
handler means a function without name .We can also pass the reference of a function here

setTimeout(function()
{
    console.log("I am a set timeout function");
},1000)
//this setTimeout method will execute after 1s whenever the DOM is loaded successfully


Passing reference of a function as a handlert

const printTheNumber = ()=>
{
    console.log(`Current employee number ${1000}`);
}
setTimeout(printTheNumber , 2000);

*/

const myName = setTimeout(function() // It will run only one time after the time give in millisecond
{
    console.log("sahil")
} , 2000)


//We have another method as clearTimeout which is used to clear the setTimeout befre executing
//Suppose we want to remove the setTimeout after clicked on the button then we use clerTimeout

document.querySelector("#end").addEventListener("click" , (click)=>
{

    clearTimeout(myName);
    click.target.classList.add("animate");
    document.querySelector("h1").innerText="Clear time out called";
})