const user = {
    username: "Aayush",
    age: 21,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to course!!!`);
        console.log(this);      // points to current object
    }
};

user.welcomeMessage();
user.username = "Addy";     // changing context/object
user.welcomeMessage();

console.log(this);          // In node enviroment, it will point to global object {}. In browser, it will point to window object.




// ************* Different ways to declare a function *****************

// 1. Normal Function
function chai1(){
    let username = "Aayush";
    console.log(this);
}
// chai1();

// 2. Expression
const chai2 = function(){
    let username = "Aayush";
    console.log(this);
}
// chai2();

// 3. Arrow Function
const chai3 = () => {
    let username = "Aayush";
    console.log(this);      // {}
}
// chai3();



// ***** Different ways to declare arrow function *****

// const addTwoNumber = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwoNumber = (num1, num2) => num1 + num2;

const addTwoNumber = (num1, num2) => (num1 + num2);     // it is good to use ()

console.log(addTwoNumber(5, 7));