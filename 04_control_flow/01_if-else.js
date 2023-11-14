// Syntax:
// -----------------------
// if (condition) {
//     // if block logic
// } else {
//     // else block logic
// }


// <, >, <=, >=, ==, !=, ===, !== (conditional checking)


// if-else
const temperature = 42;

if(temperature < 50){
    console.log("Temperature is less than 50");
}else{
    console.log("Temperature is greater than or equal to 50");
}


// if-elseif-else
const balance = 1000;

if(balance < 500){
    console.log("Balance is less than 500");
}else if(balance < 1200){
    console.log("Balance is less than 1200");
}else{
    console.log("Balance is greater than or equal to 1200");
}



// combining multiple conditions (&& (and), || (or))

const userLoggedIn = true;
const debitCard = true;
const loggedInUsingGoogle = true;
const loggedInUsingEmail = false;

if(userLoggedIn && debitCard){
    console.log("Allow to buy a course!!!");
}

if(loggedInUsingGoogle || loggedInUsingEmail){
    console.log("User Logged In!!!");
}