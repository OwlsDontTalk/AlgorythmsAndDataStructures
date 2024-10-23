# Linked Lists

## Description:
A linked list is a linear data structure where each element (node) points to the next. Unlike arrays, linked lists don’t use contiguous memory locations, allowing dynamic memory allocation.

## Key Points:
- Linked lists allow efficient insertions and deletions, but accessing elements requires traversal from the head.
- Types of linked lists: Singly, Doubly, Circular.
- Good for scenarios where you need to dynamically allocate memory.

### Time Complexity:
- **Access**: O(n)
- **Search**: O(n)
- **Insertion**: O(1) at the head, O(n) at arbitrary positions
- **Deletion**: O(1) at the head, O(n) at arbitrary positions

## When to use:
- When frequent insertions/deletions are required.
- When you don’t know the size of the collection in advance.
