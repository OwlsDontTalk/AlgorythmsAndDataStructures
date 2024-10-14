// Queue implementation using an array in JavaScript

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the queue (enqueue)
    enqueue(element) {
        this.items.push(element);
    }

    // Remove the front element from the queue (dequeue)
    dequeue() {
        if (this.isEmpty()) return 'Queue is empty';
        return this.items.shift(); // Remove the first element
    }

    // View the front element of the queue (peek)
    peek() {
        if (this.isEmpty()) return 'Queue is empty';
        return this.items[0]; // The first element
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the queue elements
    printQueue() {
        console.log(this.items.join(', '));
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek()); // Output: 10
queue.dequeue();
queue.printQueue(); // Output: 20, 30
