// Ways to create an object (Resource) => https://medium.com/@mandeepkaur1/creating-objects-in-javascript-a896e6cfa6eb

const mySym = Symbol('key1');

const JSUser = {
    name: "Aayush",
    "full name": "Aayush Patel",
    [mySym]: "mykey1",              // used symbol as a key
    age: 21,
    location: "Surendranagar",
    email: "ayushpatel@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Friday']
};


console.log(JSUser.email);
console.log(JSUser['email']);   // good way to access propery of an object
console.log(JSUser['full name']);
console.log(typeof mySym);
console.log(JSUser[mySym]);


console.log(Object.isFrozen(JSUser));   // Determines if an object was frozen

JSUser.email = "ayushpatel@yahoo.com";
// Object.freeze(JSUser);                  // Freezes an object. Other code cannot delete or change its properties.
console.log(Object.isFrozen(JSUser));
JSUser.email = "ayushpatel@google.com"
console.log(JSUser);

console.log(Object.hasOwn(JSUser, 'name'));     // Returns true if the specified object has the indicated property as its own property, or false if the property is inherited or does not exist.

console.log(JSUser.hasOwnProperty('full name'));


JSUser.greeting = function(){
    console.log(`Hello JS User, ${this['full name']}`);
}


JSUser.greeting();