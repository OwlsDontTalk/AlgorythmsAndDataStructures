// Basic array operations

const numbers = [1, 2, 3, 4, 5];

// Access an element
console.log(numbers[0]); // Output: 1

// Adding an element at the end
numbers.push(6); // [1, 2, 3, 4, 5, 6]

// Removing the last element
numbers.pop(); // [1, 2, 3, 4, 5]

// 1. Standard array initialization
const arr1 = [1, 2, 3];

// 2. Initialize empty array
const arr2 = new Array();

// 3. Array of fixed length, filled with undefined by default
const arr3 = new Array(5);

// 4. Array of fixed length, filled with a specific value
const arr4 = Array(5).fill(0);

// 5. Using Array.from to create arrays from iterable objects or maps
const arr5 = Array.from({ length: 5 }, (v, i) => i + 1); // [1, 2, 3, 4, 5]

// 6. Spread syntax to copy or concatenate arrays
const arr6 = [...arr1, ...arr5]; // [1, 2, 3, 1, 2, 3, 4, 5]
