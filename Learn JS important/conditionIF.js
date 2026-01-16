//condition if 
// 1. Simple if statement
//if: condition is true, execute the block of code
//if else: condition is false, execute the else block of code
//if else if else: multiple conditions to check

// Example 1: Simple if statement
 let age = 20;
 if (age > 18) {
     console.log("You are an adult.");
 }

// Example 2: if-else statement
 let note=20;
 if (note >= 10){
        console.log("You passed the exam.");
 }
else {
    console.log("You failed the exam.");
}

// Example 3: if-else if-else statement
 let score = 85;
    if (score >= 90) {
        console.log("Grade: A");
    }
    else if (score >= 80) {
        console.log("Grade: B");
    }
    else if (score >= 70) {
        console.log("Grade: C");
    }
    else {
        console.log("Grade: F");
    }

// example 4:  User role check 
let role = prompt('what is your role?');

if (role === 'admin') {
    console.log('You have full access.');
}
else if (role === 'editor') {
    console.log('You can edit content.');
}
else if (role === 'viewer') {
    console.log('You can view content.');
}
else {
    console.log('Role not recognized.');
}


// Example 5: 
let result= prompt('what is your result?');
if (result>=90){
    document.write('excellent');
}
else if (result>=80){
    document.write('very good');
}
else if (result>=70){
    document.write('good');
}
else if (result>=50){
    document.write('acceptable');
}
else {
    document.write('fail ');
}

//anather way for if with ? and :
age =prompt('what is your age?');
age >=18 ?
document.write(' you are an adult')
:
document.write(' you are a minor');

// Example 6:  
agee=prompt('what is your age?');
agee >=18 ?
document.write(' you are an adult')
:agee <18 ?
document.write(' you are a minor')
:document.write(' age not valid');

//SWTCH: to check multiple conditions based on a single expression value
//exemple
let role1 = prompt('what is your role?');
switch (role1) {
        case 'admin':
        document.write('You have full access.'); 
        break;  
        case 'editor':
        document.write('You can edit content.'); 
        break;
        case 'viewer':
        document.write('You can view content.'); 
        break;
        default:
        document.write('Role not recognized.');
}


