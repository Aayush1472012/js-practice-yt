// Any Data Type ---> number

let score = "Aayush";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(valueInNumber);
// console.log(typeof(valueInNumber));     // number

// "10" => 10
// "10abc" => NaN
// true => 1; false => 0

// ------------------------------------------------------------


// Any Data Type ---> boolean

let isLoggedIn = "Aayush";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


// "Aayush" => true
// 1 => true; 0 => false; -1 => true
// "" => false
// null => false; undefined => false; NaN => false;

// -------------------------------------------------------------

// Any Data Type ---> string

let someNumber = "22";

let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof(stringNumber));  // string


// ==============================================================

// ********************** Operations ****************************

let value = 10;
let negValue = -value;

// console.log(negValue);

// console.log(2+2);   // 4
// console.log(2-2);   // 0
// console.log(2*2);   // 4
// console.log(2**3);  // 8
// console.log(2/3);   // 0.6666666666666666
// console.log(2%3);   // 2

let str1 = "Hello ";
let str2 = "Aayush";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log("1" + 2 + 3);   // 123  ("1"+2+3 => "12"+3 => "123")
// console.log(1 + 2 + "3");   // 33   (1+2+"3" => 3+"3" => "33")

// console.log(+true);     // 1
// console.log(+"");       // 0


// Link to study =>
// 1. https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion