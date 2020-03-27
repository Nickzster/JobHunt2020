# Arrays and Strings

## Key Principles

- Concepts are often interchangeable
- Dynamic Alocation & _Amortized_ insertion
  - When adding O(n) elements into a dynamic array, it will still mimic an O(n) runtime, even though reallocation occurs?
  - Why? _Amortized_ insertion of O(1), despite O(n) reallocation.
  - Amortized is a fancy way of saying "it's a wash", "it works out to be", "it balances out to"
- **BEWARE**: Array Slicing has a hidden cost of O(n) time and O(n) space!

## Key Operations

### Access

**Time Complexity:** O(1)
**Space Complexity:** O(1)

```javascript
let myArray = [0, 1, 2, 3, 4, 5];
//Access element 2
let number = myArray[2];
//Access element 0
let anotherNumber = myArray[0];
```

### Search

**Time Complexity:** O(n)
**Space Complexity:** O(1)

```javascript
let myArray = [0, 1, 2, 3, 4, 5];

function search(array, valueToFind) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToFind) return true;
  }
  return false;
}

search(myArray, 1); //for loop cycles twice
search(myArray, 3); //for loop cycles 4 times
search(myArray, 6); //for loop cycles 5 times (n=5), since it doesn't find 6.
```

### Insert

**Time Complexity:** O(n)
**Space Complexity:** O(1)

```javascript
let myArray = [0, 1, 2, 3, 4, 5];
myArray.push(6);
```

## Delete

**Time Complexity:** O(n)
**Space Complexity:** O(1)

```javascript
let myArray = [0, 1, 2, 3, 4, 5];
myArray.pop();
```

## Implementation

Usually implemented in each language, look above for specific operation implementations

## Applications / What can they be used for?

- Linear Search
- Contiguous element allocation
- Lists
