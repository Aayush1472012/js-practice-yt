// var -> function scoped
// let & const -> braces scoped

function testScopes(){
    if(true){
        var a = 10;
        let b = 20;
        const c = 30;
        console.log("Inner:", a);
        console.log("Inner:", b);
        console.log("Inner:", c);
    }

    console.log("Outer:", a);
    // console.log("Outer:", b);     // ReferenceError: b is not defined
    // console.log("Outer:", c);     // ReferenceError: c is not defined
}

testScopes();



// ************************ Hoisting ****************************
// hoisting means you can use variable/function before its declaration.

addOne(5);
// normal function
function addOne(value){
    console.log(value + 1);
}


// addTwo(5);      // ReferenceError: Cannot access 'addTwo' before initialization
// expression
const addTwo  = function(value){
    console.log(value + 2);
}