const colorCreator = function(){
    const colorCodes = "0123456789ABCDEF";
    let actualColor = "#";
    for(let i = 0 ; i < 6 ; i++)
    {
        actualColor += colorCodes[Math.floor(Math.random() * 16)];
    }
    return actualColor;
}

let timeset = null;
const button = document.querySelectorAll(".btn");
button.forEach((btn)=>{
    btn.addEventListener("click",(click)=>{
        if(click.target.id == "start")
        {
            if(timeset == null)
            {
                timeset = setInterval(function(){
                    document.body.style.backgroundColor = colorCreator();
                },1000);
            }
        }
        else
        {
            clearInterval(timeset);
            timeset = null;
        }
    })
})