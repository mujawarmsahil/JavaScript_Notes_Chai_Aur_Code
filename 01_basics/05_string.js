const name = "Sahil";

const repoCount = 50;

// console.log(name + repoCount + "Value"); // Never use this type of methos to concatinate the string

//We have one more and modern method to concatinating the strings----> use backtips (` `) -- it gives benefit called string interpolation
//In this we make placehoder which can be directly injected
console.log(`Hello my name-is ${name} and my repocount is ${repoCount}`);//This  is called string interpolation

const gameName = new String("Sahil-manik mujawar-35"); //---> new way to define string --> In this string is a object which have key and value pairs

console.log(gameName.__proto__); // By this we can see the prototypes g string

// Methods for string 

// console.log(gameName.length());
console.log(gameName.charAt(2));
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('l'));
const newGame = gameName.substring(0,4);  //we cant give neg values to it
console.log(newGame);

const anotherGame = gameName.slice(-8,4); // it will print from backwords
console.log(anotherGame);

const newstringOne = "hitesh. ";
console.log(newstringOne);
console.log(newstringOne.trim()) // it is used to remove whitespace

const url = "https//mywebsite.com/my%20name";
console.log(url.replace('%20' , '-')); // .replace(search value , replace value)

console.log(url.includes('mywebsite')); // it is used to find is the value present in string or not


// when we want to split the string into several parts

console.log(gameName.split('-'));  // split(seperater , limit)--> this is used to split string uptop limit


// -----------------------------------------string methods------------------------------
// self session 
myName = "sahil manik mujawar";

console.log(myName.__proto__);
console.log(myName.at(1));
console.log(myName.big());
console.log(myName.blink());
console.log(myName.bold());
console.log(myName.charAt(3));
console.log(myName.charCodeAt(1));
console.log(myName.codePointAt("a"));
console.log(myName.concat("hello"));
// console.log(myName.String());
console.log(myName.endsWith());
fixed()
fontcolor()
fontsize()
includes()
indexOf()
isWellFormed()
italics()
lastIndexOf()
link()
localeCompare()
match()
matchAll()
normalize()
padEnd()
padStart()
repeat()
replace()
replaceAll()
search()
slice()
small()
split()
startsWith()
strike()
sub()
substr()
substring()
sup()
toLocaleLowerCase()
toLocaleUpperCase()
toLowerCase()
toString()
toUpperCase()
toWellFormed()
trim()
trimEnd()
trimStart()
trimEnd()
trimStart()
valueOf()
Symbol(Symbol.iterator)