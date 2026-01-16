//Comparing dans javascript 
let a = 5;
let b = 5;
//== compare values 
//=== compare values and types
//!= not equal values
//!== not equal values or types
//> greater than
//< less than
//>= greater than or equal to
//<= less than or equal to
console.log(a == b); //true, because == compares values after type coercion
console.log(a === b); //true, because === compares both value and type
console.log(a != b); //false, because != compares values after type coercion
console.log(a !== b); //false, because !== compares both value and type
console.log(a > 3); //true
console.log(a < 10); //true
console.log(a >= 5); //true
console.log(a <= 4); //false


let name1 = "John ";
console.log(name1.trim().length); // 4, removes whitespace and gets length

//logique AND (&&), OR (||), NOT (!)
// AND (&&) returns true if both operands are true
// OR (||) returns true if at least one operand is true
// NOT (!) negates the boolean value of the operand

let x = 10;
let y = 20;
console.log(x>5 && y<30); //true, both conditions are true
console.log(x>15 || y<30); //true, one condition is true
console.log(!(x>5)); //false, negates true to false