const coding = ["js","CPP","python","ruby","c-language"]

// forEach method required a callback function and callback function doesnt have any name. syntax:-function (){write your logic}

coding.forEach( function (items) {
    console.log(items);
});

coding.forEach( (val) => {
    console.log(val);
});

function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe); //we are giving reference of function

coding.forEach((item,index , arr) => { // we can give more parameter too
    console.log(item,index,arr);
});
//------------------------------common scenarios------------------------
const myCoding = [
    {
        languageName : "javasript",
        languageFileName :"js"
    },
    {
        languageName : "java",
        languageFileName :"java"
    },
    {
        languageName : "c++",
        languageFileName :"cpp"
    },
    {
        languageName : "Python",
        languageFileName :"py"
    }
]

myCoding.forEach((element) => {
    // console.log(itme.languageFileName);
    for (const key in element) {
        console.log(`${key} has a value ${element[key]}`);
    }
});