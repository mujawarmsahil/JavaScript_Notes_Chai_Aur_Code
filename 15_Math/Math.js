// Q) Can we change the value of Math.PI
console.log(Object.getOwnPropertyDescriptor(Math,"PI")) // it gives hidden properties of Object .
//We cannot change some objects of javaScript because they are not writable and got a extra layered security using CPP and above method shows a object and its property means key the output of it will come as :-
// {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
//writable false means we cannot override it or redeclare it .If we try that it will not reflect the changes and stick to the default value.

//Example

Math.PI = 5 ;
console.log(Math.PI) // output is 3.141592653589793

Math.PI = 8 ;
console.log(Math.PI) // output is 3.141592653589793

// for adding such properties in our object refer below example
const myObject = {
    name : "Sahil",
    age : 20,
    designation : "SDEII",
    salary : "20LPA"
}

console.log(Object.getOwnPropertyDescriptor(myObject)); //undefined because this method gives description about the property not the object itself

console.log(Object.getOwnPropertyDescriptor(myObject,"name")) // {value: 'Sahil', writable: true, enumerable: true, configurable: true}
Object.defineProperty(myObject,"name",{writable:false,enumerable:false})
console.log(Object.getOwnPropertyDescriptor(myObject,"name")) //{value: 'Sahil', writable: false, enumerable: false, configurable: true}

for(let key in myObject)
{
    console.log(`${key} -----> ${myObject[key]}`); //this loop is not accessing the name key of myObject
    
}
