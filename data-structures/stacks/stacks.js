// 1. Initialize an empty stack using the Stack class
const stack = new Stack();

// 2. Stack operations:
stack.push(5); // Stack: [5]
stack.push(10); // Stack: [5, 10]
console.log(stack.pop()); // 10
console.log(stack.peek()); // 5

// 3. Initialize using a plain array (alternative)
const arrayStack = [];
arrayStack.push(1); // Push to stack
arrayStack.push(2); // Push to stack
console.log(arrayStack.pop()); // Pop from stack -> Output: 2
