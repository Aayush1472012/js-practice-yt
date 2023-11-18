// array of strings -> ["", "", ""]
// array of objects -> [{}, {}, {}]

// we can iterate over 'Array', 'String', 'Map' using for-of loop, but we cannot iterate over 'Object' using for-of loop.


// Array
const myArr = [1, 2, 3, 4, 5];

for(const element of myArr){
    console.log(element);
}


// String
const greeting = "Hello World!!!";

for(const greet of greeting){
    console.log(greet);
}


// Map
const myMap = new Map();
myMap.set('IN', 'India');
myMap.set('UK', 'United Kingdom');
myMap.set('JP', 'Japan');
myMap.set('AUS', 'Australia');

for(const element of myMap){
    console.log(element);
}

for(const [key, value] of myMap){
    // used array destructuring
    console.log(`${key}:- ${value}`);
}


// Object
const myObj = {
    hero1: "Dr.Strange",
    hero2: "Ironman",
    hero3: "Hulk"
};

// "TypeError: myObj is not iterable"
// for(const element of myObj){
//     console.log(element);
// }