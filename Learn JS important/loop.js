/*
for( initialization; condition; increment/decrement ){
    //code to be executed in each iteration
}  */
//increment examples
// Example 1: Simple for loop
for(let i=0 ; i<4 ;i+=1){
    console.log(i);
}

console.log('\n');
// Example 2: Another simple for loop 
for(let i=0 ; i<4 ;i++){
    console.log(i);
}

console.log('\n');
//decrement exemples
// Example 3: Simple for loop with decrement
for(let i=4 ; i>0 ;i-=1){
    console.log(i);
}

console.log('\n');
// Example 4: Another simple for loop with decrement
for(let i=4 ; i>0 ;i--){
    console.log(i);
}


//exercice tap aya de 0 a 8
for(let i=0 ; i<=8 ; i++) {
    console.log('aya '+ i);
}

//methode repetitive
let names=['aya' , 'fatima' , 'mahmoud' , 'ali'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

console.log('\n');
//avec loop
let names1=['aya' , 'fatima' , 'mahmoud' , 'ali'];
for( let i=0; i<=3; i++) {
    console.log(names1[i]);
}

console.log('\n');

//si je ne connais pas le nombres des noms 
let names2=['aya', 'fatima', 'mahmoud', 'ali', 'sara', 'youssef'];
for(let i=0 ; i< names2.length ; i++) {
    console.log(names2[i]);
}

console.log('\n');
let nam='aya mojahid';
for(let i=0 ; i<nam.length ;i++){
    console.log(nam[i]);
}

console.log('\n');

let na='fatima';
let reverse='';
for(let i=na.length-1 ;i>=0 ; i--){
    reverse += na[i];
}
console.log(reverse);
console.log(na.length);

//nasted loop : c'est une loop dans une loop
let cars=['bmw' , 'mercedes' , 'audi' , 'ford'];
let models=['2020' , '2021' , '2022' ,'2025'];
let colors=['red' , 'blue' , 'black' , 'white'];
for(let i=0 ; i<cars.length ; i++){
    console.log(`Car: ${cars[i]}`);
    for(let j=0 ; j<models.length ; j++){
        console.log(`Models: ${models[j]}`);
    }
    for(let k=0 ; k<colors.length ; k++){
        console.log(`Colors: ${colors[k]}`);
    } 
    console.log('-----');
}


//exercice de multiplication
let x=5;
let result1='';
for(let i=1 ; i<=10 ; i++)
{
    let result1 = x * i;
    console.log(`${x} * ${i} = ${result1}`);
}

//exercice
let y=prompt('enter a number to show its multiplication table');
for(let i=1 ; i<=10 ; i++)
{
    let result2 = y * i;
    console.log(`${y} * ${i} = ${result2}`);
}
