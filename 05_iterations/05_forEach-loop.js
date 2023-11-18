// used to iterate over an array

const myArr = ['cpp', 'js', 'py', 'php', 'java'];

// Different ways to add callback function
// 1. using anonymous function
myArr.forEach(function(val){
    console.log(val);
});

// 2. using arrow function
myArr.forEach((val)=>{
    console.log(val);
});

// 3. using function reference
myArr.forEach(printVal);

function printVal(val){
    console.log(val);
}

// 4. printing value, index & whole array
myArr.forEach((val, index, arr) => {
    console.log(val, index, arr);
})



// array of objects
const programming = [
    {
        languageName: "JavaScript",
        fileExtension: 'js'
    },
    {
        languageName: "Java",
        fileExtension: 'java'
    },
    {
        languageName: "C++",
        fileExtension: 'cpp'
    },
    {
        languageName: "Python",
        fileExtension: 'py'
    }
];

programming.forEach((item) => {
    console.log(item.languageName);
})