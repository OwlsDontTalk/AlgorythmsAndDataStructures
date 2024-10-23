# Hash Table

## Description:
A **Hash Table** (or Hash Map) is a data structure that maps keys to values using a **hash function**.
It allows fast access to values based on keys, making insertion, deletion, and search operations efficient.

## Key Points:
- **Time complexity**: Average case for insertion, deletion, and lookup is **O(1)**. In the worst case (due to collisions), operations can be **O(n)**.
- **Hash function**: A function that converts a key into an index to store the value in an underlying array.
- **Collision handling**: When two keys generate the same hash, a collision occurs. Common techniques for handling collisions include:
  - **Separate chaining**: Each array index stores a linked list of entries.
  - **Open addressing**: Uses probing to find the next available slot in case of collisions.

### Time Complexity:
- **Search**: O(1) on average, O(n) in the worst case
- **Insertion**: O(1) on average, O(n) in the worst case
- **Deletion**: O(1) on average, O(n) in the worst case

## When to use:
- When you need **fast lookups** by key, such as for caches, dictionaries, or counting elements.
- When duplicate keys are not allowed.
