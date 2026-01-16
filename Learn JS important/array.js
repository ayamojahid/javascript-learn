//Array
let names = ['Alice', 'Bob', 'Charlie', 'David'];
console.log(names.length); //length of the array
console.log(names);
console.log(names[0]); //accessing first element
console.log(names[2]); //accessing third element
console.log(names[names.length - 1]); //accessing last element

let objects = [10, 'Hello', true, null, undefined, { key: 'value' }, [1, 2, 3]]; //mixed data types
console.log(objects);

let objects1 =[10, 'Hello', true , [1,2,3]];

console.log(objects1[3][1]); //accessing second element of the nested array

let fruits = ['Apple', 'Banana', 'Cherry'];
fruits[1] = 'Blueberry'; //modifying second element
console.log(fruits);

//add and remove elements from array
     //push: adds element(s) to the end of the array
     //pop: removes the last element from the array
     //unshift: adds element(s) to the beginning of the array
     //shift: removes the first element from the array
     //splice: adds/removes element(s) at a specified index
let colors = ['Red', 'Green', 'Blue'];
colors.push('yellow'); //adding element at the end
console.log(colors);
colors.unshift('Purple'); //adding element at the beginning
console.log(colors);
colors.pop(); //removing last element
console.log(colors);
colors.shift(); //removing first element
console.log(colors);
colors.splice(1, 1); //removing element at index 1
console.log(colors);
colors.splice(1, 0, 'Orange'); //adding element at index 1
console.log(colors);

//splice and slice array
      //splice (start, deleteCount, item1, item2, ...): modifies the array by removing or replacing existing elements and/or adding new elements in place
      //slice (start, end): returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers2.splice(2, 3); //removing 3 elements from index 2
console.log(numbers2);
numbers2.splice(1,1); //removing 1 element from index 1


let nam=['John', 'Jane', 'Doe', 'Smith', 'Emily'];
nam.splice(0,1,'aya','mahmoud'); //removing 1 element from index 0 and adding 'aya' and 'mahmoud'
console.log(nam);
console.log(nam.slice(0,2)); //slicing from index 0 to 2 (not including 2)
console.log(nam.slice(2, 5)); //slicing from index 2 to 5 (not including 5)
console.log(nam.slice(-3, -1)); //slicing last 3nd element to last 1st element (not including last 1st element)


//search in array
        //indexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present
        //lastIndexOf: returns the last index at which a given element can be found in the array, or -1 if it is not present
        //includes: determines whether an array includes a certain element, returning true or false as appropriate
let animals = ['cat', 'dog', 'fish', 'bird', 'dog' , 'goldfish' , 'cat' ];
console.log(animals.indexOf('dog')); //first occurrence of 'dog'
console.log(animals.indexOf('cat',1)); //first occurrence of 'cat' starting from index 1
console.log(animals.indexOf('lion')); //not found, returns -1
console.log(animals.lastIndexOf('cat')); //last occurrence of 'cat'
console.log(animals.lastIndexOf('dog',3)); //last occurrence of 'dog' up to index 3 
console.log(animals.lastIndexOf('lion')); //not found, returns -1
console.log(animals.includes('fish')); //checks if 'fish' is in the array
console.log(animals.includes('tiger')); //checks if 'tiger' is in the array
console.log(animals.includes('dog',2)); //checks if 'dog' is in the array starting from index 2

//sort and reverce array
     //sort: sorts the elements of an array in place and returns the sorted array
     //reverse: reverses the order of the elements of an array in place and returns the reversed array
let arr = ['aya', 'mahmoud', 'john', 'doe', 'alice'];
arr.sort(); //sorting array in ascending order from A to Z 
console.log(arr);
arr.reverse(); //reversing the array
console.log(arr);

let numsar = [5, 2, 9, 1, 3, 6, 4, 7, 8];
numsar.sort(); //sorting array in ascending order
console.log(numsar);


//concat and join array
     //concat: is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
     //join: joins all elements of an array into a string
let arrconcat1 = ['a', 'b', 'c'];
let arrconcat2 = ['d', 'e', 'f' ];
let mergedArray1 =arrconcat1+arrconcat2; //merging two arrays
let mergedArray2=arrconcat1.concat(arrconcat2); //merging two arrays using concat
console.log(mergedArray1);
console.log(mergedArray2);
arrconcat1+=arrconcat2; //merging two arrays using +=
console.log(arrconcat1+=arrconcat2); //note that this converts the array to string
console.log(arrconcat1.concat( 'g', 'h')); //merging array with individual elements using concat

let arrjoin = ['Hello', 'World', 'from', 'JavaScript'];
let joinedString = arrjoin.join(' '); //joining array elements into a string with space separator
console.log(joinedString);
let joinedString2 = arrjoin.join('-'); //joining array elements into a string with hyphen separator
console.log(joinedString2);
let joinedString3=arrjoin.join('#'); //joining array elements into a string with # separator
console.log(joinedString3);



//exercice 1
/*
1️⃣ Supprime les espaces au début et à la fin
2️⃣ Mets tout en minuscules
3️⃣ Vérifie si le mot "javascript" existe
4️⃣ Trouve la position de "love" */


let text = "  I love JavaScript  ";
console.log(text = text.trim()); //1️⃣
console.log(text.toLowerCase()); //2️⃣
console.log(text.includes("javascript")); //3️⃣
console.log(text.indexOf("love")); //4️⃣

//exercice 2
/*
1️⃣ Extrais "Program"
2️⃣ Extrais "ming"
3️⃣ Vérifie si le mot commence par "Pro" */

let word = "Programming";
console.log(word.slice(0,7)); //1️⃣
console.log(word.slice(7,11)); //2️⃣
console.log(word.startsWith("Pro")); //3️⃣


//exercice 3
/*
1️⃣ Ajoute "mango" à la fin
2️⃣ Supprime "banana"
3️⃣ Ajoute "kiwi" au début */

let fruits3 = ["apple", "banana", "orange"];
fruits3.push("mango"); //1️⃣
console.log(fruits3);
fruits3.splice(fruits3.indexOf("banana"), 1); //2️⃣
console.log(fruits3);
fruits3.unshift("kiwi"); //3️⃣
console.log(fruits3);


//🔹 EXERCICE 4 — SEARCH IN ARRAY
/*
1️⃣ Vérifie si "Sara" existe
2️⃣ Trouve l’index de "Omar"
3️⃣ Trouve le premier nom qui contient la lettre "a" */

let users3 = ["Ali", "Sara", "Omar", "Aya"];
console.log(users3.includes("Sara")); //1️⃣
console.log(users3.indexOf("Omar")); //2️⃣

//EXERCICE 5 — SORT & REVERSE
/*
1️⃣ Trie les nombres correctement (attention 👀)
2️⃣ Inverse l’ordre du tableau */
let numbers4 = [4, 1, 9, 2 ,3 , 8, 5, 7, 6];
numbers4.sort(); //1️⃣
console.log(numbers4); 
numbers4.reverse(); //2️⃣
console.log(numbers4);



