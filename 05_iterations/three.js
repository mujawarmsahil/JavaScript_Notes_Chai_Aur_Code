//ARRAY SPECIFIC LOOPS
//for of = in this we can access directly values
const arr = ["my namee " , "is" , "sahil" , "and" , "i" , "am" , " stack developer"];

/* for (const var_name of object/array)
    {
        implement your logic
    }
*/
for (const arr_value of arr) {
    console.log(arr_value);
}

/* output
my namee
is
sahil
and
i
am
stack developer
*/ 

const myName = "sahil mujawar";
for (const words of myName) {
    console.log(`single word - ${words}`);
}

// single word - s 
// single word - a 
// single word - h
// single word - i
// single word - l
// single word -
// single word - m
// single word - u
// single word - j
// single word - a
// single word - w
// single word - a
// single word - r




//----------------------MAPS----------------------------------
//Map is a object which hold key value pairs and remember the original insertinn of the leys. Any values(both objects and primitive values) may be used as key or value; there are no duplicates values in it
// how to set values in map  in that there are unique objects in map . map is a object
//It remembers the order of elements when inserting them and map doesnt store duplicate key values
const map = new Map();
map.set('IN',"India");
map.set('USA',"Unites states of america");
map.set('Fr',"France");
map.set('USA',"Unites india of america");
map.set('USA',"ind");
map.set('GOAT',"India");


console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key , value] of map) {
    console.log(key , ':-' , value);
}

const myobj =
{
    "name" : "username",
    "game" :  "NFS"
}

// for (const [key,value] of myobj) { // object is not iterable
//     console.log(key);
// }



// -------------------------------REVISED---------------------------
const revisedArray = [1,2,3,4,5]; //objects , array , string are iterable

for (const revisedItems of revisedArray) { // Syntax for(var_name of object)
    console.log(revisedItems);              // {    here your logic
}                                            //}

const greetings = "Hello wrold!"
for (const greet of greetings) {
    console.log(greet);
}

const myObj = {
    user_name : "sahil",
    age : 28,
    email : "Sahilmmujawar28@gmail.com"
}

// for (const keys of myObj) {  objects are not iterable for for of loop
//     console.log(myObj.keys);
// }

//MAPS   -> theory writtened above
const myMap = new Map();
myMap.set("key" , "chabi");
console.log(myMap)   //prints total object
//implementation of for of loop on maps for both key values
for (const [key,value] of myMap) {     // in this we destructured the array  
    console.log(key , "has value " , value);
}

//implementation of for of loop on maps for key
for (const key of myMap) {      
    console.log(key);
}



