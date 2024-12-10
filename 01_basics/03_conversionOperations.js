let score = "33";

// console.log(typeof score); //used to check the type of variable
// console.log(typeof(score)); //its also used to check type of variable 

let valueInNumber = Number(score); //used to convert the string into number. We have other functitons to which is used to convert datatype into another one like String , boolean etc;

// console.log(typeof(valueInNumber));

let score1 = "33abc"; 

// console.log(typeof score1);

let valueInNumber1 = Number(score1);

// console.log(typeof(valueInNumber1));
// console.log(valueInNumber1); //It gives NaN which is a special type like null

// values and their conversion when we convert them in number
//"33" --> 33
//"33abc" --> NaN(Not a Number ==> it has type number)
//true --> 1
//false --> 0
//null --> 0
//undefined --> NaN

let isLoggedIn = 12;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//1 ---> true , 0 --> false , any number except 0 is true
//"" ----> false , "sahil" ---> true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);


/************************ Operations ************************** */
let value = 3;
let negValue = -value;
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); //Power of 2
// console.log(2/2);
// console.log(2%3);

let str1 = "hello" ;
let str2= " Sahil";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log(1+"2"+2);

console.log(true);

let num1 , num2 , num3;

num1 = num2 = num3 = 2 + 2 ;


