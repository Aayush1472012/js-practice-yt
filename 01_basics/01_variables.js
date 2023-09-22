const accountId = 12345;
let accountEmail = "ayush@gmail.com";
var accountPassword = "56789";
accountCity = "Surendranagar";
let accountState;   // default value of variable => 'undefined'

// accountId = 234; // Not Allowed with constants

accountEmail = "ad@ad.com";
accountPassword = "34567";
accountCity = "Pune";

console.log(accountId);

/*
Prefer not to use var,
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);