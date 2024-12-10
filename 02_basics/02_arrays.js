const teenWolfs = ["Aplha" , "beta" , "Omega" , "Argents" , "Kitsune" ];
const marvelHeroes = ["IronMan" , "SpiderMan" , "Wolvevorine" , "Deadpool" , "Thor"];

teenWolfs.push(marvelHeroes);

console.log(teenWolfs); 
/* ['Aplha','beta','Omega','Argents','Kitsune',[ 'IronMan', 'SpiderMan', 'Wolvevorine', 'Deadpool', 'Thor' ]]     0 , 1 , 2 , 3 , 4 , [5]  -->array inside an array*/

console.log(teenWolfs[5][1]); //SpiderMan

//We can use concat to add array in array
const newTeenWolfs = ["Aplha" , "beta" , "Omega" , "Argents" , "Kitsune" ];
const newMarvelHeroes = ["IronMan" , "SpiderMan" , "Wolvevorine" , "Deadpool" , "Thor"];

const combinedArray = newTeenWolfs.concat(newMarvelHeroes);
console.log(combinedArray); /* ['Aplha',     'beta','Omega',     'Argents','Kitsune',   'IronMan','SpiderMan', 'Wolvevorine','Deadpool',  'Thor']*/

//We can achieve this by spread operator -->Its like drop a glass and it will spread in different pieces
const newCombinedHeroes = [...newMarvelHeroes , ...newTeenWolfs] // All elements will spread and print as an individual
console.log(newCombinedHeroes); /*['IronMan','SpiderMan','Wolvevorine','Deadpool','Thor','Aplha','beta',       'Omega','Argents','Kitsune'] */

const another_array = [1,2,3,[4,5],6,7,[8,9,[10,11,12]]] ;
console.log(another_array); // [ 1, 2, 3, [ 4, 5 ], 6, 7, [ 8, 9, [ 10, 11, 12 ] ] ]