# Stack

## Description:
A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. This means the last element added to the stack is the first one to be removed. Stacks are useful in scenarios where the most recent data is required first, such as undo operations, parsing expressions, and depth-first search algorithms.

## Key Points:
- Follows the **LIFO** (Last In, First Out) principle.
- Common operations include:
    - **Push**: Add an element to the top of the stack.
    - **Pop**: Remove the top element from the stack.
    - **Peek**: Look at the top element without removing it.
    - **isEmpty**: Check if the stack is empty.

### Note for JavaScript:
- In JavaScript, you can use an array to implement a stack, as arrays natively support `push()` and `pop()` methods for adding and removing elements from the end of the array.

## When to use:
- When you need to manage data in a LIFO order.
- Useful for undo operations in text editors, navigating browser history, and backtracking algorithms.

## JavaScript Example:

```javascript
// Stack implementation using an array in JavaScript

class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack (push)
  push(element) {
    this.items.push(element);
  }

  // Remove the top element from the stack (pop)
  pop() {
    if (this.isEmpty()) return 'Stack is empty';
    return this.items.pop();
  }

  // View the top element of the stack (peek)
  peek() {
    if (this.isEmpty()) return 'Stack is empty';
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print the stack elements
  printStack() {
    console.log(this.items.join(', '));
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
stack.pop();
stack.printStack(); // Output: 10, 20
```