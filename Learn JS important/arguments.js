//arguments : This object represents the arguments passed to a function.


//je veux dire bonjour a quelqu'un mais si jai aucun nom je dis bonjour a User a la place de undefined
function hola(name='User') {
console.log(`Hello ${name}`);
}
hola();

// je veux calculer l'age en jours mais si je ne passe pas d'age je veux que ce soit 0 par defaut a la place de NaN
function calcAge(age='0') {   //age thats parameter
    console.log(age*365);
}
calcAge();  //this is argument


// si je veux calcules tout les argument donne par lutilisateur je ne connu pas le nombre d'argument a lavance

function sumAll(...numbers) {
    let sum = 0;
for(let i=0; i<numbers.length; i++) {
    sum=sum+ numbers[i];
}
console.log(`La somme est: ${sum} `);}
sumAll(3,6,3,6,98,20); 


//
function average( ...nums) {
    let sum=0;
for(let i=0; i<nums.length; i++) {
    sum=sum + nums[i];
}
console.log(`La moyenne est: ${sum/nums.length}`);}

average(3,6,9,12,15); //45/5=9
