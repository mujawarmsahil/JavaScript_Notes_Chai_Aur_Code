//In javascipt all the events run sequence thats why javascript is sequentially running language
//But there are some expection like events etc .Today we are learning EVENGTS
//They invoked on a certain activities like click 

//2nd approach first is in html 

// document.getElementById("wallpaper").onclick = function() {
//     alert("im wallpaer")
// }

//Above method have limitation and not gives us some methods or option

//Best approach to listen events on element is given below
// document.getElementById("wallpaper").addEventListener("click" , (click)=>
//     {
//         console.log(click); // it gives event object which gieves all the information like position of click , timing etc
//     }
// , false) //default is also false

// details about the false in eventlistener . Its not mandatory to write false in event listener .If we don't use any true or false value here then default value is false
//This values are related to the event propogation .It has 2 context 
//1)Event bubbling means we pass the event from that element to parent element
//2)Event capturing means we pass the event from parent to that element
//false :- event bubbling
//true :-  event capturing

//-------------------------------------EVENT BUBBLING EXAMPLE---------------------------------------------

// document.getElementById("images").addEventListener("click" , (click)=>
// {
        //click.stopPropogation() // used to stop propogation from that element to above
//     console.log("Clicked on ul");
// } , false);

// document.getElementById("wallpaper").addEventListener("click" , (click)=>
//     {
//         console.log("Clicked on wallapaper");
//     } , false);

//OUTPUT
//Clicked on wallapaper
//Clicked on ul

//------------------------------------EVENT CAPTURING--------------------------------------------
// document.getElementById("images").addEventListener("click" , (click)=>
//     {
//         click.stopPropogation() // used to stop propogation from that element to below
//         console.log("Clicked on ul");
//     } , true);
    
//     document.getElementById("wallpaper").addEventListener("click" , (click)=>
//     {
//         console.log("Clicked on wallapaper");
//     } , true);

//OUTPUT
//Clicked on ul
//Clicked on wallapaper
    

//study -> types of event , timestamp , defaultPrevented , target , toElement , srcElement , currentTarget 
//clientX , clientY , screenX , screenY
//altKey , ctrlKey , shiftkey , keycode

//attachEvent method was in work while we are running websites on Internet explorer


// -------------------------------------preventDefault--------------------------------
//this method is used to prevent default behaviour of any action like redirecting link , submitting the form , drag and drop

// document.getElementById("google").addEventListener("click" , (click)=>
// {
//     console.log("google clicked");
//     click.stopPropagation()
//     click.preventDefault()
// })


//-----------------------remove img from the ul-------
// document.querySelectorAll(".img").forEach((picture)=>{ // this code will have some limitation that it will, not remove the li .It will leave the dot of li their
//     picture.addEventListener("click" , (click)=>
//     {
//         picture.classList.add("removeImg");
//     })
// })

document.querySelector("#images").addEventListener("click" , (click) =>
{
    // console.log(click.target.parentNode);
    // click.target.parentNode.remove();

    console.log(click.target.tagName);
    if(click.target.tagName == 'IMG')
    {
        click.target.parentNode.remove(); // click is a event //Target is element on which the event is happening //parentNode is the parent of that target element
    }
})