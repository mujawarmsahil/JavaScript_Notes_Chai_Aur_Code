const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.map( (num) =>
    {
        return num+10;
    }
)

const forEach =  [];
myNums.forEach((num) =>
{
    forEach.push(num+10);
}
)
console.log(newNums);

// ------------------------chaining------------------------------
// chaining means using 2 or more method on a single object on single time 

const newNum = [1,2,3,4,5,6,7,8,9,10];

const result = newNum.map((num) => num * 10).filter((num) => num > 40);
console.log(result);