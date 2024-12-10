// {} --> scope 
//variable declared with var keyword can be accessed or changed outside in block scope
if (true) {
    let  a = 10; //it has block scope
    const b = 20; //it has block scope
    var c = 30; //It has global scope even if we declare the var in block scope
}

let personValue = 100
var humanvalue = 900
{
    humanvalue = 1
    let personValue = 20;
    console.log(`inner person value ${personValue}`)
}
// console.log(a);
// console.log(b);
console.log(`outer person value ${personValue}`)
console.log(`outer human value is unchanged ${humanvalue}`) //1
console.log(`value of c still accessed outside the scope ${c}`);

// +++++++++++++++++++++++++++++++++++ function scope ++++++++++++++++++++++++++++++++++++++++++++++++++

function courseInfo()
{
    const name = 'Devops'
    function source() {
        const platform = "youtube"
        console.log(`${name} course on ${platform} is starting very soon`)
    }
    // console.log(platform); give error it has scope within the source function
    source()
}

// console.log(name); ---> const , let cannot be accessed outside the 
courseInfo()

// same for if else scope 

// ++++++++++++++++++++++++++++ interesting things about declaration of function+++++++++++++

console.log(addOne(5)) //valid for function to call before defination
function addOne(value) { //Its called defination of function
    return value + 1
}

// console.log(addTwo(5)) --> not valid for expression to call it before the defination
const addTwo = (value) =>  //Its called expression
{
    return value + 2
}

console.log(addTwo(3))

