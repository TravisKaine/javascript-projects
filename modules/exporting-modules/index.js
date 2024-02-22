// Import the modules exported from practiceExports.js below:
const practice = require('./practiceExports.js');
let arr = ["Hello", 'world', 123, 987, 'LC101']

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));

for (i=0; i<3; 1++){
    console.log(practice.randomArrayElement(arr));
}