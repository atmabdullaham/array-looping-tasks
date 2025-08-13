/**
 * Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]
 */

// there are three ways to copy an array

const numbers = [1, 2, 3];
const numbers1 = Array.from(numbers)

console.log(numbers);
console.log(numbers1);

numbers1[0] = 20;
console.log(numbers1);

// system: 2
const numbers2 = [...numbers]
console.log(numbers2);
numbers2[0] = 22;
console.log(numbers2);


// system: 3

const numbers3 = [].concat(numbers);
console.log(numbers3);
numbers3[0] = 33;
console.log(numbers3);