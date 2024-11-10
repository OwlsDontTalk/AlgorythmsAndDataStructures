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

const stack = new Stack();

stack.push(5); // Stack: [5]
stack.push(10); // Stack: [5, 10]
console.log(stack.pop()); // 10
console.log(stack.peek()); // 5
stack.printStack();