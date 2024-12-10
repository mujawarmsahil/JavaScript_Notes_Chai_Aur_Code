// ---------------------------------------reduce---------------------------------------------------------
const newNum = [1,2,3];
const initialValue = 0;
const totSum = newNum.reduce( (accumulator,num) => {
    console.log(`${accumulator} and ${initialValue} and ${num}`);
    return accumulator+num ;
},0);
console.log(totSum);


const shoppingCart = [
    {
        courseName : "js course",
        coursePrice : 1000
    },
    {
        courseName : "web dev",
        coursePrice : 5000
    },
    {
        courseName : 'mobile dev',
        coursePrice : 5999
    }
]

const totPrice = shoppingCart.reduce( (initialVal , course) => initialVal + course.coursePrice ,0 );
console.log(totPrice); 