const clock = document.getElementById("clock");
console.log(clock);



setInterval(function(){
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
    console.log(date.toLocaleTimeString());
} , 1000)   //this method control events of javascript .Till and until the js running it will execute