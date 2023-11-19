// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer
// across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value
// may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the
// next element (index 1 instead of index 0).


const myArr = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4 + 5
const initialValue = 0;
const mySum = myArr.reduce( function(accumulator, currentValue){
    return accumulator + currentValue;
}, initialValue);

console.log(mySum);


const myTotal = myArr.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(myTotal);



// Real Life Example:
const shoppingCart = [
    {
        itemName: "javascript course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const priceToBePaid = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(`Price to be paid: ${priceToBePaid}`);