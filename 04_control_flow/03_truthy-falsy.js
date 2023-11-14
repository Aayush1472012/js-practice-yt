// falsy values => false, 0, -0, 0n (BigInt), "", null, undefined, NaN, document.all
// truthy values => "0", "false", " ", [], {}, function(){}

const users = [];
const emptyObj = {};

if(users.length === 0){
    console.log("Array is empty!!!");
}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty!!!");
}




// Nullish Coalescing Operator (??): used for null, undefined.

let val1;
// val1 = 5 ?? 10;          // 5
// val1 = null ?? 10;       // 10
// val1 = undefined ?? 15;  // 15
val1 = null ?? 10 ?? 20;    // 10

console.log(val1);




// Terniary Operator (?:)

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than or equal to 80") : console.log("more than 80");
