//let numbers = ["orange","orange","apple"];
// const next = ["strawberry"];
const numbers = [1,2,3,4,5,6,7,6,7];
let uniquenumbers = [...new Set(numbers)];
console.log(uniquenumbers);
// let print = value=>console.log(value);
// let f = (...value)=> value.map(print);
// f(numbers);