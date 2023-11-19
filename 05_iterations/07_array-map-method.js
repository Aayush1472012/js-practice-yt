// The map() method of Array instances creates a new array populated with 
// the results of calling a provided function on every element in the calling array.

const myArr = [1, 2, 3, 4, 5, 6];

const newArr = myArr.map( (val) => val*2);
console.log(newArr);        // [2, 4, 6, 8, 10, 12]

// method chaining
const newArr2 = myArr
                .map( (val) => val*10)
                .map( (val) => val+1)
                .filter( (val) => val > 40);

console.log(newArr2);