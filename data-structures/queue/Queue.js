class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.rear === null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        if (this.front === null) this.rear = null;
        this.size--;
        return dequeuedValue;
    }

    peek() {
        return this.isEmpty() ? null : this.front.value;
    }

    isEmpty() {
        return this.size === 0;
    }
}

global.Queue = Queue;
