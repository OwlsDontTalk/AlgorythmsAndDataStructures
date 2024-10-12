# Linked Lists

## Description:
A linked list is a linear data structure where each element (node) points to the next. Unlike arrays, linked lists don’t use contiguous memory locations, allowing dynamic memory allocation.

## Key Points:
- Linked lists allow efficient insertions and deletions, but accessing elements requires traversal from the head.
- Types of linked lists: Singly, Doubly, Circular.
- Good for scenarios where you need to dynamically allocate memory.

## When to use:
- When frequent insertions/deletions are required.
- When you don’t know the size of the collection in advance.

## JavaScript Example:

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Print the list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
```