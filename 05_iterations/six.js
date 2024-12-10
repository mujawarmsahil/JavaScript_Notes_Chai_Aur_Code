const coding = ["js","CPP","python","ruby","c-language"]

const values = coding.forEach( (item) => //for each loop not return anything
    {
        console.log(item);
        return item; 
    }
)

console.log(values); //undefined

const nums =[1,2,3,4,5,6,7,8,9,10];
const newNum = nums.filter( (num) => num > 4 ); // implicit return the value
const newNum1 = nums.filter( (num) => 
{
    return num > 4 
}); // explicit return the value
console.log(newNum);
console.log(newNum1);

const newNum2 = []
nums.forEach((item) => 
{
    if(item > 4)
    {
            newNum2.push(item)
    }
})

console.log(newNum2);

// -------------------------------------------Example of filter------------------------------------------------
const books = [
    {
        title:'book one' , genre : 'Fiction' , publish :1981,edition : 2004
    },
    {
        title:'book two' , genre : 'Non-Fiction' , publish :1992,edition : 2002
    },
    {
        title:'book three' , genre : 'History' , publish :1999,edition : 2007
    },
    {
        title:'book four' , genre : 'Non-Fiction' , publish :1989,edition : 2010
    },
    {
        title:'book five' , genre : 'Science' , publish :2000,edition : 2014
    },
    {
        title:'book six' , genre : 'Fiction' , publish :1987,edition : 2010
    },
    {
        title:'book seven' , genre : 'History' , publish :1986,edition : 1996
    }
];

const result= books.filter( (book) =>
    {
        if(book.edition > 2000)
        {
            return book;
        }
    }
)

console.log(result);

const another_result = books.filter((book) => book.genre == 'Fiction' )

console.log(another_result);
