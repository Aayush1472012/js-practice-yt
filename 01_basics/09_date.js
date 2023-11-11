// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date();

console.log(myDate);    // returns a string representation of the current date and time '2023-11-11T12:48:53.800Z'
console.log(myDate.toString());     // returns a string in the format 'Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)'
console.log(myDate.toLocaleString());   // returns locale-specific date and time format '11/11/2023, 12:48:53 PM'
console.log(typeof myDate);         // returns datatype of myDate object


console.log(Date.now());    // returns number of miliseconds since the midnight at the beginning of January 1, 1970, UTC


let myCreatedDate1 = new Date(2023, 0, 11);     // create date object for '11-Jan-2023'
console.log(myCreatedDate1.toString());
let myCreatedDate2 = new Date(2023, 0, 11, 15, 12);      // create date object for '11-Jan-2023 3:12:00 PM'
console.log(myCreatedDate2.toString());
let myCreatedDate3 = new Date("01-11-2023");     // create date object for '11-Jan-2023'
console.log(myCreatedDate3.toString());
let myCreatedDate4 = new Date("2023-01-11");     // create date object for '11-Jan-2023'
console.log(myCreatedDate4.toString());


console.log(myCreatedDate2.getDate());  // returns date
console.log(myCreatedDate2.getTime());  // returns miliseconds for given date and time