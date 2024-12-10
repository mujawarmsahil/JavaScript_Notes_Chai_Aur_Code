const tinderUser = new Object();
console.log(tinderUser); //this will give empty object but it is a singleton object

const tinderUser2 = {} //this will also give empty object but it is a object literal

tinderUser.id = "123Abd"
tinderUser.name = "sahil"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = //we can go for nested objects as many as you want
{
    email : "some@example.com",
    fullName:
    {
        userFullName :
        {
            firstName : "sahil",
            lastName :"mujawar"
        }
    }
    
}

console.log(regularUser.fullName.userFullName.firstName)

// combination of object 

const obj1 = {a:"1",b:"3"}
const obj2 = {a:"2",b:"4"} 

const obj3 = {obj1,obj2} //this will give same problem as array
console.log(obj3);

const obj4 = Object.assign(obj1,obj2) //this will give the combined object to obj4 and we have addition and professional syntax to achieve it which is given below

const obj5 = Object.assign({},obj1,obj2)//this will give same result as above but the synatx is {destination,source1,source2} means combine the sources and give it to destination

const obj6 = {...obj1,...obj2} //this is similar to array

const user = [
    {
        email : "s@gmail.com",
        phone_number : 8856953523,
        name : "Sahil mujawar"
    },
    {
        email : "s@gmail.com",
        phone_number : 8856953523,
        name : "Sahil mujawar"
    },
    {
        email : "s@gmail.com",
        phone_number : 8856953523,
        name : "Sahil mujawar"
    },
    {
        email : "s@gmail.com",
        phone_number : 8856953523,
        name : "Sahil mujawar"
    },
    {
        email : "s@gmail.com",
        phone_number : 8856953523,
        name : "Sahil mujawar"
    },
    {
        email : "s@gmail.com",
        phone_number : 8856953523,
        name : "Sahil mujawar"
    }
]

console.log(user[1].email) //this way we can access the values coming from data base

// __________________________________________inbuilt methods___________________________________________________

console.log(tinderUser.hasOwnProperty("id")); //it will check it has the key or not if yes then true otherwise false is returned

console.log(Object.keys(tinderUser)); //this will give keys of particular object
console.log(Object.values(tinderUser)); //this will give values of particular object
console.log(Object.entries(tinderUser)); //this will give all key value pairs

// -----------------------------------------Destructuring of objects-----------------------------------------

const course = {
    coursename : "devcourse",
    fees : "10000",
    courseinstructor : "hitesh"
}

course.courseinstructor;
const {courseinstructor : instructor} = course; //---->This is used to make  simple way to access the variables of objects Syntax --> keyword{variable_name : ALIAS_name} = object_name --> Alias name is optional
console.log(instructor); 


// ---------------------------------------JSON format----------------------------------------------------------

// {
//     "coursename" : "devcourse",
//     "fees" : "10000",
//     "courseinstructor" : "hitesh"
// }

[
    {},
    {},
    {}
]

