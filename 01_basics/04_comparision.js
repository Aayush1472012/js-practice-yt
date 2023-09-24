// ********** conditional between two operand of same datatype ***********

/*
    "we can predict output for conditional operation over operand of same datatype."
*/

console.log(2 > 1);     // true
console.log(2 < 1);     // false
console.log(2 == 1);    // false
console.log(2 != 1);    // true
console.log(2 >= 1);    // true
console.log(2 <= 1);    // false



// ********** conditional between two operand of different datatype ***********

console.log("2" > 1);   // true
console.log("02" > 1);  // true

/*
    "Avoid this type of operations, because we cannot predict output for conditional operation over operand of different datatype."
*/

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);



// ************** strict check (===) **************

console.log(2 === 2);   // true
console.log("2" === 2); // false
