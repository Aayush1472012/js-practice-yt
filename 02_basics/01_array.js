// ways to create an array
const myArr = [1, 2, 3, 4, 5];
const myArr2 = new Array(1,2,3);

const myHeros = ['shaktiman', 'naagraj'];
console.log(myArr);
console.log(myArr[2]);


// Array Methods

myArr.push(6);  // insert element at end of an array
console.log(myArr);
myArr.unshift(-1);   // insert element at start of an array
console.log(myArr);

myArr.pop();    // remove element from end of array
console.log(myArr);
myArr.shift();  // remove element from start of array
console.log(myArr);


console.log(myArr.includes(9));     // returns whether '9' is part of array or not
console.log(myArr.indexOf(3));      // return index of '3'


const newArr = myArr.join();        // returns string which is formed by joining all the element of an array
console.log(newArr);
console.log(typeof newArr);


// slice v/s splice

console.log("A: ", myArr);

const myNewArr1 = myArr.slice(1,4);     // returns new sub-array, but does not modify original array.
console.log(myNewArr1);
console.log("B", myArr);

const myNewArr2 = myArr.splice(1,4);     // returns sub-array and removes that sub-array from the original array.
console.log(myNewArr2);
console.log("C", myArr);