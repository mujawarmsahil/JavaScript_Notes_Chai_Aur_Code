"use strict"

const dots = document.querySelectorAll(".dots");
const container = document.querySelector(".container");
const clock = document.getElementById("clock");


dots.forEach((dot) =>
{
    dot.addEventListener("click" , (e)=>
    {
        container.style.backgroundColor = e.target.id; // id of target element will assigned as background color
    })
})

setInterval(function(){
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
} , 1000) // run on every 1s second


//guess number logic starts from here

const submit = document.querySelector("#subt"); // input button
const userInput = document.querySelector("#guessField") // input number
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector('.resultParas')
const p = document.createElement("p");

let randomNumber = parseInt(Math.random() * 100 + 1);
let prevGuess = []; //previous guesses array 
let numGuess = 1;
let playGame = true;


if(playGame)
{
    submit.addEventListener("click" , function(click)
    {
        click.preventDefault(); // to prevent the default nature of the form
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess)
{
    //to check the guess is withing range or not or it should not be NaN
    if(guess > 100 || guess < 0)
    {
        alert(`Please enter the guess within 1 to 100 range`);
    }
    else if(isNaN(guess))
    {
        alert('Please enter a valid guess');
    }
    else
    {
        prevGuess.push(guess);
        if(numGuess === 10)
        {
            displayGuess(guess);
            displayMessage(`Game Over! random number was ${randomNumber}`)
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{
    //to check the guess
    if(randomNumber === guess)
    {
        displayMessage("The guess is right");
        endGame();
    }
    else if(guess < randomNumber)
    {
        displayMessage('Guess is tooooooo loww')
    }
    else
    {
        displayMessage('Guess is tooooooo high')
    }
}

function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function displayGuess(guess)
{
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add("button");
    p.innerHTML = `<h3 id="newGame" style = "cursor : pointer;">Start new Game</h3>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame()
{
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click" , function(click) 
    {
        guessSlot.innerHTML = '';
        numGuess = 1;
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        userInput.removeAttribute("disabled" , '');
        remaining.innerHTML = `${11 - numGuess}`;
        startOver.removeChild(p);
        playGame = true;
    })
}



