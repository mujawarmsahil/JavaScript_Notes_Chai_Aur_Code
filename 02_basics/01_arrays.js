//Array --> Read documentation
//Javascript arrays are resizable and can contain a mix of different objects
//Javascript arrays are zero base indexed
//Javascript arrays copy operation creates shallow copies
//Shallow copies --> It is a copy whos property share the same reference point
//Deep copies --> It is a copy whos property do not share the same reference point

// different declaration of arrays
const myArray = [4,3,2,7,8,9,0,true,"sahil"] ;
const myFavChar = ["Scott" , "Malia" , "Allison " , "Stile" , "Derek"];
const myArr = new Array(1,2,3,5,4);


//Array methods
myArray.push(6) //used to add values in array;
console.log(myArray); // [ 4, 3, 2, 7, 8, 9, 0, true, 'sahil', 6 ]

myArray.pop() // last value will be removed and no parameter required
console.log(myArray); // [ 4, 3, 2, 7, 8, 9, 0, true, 'sahil' ]

myArr.unshift(9) // it will add the parameter value at starting index of array and move all the value one index forward
console.log(myArr); // [ 9, 1, 2, 3, 5, 4 ]

myArr.shift(); // this will remove value at first index and shift all the value 
console.log(myArr); // [ 1, 2, 3, 5, 4 ]

//Some questionare methods which gives true or false value
console.log(myArr.includes(1)); // if value present it will return true otherwise false
console.log(myArr.indexOf(9));//If value is not present it will give -1 otherwise return index of value


const newArray = myArr.join(); // it will join the array and convert in string
console.log(myArr); // [ 1, 2, 3, 5, 4 ]
console.log(newArray); // 1,2,3,5,4
console.log(typeof newArray); // string

//Slice and splice method

console.log("A",myArr); // A [ 1, 2, 3, 5, 4 ]

const myNewArray = myArr.slice(2,5) // this will store array from starting index(2) upto end-1 (5-1=4) and wont manipulate the original array
console.log(myNewArray); // [ 3, 5, 4 ]
console.log("B",myArr); // B [ 1, 2, 3, 5, 4 ]

const myNewArray1 = myArr.splice(2,5) // this will store array from starting index(2) upto end (5-1=4) and manipulate the original array by removing the elements which is from start(2) to end(5)
console.log(myNewArray1); // [ 3, 5, 4 ]
console.log("C",myArr);// C [ 1, 2 ]

