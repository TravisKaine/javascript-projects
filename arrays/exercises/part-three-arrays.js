let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

//Use splice to make the following changes to the cargoHold array. Be sure to print the array after each step to confirm your updates.

//1) Insert the string 'keys' at index 3 without replacing any other entries.

cargoHold.splice(3, 0, 'keys');
    console.log("After inserting 'keys':", cargoHold);

//2) Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).

let indexOfInstructionManual = cargoHold.indexOf('instruction manual');
    if(indexOfInstructionManual !== -1){
         cargoHold.splice(indexOfInstructionManual, 1);
            console.log("After removing 'instruction manual':", cargoHold);
}else{
            console.log("'instruction manual' not found in the array.");
}

//3) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.

cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
    console.log("After replacing elements at indexes 2 - 4:", cargoHold);
