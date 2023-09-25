// Stack (stores primitive), Heap (stores references/non-primitive)

let name = "Aayush";

let fullName = name;
fullName = "Aayushkumar";

console.log(name);
console.log(fullName);



let userOne = {
    name: "Aayush",
    email: "Aayush@abc.com"
}

let userTwo = userOne;

userTwo.email = "ayush@xyz.com";

console.log(userOne);
console.log(userTwo);



// Image Resource => 1. https://felixgerschau.com/static/b94165593eb6e02d73039d8b2cfccfdd/c1b63/stack-memory-explained.png
//                   2. https://felixgerschau.com/static/b452488bd7eeac0405c48f164da6280d/c1b63/stack-heap-pointers.png