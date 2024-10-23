# Sorting Algorithms

This section contains sorting algorithms implemented in JavaScript.

## Bubble Sort:
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

- **Time Complexity**: O(n²) in the worst and average case, O(n) in the best case (when the array is already sorted).
- **Space Complexity**: O(1) (in-place sorting).
- **When to use**: Useful for small datasets or when teaching sorting algorithms, but not efficient for large datasets.

## Selection Sort:
Selection Sort is an in-place comparison sorting algorithm. It divides the input array into two parts: the **sorted part** at the beginning and the **unsorted part** that remains to be sorted. In each iteration, it selects the smallest element from the unsorted part and swaps it with the first unsorted element.

- **Time Complexity**: O(n²) in the worst, average, and best case.
- **Space Complexity**: O(1) (in-place sorting).
- **When to use**: Useful when memory usage is critical and when sorting small datasets. However, it’s not efficient for large datasets due to its O(n²) time complexity.
