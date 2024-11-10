# Linked Lists

## Description:

A **linked list** is a linear data structure consisting of elements called **nodes**, where each node points to the next
node in the sequence. Unlike arrays, linked lists do not use contiguous memory, which allows for **dynamic memory
allocation** and makes it easier to grow or shrink the list as needed. Each node in a linked list typically contains *
*two parts**:

1. **Data**: The value or data stored in the node.
2. **Pointer**: A reference (or pointer) to the next node in the list.

---

## Types of Linked Lists:

1. **Singly Linked List**:
    - Each node points only to the **next** node.
    - Traversal is **unidirectional** (from head to tail).

2. **Doubly Linked List**:
    - Each node contains pointers to **both** the next and the previous nodes.
    - Allows **bidirectional traversal** and easier deletions.

3. **Circular Linked List**:
    - The **last node points back to the first node**, forming a loop.
    - Can be singly or doubly linked, and is useful for implementing **circular queues**.

---

## Key Concepts and Operations:

### 1. **Traversal**

- Linked lists require **sequential traversal** from the head to access elements.
- **Access time** is linear, as each node must be visited until the desired node is found.

### 2. **Insertion**

- Inserting a new node at the **head** is efficient (O(1)).
- Inserting at an **arbitrary position** requires traversal to the desired location (O(n)).

### 3. **Deletion**

- Deletion from the **head** is efficient (O(1)).
- Deletion at an **arbitrary position** requires traversal to find the node (O(n)).

---

## Time Complexity:

| Operation | Singly Linked List | Doubly Linked List |
|-----------|--------------------|--------------------|
| Access    | O(n)               | O(n)               |
| Search    | O(n)               | O(n)               |
| Insertion | O(1) at head       | O(1) at head       |
| Deletion  | O(1) at head       | O(1) at head       |

**Note:**

- **Insertion** and **deletion** at arbitrary positions require O(n) time due to traversal.
- Doubly linked lists offer slightly **better deletion performance**, as you can traverse backward if needed.

---

## Use Cases:

- **Dynamic Size Requirements**: When the size of the data structure is unknown in advance.
- **Frequent Insertions/Deletions**: Especially at the head or tail of the list.
- **Memory Efficiency**: When you need to efficiently use memory without requiring contiguous blocks.
- **Implementation of Queues/Stacks**: Linked lists are used to implement stacks, queues, and circular buffers.

---

## Comparison with Arrays:

| Feature            | Linked List | Array             |
|--------------------|-------------|-------------------|
| Memory Allocation  | Dynamic     | Static or dynamic |
| Access Time        | O(n)        | O(1)              |
| Insertion (Head)   | O(1)        | O(n)              |
| Deletion (Head)    | O(1)        | O(n)              |
| Cache Friendliness | Poor        | Good              |

---

## Advantages of Linked Lists:

1. **Dynamic Size**: No need to define the size beforehand, as memory is allocated as needed.
2. **Efficient Insertions/Deletions**: Particularly when modifying elements at the head or tail.
3. **No Memory Wastage**: Only memory for existing nodes is used, unlike arrays that may pre-allocate space.

---

## Disadvantages of Linked Lists:

1. **Linear Access Time**: Accessing elements requires traversal, resulting in **O(n)** access time.
2. **Increased Memory Usage**: Each node requires additional memory for the pointer(s).
3. **Poor Cache Performance**: Linked lists are not cache-friendly due to non-contiguous memory usage.
4. **Complex Implementation**: Compared to arrays, linked lists are more complex to implement and maintain.

---

## Practical Applications:

1. **Dynamic Queues and Stacks**: Efficiently manage data structures with unknown or changing sizes.
2. **Graph Representations**: Adjacency lists in graphs use linked lists to represent edges.
3. **Undo Functionality**: Used in applications to maintain a history of operations (e.g., text editors).
4. **Memory Management**: In operating systems, linked lists are used for free memory tracking (linked lists of free
   memory blocks).

---

## Circular Linked List Use Case:

A **circular linked list** is particularly useful in **real-time systems** or **circular buffers**, such as:

- **Round-robin scheduling**: In operating systems for time-sharing between processes.
- **Music playlists**: Where the end of the list connects back to the beginning.

---

## Summary:

Linked lists are a powerful data structure, offering **dynamic memory allocation** and **efficient insertions/deletions
**. However, their linear access time and additional memory overhead for pointers make them less suitable for scenarios
requiring **random access** or **cache-friendly operations**. Mastery of linked lists is essential for solving problems
related to dynamic data, memory management, and implementing other complex data structures.
