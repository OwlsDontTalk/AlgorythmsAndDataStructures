class HashTable {
  constructor(size = 53) {
    // Create an array to store data (buckets)
    this.buckets = new Array(size);
  }

  // Simple hash function to convert keys to array indices
  _hash(key) {
    let total = 0;
    const PRIME = 31; // Use a prime number for better distribution

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.buckets.length;
    }

    return total;
  }

  // Set a key-value pair in the hash table
  set(key, value) {
    const index = this._hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    // Check if the key already exists and update value if found
    for (let i = 0; i < this.buckets[index].length; i++) {
      const [storedKey] = this.buckets[index][i];
      if (storedKey === key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }

    // If key does not exist, add new entry
    this.buckets[index].push([key, value]);
  }

  // Get a value by key
  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const [storedKey, storedValue] = bucket[i];
        if (storedKey === key) return storedValue;
      }
    }

    return undefined;
  }

  // Delete a key-value pair
  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const [storedKey] = bucket[i];
        if (storedKey === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    }

    return false;
  }

  // Check if the table contains a key
  has(key) {
    return this.get(key) !== undefined;
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.set('name', 'Alice');
console.log(hashTable.get('name')); // Output: Alice
hashTable.delete('name');
console.log(hashTable.get('name')); // Output: undefined
