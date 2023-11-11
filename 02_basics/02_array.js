const marvel_heros = ["Thor", "Ironman", "Dr.Strange", "Spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);     // ['Thor', 'Ironman', 'Dr.Strange', 'Spiderman', [ 'superman', 'batman', 'flash' ]]
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);     // ['Thor', 'Ironman', 'Dr.Strange', 'Spiderman', 'superman', 'batman', 'flash']
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];   // good way to concat multiple arrays
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const normal_array = another_array.flat(Infinity);  // returns flat array which contains single element
console.log(normal_array);



console.log(Array.isArray("Aayushkumar"));  // check whether given element is array or not
console.log(Array.from("Aayushkumar"));     // create and returns array generated from given element
console.log(Array.from({name: "Aayush"}));  // returns blank array since it is unable to select key or value to form array

let value1 = 10;
let value2 = 9;
let value3 = 2002;

console.log(Array.of(value1, value2, value3));  // returns an array which is generated from given all the values