const form = document.querySelector("form"); // selected the form using query selector and form tag
const btn = document.querySelector("#calculate"); // selected the btn having id calculate using query selector

form.addEventListener("submit" , (submit) => //added event listener to the form which is of submit type means when we hit the submit button which is inside the form tag this block of code will run
{
    submit.preventDefault(); // for preventing the default behaviour of the form tag which is submit the form using get or post 


    // taken the value of input and as we know the value will come in string thats why converted to the integer value using parseInt() method
    const weight = parseInt(document.querySelector("#weight").value); 
    const height = parseInt(document.querySelector("#height").value);
    const results = document.querySelector(".result");

    // console.log(weight , height);

    if(isNaN(weight) || weight === ' ' || weight < 0)
    {
        result.innerHTML =  `<p style="color : #21212e ; text-decoration : underline ; font-weight : bolder">Enter the valid weight</p>`;
    }

    if(isNaN(height)  || height  === ' ' || height < 0)
    {
        result.innerHTML =  `<p style="color : #21212e ; text-decoration : underline ; font-weight : bolder">Enter the valid height</p>`;
    }
    const result = (weight / ((height * height) / 10000)).toFixed(2);
    if(result < 18.60)
    {
        results.innerHTML = `<p style="color : white ; text-decoration : underline ; font-weight : bolder ; text-align : center">BMI = ${result} <br>under weight</p>`;
    }

    else if(result >= 18.60 && result <= 24.9)
    {
        results.innerHTML = `<p style="color : white ; text-decoration : underline ; font-weight : bolder ; text-align : center">BMI = ${result} <br>normal weight</p>`;
    }

    else
    {
        results.innerHTML = `<p style="color : white ; text-decoration : underline ; font-weight : bolder ; text-align : center">BMI = ${result} <br>overweight</p>`;
    }
    
})