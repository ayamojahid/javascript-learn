//Object : An object is a collection of properties, and a property is an association between a name (or key) and a value.
//In JavaScript, almost everything is an object, including functions, arrays, and even primitive data types like strings and numbers when they are treated as objects.
//objects can be created using object literals, constructors, or the Object.create() method.

//first way to create an object using object literal we can add also functions in object
let car = {
    name: 'BMW',
    model: 'X5',
    color:['black', 'white', 'blue'],
    price: 60000,
    year: 2020,
   exemple: function() {
    return 'This is a car object';
}
}
console.log(car.exemple());
console.log(`Car name is : ${car.name}`);


//second way to create an object using constructor function


//third way to create an object using Object.create() method








//nested object object dans object

let users = {
//property
firstName: 'aya',
lasName: 'mojahid',
email:'test@gmail.com',
age: 26,
skills: ['html','css','js','python','php'],
active:true,
phoneNumber:{
first:'0106547687',
second: '0126574687' },
adress:{
    Maroc: 'Safi',
    Egypt: 'Cairo'
},
//method
isActive:function(){
if(users.active==true){
    return 'Hey user';
}else {
    return 'Sorry you are not active '
}
},
getAge:function(){
    if(this.age>18){
        return 'Your are allowed to access';
    }else {
        return 'You are not allow';
    }
}}

console.log(users);
console.log(users.firstName);
//or
console.log(users['firstName']);
console.log(users.adress.Maroc,users.adress.Egypt);

console.log(users.getAge());
console.log(users.isActive());


//create object
//ajoute data dans un objet en dehor
let us={
    nom:'salma'
};
console.log(us.nom);
console.log(us['nom']);
us.nom='aya';
us.prenom='mojahid';
us.nationality='maroc';
console.log(us.nom);
console.log(us.prenom);
console.log(us.nationality);

//ajoute des methode
us.fun = function(){
    return 'fun is work'
}
console.log(us.fun());



// object create call object dans une autre 
let user1={
    name:'aya',
    getName:function(){
        return `hello ${user1.name}`
    }
}
let user2 = Object.create(user1);
console.log(user2.name);
console.log(user2.getName());
user2.age=22;
console.log(user2.age);
//we have change le nom juste dans object de user2 mais still aya dans user1
user2.name='salma';
console.log(user2.name);


//avec {this} le nom quand on change it il chamge aussi dans la 2eme object qu on a cree
let user13 = {
    name:'soso',
    getName:function(){
        return `Hello ${this.name}`
    }
}

let user3 = Object.create(user13);
user3.name='salima';
console.log(user3.getName());


//assign object
let a1 = {
    num1:1
}
let a2 = {
    num2:2,
    hello(){
        return 'hai';
    } 
}
let a3 = {
    num3:3
}
let as = Object.assign(a1,a2,a3);
console.log(as);
console.log(as.hello());
//we can add new object
let as0 = Object.assign(a1,a2,a3, {
    num4:4
});
console.log(as0);
as0.num1=10;
as0.r='new one';
console.log(as0);









