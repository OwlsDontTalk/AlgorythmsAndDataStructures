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
