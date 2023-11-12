// ways to create object

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Addy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aayush",
            lastname: "Patel"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = {obj1, obj2};  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const target = {};
// const obj4 = Object.assign(target, obj1, obj2, obj3);
// console.log(obj4 === target);

const obj4 = {...obj1, ...obj2};    // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj4);



const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
];


console.log(tinderUser);

console.log(Object.keys(tinderUser));       // Returns an array containing the names of all of the given object's own enumerable string properties.
console.log(Object.values(tinderUser));     // Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
console.log(Object.entries(tinderUser));    // Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.


// -------------------------------------------------------------------------------------------------------------------------------
// Object Destructring

const course = {
    coursename: "js basics",
    price: "999",
    courseInstructor: "Aayush"
};

const {coursename} = course;
const {courseInstructor: instructor} = course;

console.log(coursename);
console.log(instructor);