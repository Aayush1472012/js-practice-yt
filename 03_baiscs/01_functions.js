// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

function addTwoNumbers(number1, number2){
    return (number1 + number2);
}

const result = addTwoNumbers(5, 7);
console.log(`Result: ${result}`);



function loginUserMessage(username){
    if(username == undefined){
        console.log("please enter username!!!");
        return;
    }
    console.log(`Welcome, ${username}`);
}

loginUserMessage("Aayush");
loginUserMessage();



function calculateCartPrice(val1, val2, ...vals){
    return vals;
}
console.log(calculateCartPrice(100, 300, 500, 200, 400));



// pass object as argument in function
const user  = {
    name: "Aayush",
    age: 21
};

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

handleObject(user);
handleObject({
    name: "Addy",
    age: "25"
});



// pass array as an argument in function
const myArr = [100, 400, 200, 300];

function returnSecondElement(localArray){
    return localArray[1];
}

console.log(returnSecondElement(myArr));
console.log(returnSecondElement([390, 582, 683, 492]));