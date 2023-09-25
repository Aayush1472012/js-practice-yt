// Category (based on stroring & accessing variables) => 1. Primitive, and 2. Reference

//  ********** Primitive **********
// 7 Types: number, string, boolean, null, undefined, bigint, symbol

let score = 100;            // number
let floatScore = 100.2;     // number

let userName = "Aayush";    // string

let isLoggedIn = false;     // boolean
let outsideTemperature = null;  // null
let userEmail;              // undefined

let bigIntNumber = 1324938929038829820n;    // bigint

console.log(typeof score);                  // number
console.log(typeof floatScore);             // number
console.log(typeof userName);               // string
console.log(typeof isLoggedIn);             // boolean
console.log(typeof outsideTemperature);     // object
console.log(typeof userEmail);              // undefined
console.log(typeof bigIntNumber);           // bigint



// ********** Reference (Non-Primitive) **********
// Array, Object, Function

let arr = ["Aayush", "Kumar", "Patel"];

let newObj = {
    name: "Aayush",
    age: 21
};

let myFunc = function(){
    console.log("Hello World!!!");
};

console.log(typeof arr);        // object
console.log(typeof newObj);     // object
console.log(typeof myFunc);     // function



// Link to study => https://262.ecma-international.org/5.1/#sec-11.4.3