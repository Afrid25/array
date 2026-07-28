const number1 = [23, 24, 43,232,53,42,64,734];

const number2 = [64, 327,846,64,6858];

const allnumbers = number1.concat(number2);

console.log(allnumbers);

// how to join number? 

const numbers =[3,6,5,2,8,9,0];
const joined  = numbers.join(', ');

console.log(joined);


// indexof use 

const position = numbers.indexOf(2);

console.log(position);

// check array . 

console.log(Array.isArray(numbers));