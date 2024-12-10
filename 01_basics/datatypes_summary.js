//Which type of language javascript is ?
//Dynamically typed


// 1- Primitive ( They are passed by call by value)
/* 7 types : String , Number , Boolean , null , undefined , Symbol(to make the value unique ) , BigInt----> they are passed by call by value;*/

let name = "sahil";
let roll_no = 85;
let isLoggin = true;
const id = Symbol('123');
console.log(id);
//2- reference or non-primitive (Called by call by reference)
/*      Array , Objects , Functions
*/
let names = ["Sahil" , "Sajid" , "Manik" , "Afasana"]
console.log(names[0]);

let myObj = {
    myName : "hitesh",
    age : 22,
}

const myFunction = function()
{
    console.log("Hello world!");
}





//*************************************************************************** */

//Stack (Primitive) -->It gives copy of value and heap (Non-primitive) memories  ---> It givs reference of original value

let myChannelName = "webdevme";

/* 
                    ===============================
                    =                             =
                    ===============================
                    =                             =
                    ===============================
                    =                             =
                    ===============================

*/