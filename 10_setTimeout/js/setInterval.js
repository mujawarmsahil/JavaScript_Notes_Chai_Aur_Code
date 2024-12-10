"use strict"

let count = 0 ;
let timeout;
document.querySelectorAll("button").forEach((btn)=>
{
    btn.addEventListener("click" , (click)=>
    {
        if(click.target.id == 'start')
        {
            if(!timeout)
            {
                timeout = setInterval(()=>
                {
                    document.querySelector(".count").innerHTML = `${count}`;
                    count++;
                } , 1000)
            }
        }
        if (click.target.id=="stop")
        {
            clearInterval(timeout);
            timeout = null;
            document.querySelector(".count").innerHTML = `0`;
            count = 0;
        }
    })
})