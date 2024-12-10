//Search and read about date section on MDN
//Moments defined in js are from january 1 , 1960

//TC-39 organize updates of javascript

let myTime = new Date();
console.log(myTime); // O/U - 2024-07-01T15:14:28.639Z
console.log(typeof myTime); //Its a object
//Check prototypes of date variable
//All outputs are depends upon the time on which we run the program
console.log(myTime.toString()); // converted in string  -->  O/U -Mon Jul 01 2024 20:44:28 GMT+0530 (India Standard Time)
console.log(myTime.toISOString()); // O/U - 2024-07-01T15:14:28.639Z
console.log(myTime.toJSON()); // O/U -2024-07-01T15:14:28.639Z
console.log(myTime.toLocaleDateString());// O/U - 1/7/2024
console.log(myTime.toLocaleString()); // O/U - 1/7/2024, 8:44:28 pm
console.log(myTime.toDateString()); // O/U - Mon Jul 01 2024

//For declaring specific date
let myDeclaredDate = new Date(2023,0,23); // In js months always start from 0 //Syntax --> new Date(year,month,date)
console.log(myDeclaredDate.toDateString()); // O/U - Mon Jan 23 2023

let newDeclaredDate = new Date(2023,0,23,5,3);  //Syntax --> new Date(year,month,date,hour,min)
console.log(newDeclaredDate.toLocaleString()); //O/U - 23/1/2023, 5:03:00 am

let newFormattedDate = new Date("01-04-2025");//To declare date in preffered format (month , date , year) .(year,month,date) this format is mostly preferred in india. in this month start from 1
console.log(newFormattedDate.toLocaleString());//O/U - 4/1/2025, 12:00:00 am

let myTimeStamp = Date.now() ;//Mostly preferred when we are designing quizes or polls to store exact time when the users submitted the answers
console.log(myTimeStamp); //this gives output  in miliseconds from moments defiend in js january 1 , 1960
console.log(myDeclaredDate.getTime()); // this gives output of milisecond of date decalred
console.log(Math.round(Date.now() / 1000)); // It is used to convert the date in seconds and Math.Round() is used to avoid decimal values

console.log(newDeclaredDate.toLocaleString('default', // First value is for which internationisation you want 
    {
        weekday:"long",
        day:"numeric",
        month:"narrow"
    }
)
)