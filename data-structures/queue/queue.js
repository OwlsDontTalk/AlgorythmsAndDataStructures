// Node class for individual elements in the Queue
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Queue class implementing FIFO structure
class Queue {
    constructor() {
        this.front = null;  // Points to the front of the queue
        this.rear = null;   // Points to the rear of the queue
        this.size = 0;      // Keeps track of the number of elements in the queue
    }

    // Enqueue: Add an element to the end of the queue
    enqueue(value) {
        const newNode = new Node(value);

        if (this.rear === null) { // If queue is empty
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    // Dequeue: Remove the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }

        const dequeuedValue = this.front.value;
        this.front = this.front.next;

        if (this.front === null) { // If queue becomes empty after dequeuing
            this.rear = null;
        }

        this.size--;
        return dequeuedValue;
    }

    // Peek: Get the front element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.front.value;
    }

    // isEmpty: Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Print the queue elements
    print() {
        let current = this.front;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueues:");
queue.print(); // Output: 10, 20, 30

console.log("Peek:", queue.peek()); // Output: 10
console.log("Dequeue:", queue.dequeue()); // Output: 10

console.log("Queue after one dequeue:");
queue.print(); // Output: 20, 30
console.log("Is queue empty?", queue.isEmpty()); // Output: false
