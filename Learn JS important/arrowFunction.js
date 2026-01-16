//arrow function : a function defined using the "=>" syntax
//it does not have its own "this" context
//imporatant pour utilise => pour une fonction it word juste avec  one return statement



////traditional function
function add(a, b) {
    return a + b;
}   
console.log(add(2, 3)); //5


//arrow function
const addArrow = (a, b) =>  a + b;
console.log(addArrow(2, 3)); //5


//if there is only one parameter we can omit the parentheses
const square = x => x * x;
console.log(square(4)); //16

//if there are no parameters we use empty parentheses
const greet = () => 'Hello!';
console.log(greet()); //Hello!

//if the function body has multiple statements we use curly braces and a return statement
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(3, 4)); //12

//example with no parameters
let y = _ => 'Hello from arrow function!';
console.log(y()); //Hello from arrow function!

//example with multiple parameters more than parameters we need to use parentheses
let z = (x, y) => x + y;
console.log(z(5, 7)); //12