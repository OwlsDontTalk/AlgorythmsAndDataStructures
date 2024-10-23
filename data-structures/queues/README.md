# Queue

## Description:
A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means the first element added to the queue will be the first one to be removed. Queues are commonly used in scenarios where the order of processing matters, such as task scheduling, printer queues, and breadth-first search algorithms.

## Key Points:
- Follows the **FIFO** (First In, First Out) principle.
- Common operations include:
  - **Enqueue**: Add an element to the end of the queue.
  - **Dequeue**: Remove the front element from the queue.
  - **Peek**: Look at the front element without removing it.
  - **isEmpty**: Check if the queue is empty.

### Time Complexity:
- **Access**: O(n)
- **Search**: O(n)
- **Insertion (enqueue)**: O(1)
- **Deletion (dequeue)**: O(1)

### Note for JavaScript:
- In JavaScript, you can implement a queue using an array. The native methods `push()` and `shift()` can be used to add and remove elements in a FIFO manner. However, using arrays in this way may not be the most efficient for large queues, as `shift()` can be costly due to reindexing.

## When to use:
- When you need to process data in the order it was received.
- Useful for task scheduling, breadth-first search (BFS), and handling asynchronous processes.
