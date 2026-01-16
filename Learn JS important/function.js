//function : c'est un block de code qui effectue une tache particuliere
// function nameOfFunction (parameters){
    //code to be executed
// }
// nameOfFunction(arguments); //appel de la function

// Example 1: Simple function without parameters
function calcule () {
 console.log(2 + 3);
}
calcule(); //appel de la function

// Example 2: Function with parameters
function pro(price,taxes,ads) {
    let product =price + taxes ;
    let result = product + ads ;
    console.log(result);
}
pro(100,20,10); //appel de la function avec des arguments
pro(200,40,20); //appel de la function avec des arguments


// Example 3: Function with return statement
// this function returns the age in days
function days(age) {
    let result = age * 365 ;
    return result;
}
let day = days(25); //appel de la function et stocker le resultat dans une variable

//cette fonction sert a calculer l'age en jours
function calcAgeByHours(age){
    let result = age * 24;
    return result;
}
let hour = calcAgeByHours(day); 
console.log(hour + 'hours');


 