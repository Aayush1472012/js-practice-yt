const myArr = [1, 2, 5, 3, 7, 8, 4, 9, 6, 0];

// forEach loop returns nothing.
const returnedValue = myArr.forEach( (item) => {
    return item;
});
console.log(returnedValue);     // 'undefined', since nothing is returned from forEach().



// The filter() method of Array instances creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

const newNums = myArr.filter( (num) => {
    return num > 4;
});
console.log(newNums);

// perform the above operation using forEach()
const newNums2 = [];

myArr.forEach( (val) => {
    if(val > 4){
        newNums2.push(val);
    }
});
console.log(newNums2);


// Real Life Example:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let searchedBook = books.filter( (bk) => bk.genre === 'History');   // returns book with 'History' genre
console.log(searchedBook);

searchedBook = books.filter( (bk) => {
    return (bk.genre === 'History' && bk.publish >= 1995);
});     // returns book with 'History' genre and publish year >= 1995
console.log(searchedBook);