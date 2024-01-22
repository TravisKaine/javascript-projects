let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log("Split without parameter:", str.split());
console.log("Split with 'e':", str.split('e'));
console.log("Split with ' ':", str.split(' '));
console.log("Split with '':", str.split(''));

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log("Join without parameter:", arr.join());
console.log("Join with 'a':", arr.join('a'));
console.log("Join with ' ':", arr.join(' '));
console.log("Join with '':", arr.join(''));

//3) Do split or join change the original string/array?

console.log("Original str:", str);
console.log("Original arr:", arr);

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let alphabetizedArray = cargoHold.split(',').sort();
let newString = alphabetizedArray.join(',');
console.log("Alphabetized cargoHold:", alphabetizedArray);
console.log("Combined contents into a new string:", newString);