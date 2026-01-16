// for : to repeat a block of code a specified number of times
//if : to break the loop when a condition is met
//continue : to skip an iteration when a condition is met
//break : to exit the loop entirely


// Example 1: Using continue in a for loop

let users = ['aya', 'fatima', 'mahmoud',1,2,3,4,5, 'ali', 'sara', 'youssef'];
for(let i=0 ; i<users.length ; i++){
    if (typeof users[i]== 'number'){
        continue; //skip numbers
    }
    console.log(users[i]);
}

// Example 2: Using break in a for loop

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i=0 ; i<numbers.length ; i++){
    if (numbers[i] > 5){
        break; //exit loop when number is greater than 5
    }
    console.log(numbers[i]);
}

// Example 3: Using continue and break together

let mixedArray = [1, 'aya', 2, 'fatima', 3, 'mahmoud', 4, 'ali', 5, 'sara'];
for(let i=0 ; i<mixedArray.length ; i++){
    if (typeof mixedArray[i] === 'number'){
        continue; //skip numbers
    }
    if (mixedArray[i] === 'ali'){
        break; //exit loop when 'ali' is found
    }           
    console.log(mixedArray[i]); }


    /* while : to repeat a block of code as long as a specified condition is true
     while(condition){
     code to be executed
     } */

    // loop : to execute a block of code multiple times
    
    /* do while : similar to while loop, but the block of code is executed at least once before checking the condition
     do {
         //code to be executed
     } while (condition); */

// Example 1: Using while loop
let i = 0;
while (i<5){
    console.log("love u");
    i++;
}
console.log('\n');

// Example 2: Using do-while loop
let j = 0;
do {
j++;
    console.log("hate u");
} while(j<5){
    console.log("miss u");
};

console.log('\n');
