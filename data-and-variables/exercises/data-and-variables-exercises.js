// Declare and assign the variables below
let shuttleName = 'Determination';
console.log(typeof shuttleName)  

let shuttleSpeedMph = 17500;
console.log(typeof shuttleSpeedMph)  

let distanceToMarsKm = 225000000;
console.log(typeof distanceToMarsKm)  

let distanceToMoonKm = 38400;
console.log(typeof distanceToMoonKm)  

const milesPerKm = 0.621;
console.log(typeof milesPerKm)  

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log((shuttleName)+" will take "+(daysToMars)+" days to reach Mars")

// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log((shuttleName)+" will take "+(daysToMoon)+" days to reach the Moon.")
