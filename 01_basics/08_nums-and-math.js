// ********************** Nums ****************************

const score = 400;      // implicitly it detects its datatype (eg. Number)
console.log(score);     // 400

const balance = new Number(100);    // variable of number is created and it also comes with properties of Number datatype
console.log(balance);   // [Number: 100]

console.log(balance.toString().length);     // prints length of variable 'balance'
console.log(balance.toFixed(2));            // 100.00

const otherNumber = 123.8493;

console.log(otherNumber.toPrecision(2));    // 1.2e+2
console.log(otherNumber.toPrecision(3));    // 124
console.log(otherNumber.toPrecision(4));    // 123.8

const hundreds = 1000000
console.log(hundreds.toLocaleString());         // 1,000,000    -> english standard
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000    -> indian standard


// =====================================================================

// ***************************** Math **********************************

console.log(Math);                      // Object [Math] {}
console.log(Math.abs(-4));              // 4
console.log(Math.round(4.6));           // 5
console.log(Math.ceil(4.2));            // 5
console.log(Math.floor(4.9));           // 4
console.log(Math.min(4, 3, 6, 8));      // 3
console.log(Math.max(4, 3, 6, 8));      // 8

console.log(Math.random());     // generate number between 0 to 1
console.log((Math.random()*10) + 1);    // generate number between 0 to 10
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generate number between 10 to 20