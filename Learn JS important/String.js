let name='i .love .java.script ';
console.log(name.length);

console.log(name.toUpperCase()); //makes all letters uppercase

console.log(name.toLowerCase()); //makes all letters lowercase

console.log(name.repeat(3)); //repeats the string 3 times

console.log(name.trim()); //removes whitespace from both ends of a string

console.log(name[0]); //accessing character at index 0

console.log(name[30]); //accessing character at index 30 (out of bounds, returns undefined)

console.log(name.charAt(30)); //accessing character at index 30 using charAt (out of bounds, returns empty string)

console.log(name.indexOf('y')); //finds the index of the first occurrence of 'y'

console.log(name.indexOf('z')); //finds the index of 'z' (not found, returns -1)

console.log(name.indexOf('a', 5)); //finds the index of 'a' starting from index 5

console.log(name.indexOf('java')); //finds the index of the substring 'java'

console.log(name.lastIndexOf('a')); //finds the index of the last occurrence of 'a'

console.log(name.slice(2)); //from index 2 to end

console.log(name.slice(2, 7)); //from index 2 to 7 (not including 7)

console.log(name.includes('love')); //checks if 'love' is in the string

console.log(name.includes('hate')); //checks if 'hate' is in the string

console.log(name.split(' ')); //splits the string into an array of substrings using space as the delimiter

console.log(name.split('' )); //splits the string into an array of individual characters

console.log(name.split('.')); //splits the string into an array of substrings using '.' as the delimiter

console.log(name.split('.' , 2)); //splits the string into an array of substrings using '.' as the delimiter, limit to 2 parts

console.log(name.replace('javascript', 'JS')); //replaces 'javascript' with 'JS'

//slice - substring - substr
console.log(name.slice(2, 7)); //from index 2 to 7 (not including 7)
console.log(name.slice(-4)); //last 4 characters

console.log(name.substring(2, 7)); //from index 2 to 7 (not including 7) 

console.log(name.substr(2, 5)); //from index 2, length 5

//string searching methods
          //indexOf: returns the index of the first occurrence of a specified value
          //lastIndexOf: returns the index of the last occurrence of a specified value
          //includes: checks if a string contains a specified value, returns true or false
          //startsWith: checks if a string starts with a specified value, returns true or false
          //endsWith: checks if a string ends with a specified value, returns true or false
console.log(name.indexOf('a')); //first occurrence of 'a'
console.log(name.lastIndexOf('a')); //last occurrence of 'a'
console.log(name.includes('love')); //checks if 'love' is in the string
console.log(name.includes('hate')); //checks if 'hate' is in the string
console.log(name.includes('a', 5)); //checks if 'a' is in the string starting from index 5
consolee.log(name.startsWith('i')); //checks if string starts with 'i' if yes returns true else false
console.log(name.startsWith('love', 2)); //checks if string starts with 'love' at index 2 if yes returns true else false
console.log(name.startsWith('aya')); //checks if string starts with 'aya' if yes returns true else false
console.log(name.endsWith('script ')); //checks if string ends with 'script ' if yes returns true else false
console.log(name.endsWith('java', 16)); //checks if string ends with 'java' at index 16 if yes returns true else false
console.log(name.endsWith('java.')); //checks if string ends with 'java.' if yes returns true else false
console.lod(name.endsWith('a', 15)); //checks if string ends with 'a' at index 15 if yes returns true else false
