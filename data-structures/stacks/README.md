# Stack

## Description:

A **stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This means that the *
*last element added** to the stack will be the **first one to be removed**. Stacks are commonly used when the order of
operations matters, especially when the most recent operation or data needs to be accessed first.

---

## Key Concepts and Operations:

### 1. **LIFO Principle**:

- The most recently added element (**top**) is the first to be removed.
- This ensures that the last task or operation is dealt with before previous ones, making it ideal for backtracking or
  managing nested operations.

### 2. **Basic Operations**:

- **Push**: Adds an element to the top of the stack.
- **Pop**: Removes the element from the top of the stack.
- **Peek**: Returns the top element without removing it.
- **isEmpty**: Checks whether the stack is empty.

---

## Time Complexity:

| Operation | Time Complexity |
|-----------|-----------------|
| Access    | O(n)            |
| Search    | O(n)            |
| Push      | O(1)            |
| Pop       | O(1)            |

**Explanation**:

- **Push** and **Pop** operations are **O(1)** because they only involve adding or removing the top element.
- **Access** and **Search** are **O(n)** because you may need to traverse through the entire stack to find a specific
  element.

---

## Types of Stacks:

1. **Simple Stack**:

- Basic stack with push and pop operations.

2. **Bounded Stack**:

- A stack with a predefined capacity. Push operations are restricted if the stack is full (stack overflow).

3. **Linked List-Based Stack**:

- Each element is represented as a node in a linked list, with dynamic memory allocation.

---

## Use Cases:

1. **Backtracking**:

- Used in algorithms (e.g., maze solving) to trace back the path when a dead end is reached.

2. **Undo/Redo Functionality**:

- Stores states or actions for applications like text editors or graphics software.

3. **Function Call Management**:

- The **call stack** in programming stores active function calls and supports recursion by tracking the order of calls.

4. **Expression Evaluation**:

- Converts and evaluates mathematical expressions (infix, postfix, or prefix).

5. **Depth-First Search (DFS)**:

- Manages nodes to explore in graph or tree traversal algorithms.

---

## Comparison with Queue:

| Feature          | Stack (LIFO)       | Queue (FIFO)        |
|------------------|--------------------|---------------------|
| Order            | Last In, First Out | First In, First Out |
| Insertion        | At the top         | At the rear         |
| Deletion         | From the top       | From the front      |
| Use Case Example | Call stack         | Task scheduling     |

---

## Memory Considerations:

1. **Overflow and Underflow**:

- **Overflow** occurs if a push operation is attempted on a full stack.
- **Underflow** occurs if a pop operation is attempted on an empty stack.

2. **Array vs. Linked List Implementation**:

- **Array-based stack**: Requires resizing if capacity is reached.
- **Linked list-based stack**: Avoids resizing by dynamically allocating memory for each new element.

---

## Practical Examples:

1. **Call Stack in Programming**:

- Tracks function calls and their return order, especially useful in recursive functions.

2. **Undo/Redo Functionality**:

- Used in applications like text editors to revert to previous states.

3. **Parsing Algorithms**:

- Handles parentheses or brackets matching in compilers or interpreters.

4. **Browser History**:

- Tracks visited pages, allowing users to navigate backward through history.

---

## Limitations of Stacks:

1. **Limited Access**:

- Only the top element can be accessed directly.

2. **Fixed Size (Array Implementation)**:

- May require resizing if capacity is reached, which can be computationally expensive.

3. **Not Ideal for Random Access**:

- Traversing the stack to access or search for a specific element is **O(n)**.

---

## Summary:

A **stack** is a powerful and simple data structure, ideal for managing **LIFO**-ordered operations. Its **O(1)
insertion and deletion** make it efficient for use cases like **backtracking, function call management, and undo
operations**. While stacks are limited in terms of direct access to elements, they play a crucial role in scenarios
where the most recently added data or task must be handled first. Understanding stack implementation strategies and
their appropriate use cases is essential for solving problems in computer science and software development.
