let num = 1001;

//Returns 'undefined'.

console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

let numAsString = String(num);
let numLength = numAsString.length;

console.log("Number of digits in the integer:", numLength);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let decimalNum = 123.45;
let decimalNumAsString = String(decimalNum);
let decimalLength = decimalNumAsString.replace('.', '').length;

console.log("Number of digits in the decimal value:", decimalLength);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }