const name = "Aayush Patel";
const repoCount = 10;

// Not a good way to print data, so try to avoid this type of operation to print data.
console.log(name + repoCount);

// Use this kind of method to print data. Beacause this more readable than above one.
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);


// other way to initialize a string
const siteName = new String('aayush-ad-com');

console.log(siteName[0]);   // a
console.log(siteName.__proto__);    // {} -> object which contains inbuilt method of JS String Object

// different string methods:
console.log(siteName.length);           // returns length of string
console.log(siteName.toUpperCase());    // returns new string which is converted to uppercase

console.log(siteName.charAt(3));        // returns a character which is present at given index ('3')
console.log(siteName.indexOf('u'));     // returns index of given character ('u')

const newString = siteName.substring(1,5);      // returns substring which contains character from index 1 to 4 (5 will not be included)
console.log(newString);

// slice can take negative value as a parameter as well, since it consider index like this 0(-length), 1(-(lentgh-1)), 2(-(length-2)), ...
const anotherString = siteName.slice(-13, 4);   // return substring which contains character from index -13(0) to 3 (4 will not be included)
console.log(anotherString);

const newNameString = "    Aayush     ";
console.log(newNameString);
console.log(newNameString.trim());      // returns new string which does not contain any extra space at start and end of given string


const url = "https://aayush.com/aayush%20patel";

console.log(url.replace('%20', '--'));   // replace given 1st character ('%20') with 2nd character ('-')
console.log(url.includes('aayush'));    // checks whether given string is part of main string or not
console.log(siteName.split('-'));       // return array of string which is created when main string is splited by given charcater