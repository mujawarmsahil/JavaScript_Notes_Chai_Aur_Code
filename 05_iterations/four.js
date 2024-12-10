//for in loop = in this it will give keys only and using keys  we can access the values 
const myobj = {
    js : 'javascript',
    cpp : 'c plus plus',
    rb : 'ruby',
    swift : 'swift by app'
}

for (const key in myobj) {
    console.log(`${key} has a value ${myobj[key]}`);
}

const myArr = ["swift" ,"ruby" ,"cpp" ,"java" ,"js" ]
for (const key in myArr) {
    console.log(`${key} ----> ${myArr[key]} `);
}

const map = new Map();
map.set('IN',"India");
map.set('USA',"Unites states of america");
map.set('Fr',"France");
map.set('USA',"Unites india of america");

for (const key in map) { //map is not iterable for for in loop
    
}