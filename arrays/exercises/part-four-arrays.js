let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

let concatenatedArray = holdCabinet1.concat(holdCabinet2);
    console.log("Concatenated Array:", concatenatedArray);
    console.log("Original holdCabinet1:", holdCabinet1);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?

let slicedArray1 = holdCabinet1.slice(0, 2);
let slicedArray2 = holdCabinet2.slice(0, 2);
    console.log("Slice of holdCabinet1:", slicedArray1);
    console.log("Original holdCabinet1:", holdCabinet1);
    console.log("Slice of holdCabinet2:", slicedArray2);
    console.log("Original holdCabinet2:", holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

holdCabinet1.reverse();
holdCabinet2.sort();
    console.log("Reversed holdCabinet1:", holdCabinet1);
    console.log("Sorted holdCabinet2:", holdCabinet2);