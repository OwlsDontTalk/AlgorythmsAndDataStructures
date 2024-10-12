# Arrays

## Description:
An array is a collection of items stored at contiguous memory locations. Arrays in JavaScript are used to store multiple values in a single variable.

## Key Points:
- Arrays allow you to store multiple values and access them via indices.
- Arrays are great for situations where the number of elements is fixed or predictable.
- Arrays are efficient for reading values but can be slow for inserting or deleting elements in the middle.

## When to use:
- Storing collections of data where elements can be indexed and accessed in constant time.
- When you need a simple, ordered list of elements.

## JavaScript Example:

```javascript
// Create an array
const numbers = [1, 2, 3, 4, 5];

// Access an element
console.log(numbers[0]); // 1

// Add an element
numbers.push(6); 

// Remove an element
numbers.pop();

// Iterate over an array
numbers.forEach(num => console.log(num));
```