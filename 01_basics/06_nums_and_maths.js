const score  = 400000; // this will print as it is in the console.
const balance = new Number(100.3652); // here number is a datatype. this is explicitly defined number and if we try to print the it console it will give data type and number

//this have some prototypes / methods

console.log(balance.toString()) // it will turn the number in string , but it is same as number
console.log(balance.toFixed(2)); //it will print upto 2 digits after the decimal number
console.log(balance.toPrecision(3));//It will round the value but in this case we have to know how much numbers are after the decimal point otherwise it will round value in appropriate format
console.log(balance.valueOf(200));

const anotherNumber = 10000000;
console.log(anotherNumber.toLocaleString())//this will convert the number in string as per us standard
console.log(anotherNumber.toLocaleString("en-IN"));//This will convert the number in string as per indian standard

//Check all the prototypes of number using chrome console

/* -------------------------------------------------OUTPUT-----------------------------------------------------
100.3652
100.37
100
100.3652
1,00,00,000
1,00,00,000
*/




//+++++++++++++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math) ;// Its an object and we have prototypes/methods in it as follows . Do check out the more methods by running it in console of chrome

console.log(Math.max(4,5,6,9,8,3)); // It will return the maximum value from it and we can also pass array to

array = [4,5,6,7,4];
console.log(Math.min(...array)); //This ...array spread the each element of array and it will retun the min value from it;

console.log(Math.floor(4.2));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.2));
console.log(Math.ceil(4.6));
console.log(Math.round(3.69));


/*--------------------------output-----------------------*/
// Object [Math] {}
// 9
// 4
// 4
// 4
// 5
// 5
// 4