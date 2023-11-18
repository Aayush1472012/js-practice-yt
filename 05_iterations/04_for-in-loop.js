// we can iterate over 'Objext', 'Array', 'String' using for-in loop, but we cannot iterate over 'Map' using for-in loop.

// Object
const myObj = {
    cpp: "C++",
    js: "JavaScript",
    py: "Python",
    php: "PHP",
    java: "JAVA"
};

for(const key in myObj){
    console.log(`${key}: ${myObj[key]}`);
}


// Array
const myArr = ['cpp', 'js', 'py', 'php', 'java'];

for(const index in myArr){
    console.log(myArr[index]);
}


// String
const myString = "JavaScript";

for(const index in myString){
    console.log(myString[index]);
}


// Map
const myMap = new Map();
myMap.set('IN', 'India');
myMap.set('UK', 'United Kingdom');
myMap.set('JP', 'Japan');
myMap.set('AUS', 'Australia');

// It will not work.
for(const element in myMap){
    console.log(element);
}