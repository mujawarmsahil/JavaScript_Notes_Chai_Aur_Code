const body = document.querySelector("body");
const box = document.querySelectorAll(".box"); //its a node list
const buttonId = document.querySelector("#ghostwhite");

box.forEach((span) => //span means every element of box array
{
    span.addEventListener("click" , (e)=> // e means which evenet is thi
    {
        body.style.backgroundColor = e.target.id; //e.target means the elements on whch the event happened and .id means its id
    })
})

buttonId.addEventListener("click" , (e)=> //"click" means defining the event there more events like click mouseover , etc
{
    body.style.backgroundColor = e.target.id;
})