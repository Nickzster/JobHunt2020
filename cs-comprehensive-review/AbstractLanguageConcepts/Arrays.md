# Arrays (Static VS Dynamic)

# Static Array

- Array size is determined at compile time.

## Declaring a static array

### Javascript

```javascript
let myArr = new Array(10);
```

### C++

```cpp
int myArrayOfInts [10];
```

```cpp
int myArrayOfInts[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
```

```cpp
int myArrayOfInts[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
```

# Dynamic Array

- Array size is unbound: Elements can be pushed and removed at will, and the size of the array can change.

## Declaring a dynamic array

### Javascript

```javascript
let myArr = [];
```

```cpp
void someFunction(){
    int size = 10; //notice how there is NOT a const keyword
    int *myArray = new int[size];
}
//since cpp uses pointers for dynamic arrays, don't forget to clean them up!
```

# Assessing Tradeoffs

- **Benefit of Static:** Size is allocated during compile time / initalization. Ensures fastest possible operations on the array.
- **Pitfall of Static:** Since the size is fixed, new elements cannot be added into the array.
- **Benefit of Dynamic:** Size is not fixed, allowing as many elements as the user wants / needs
- **Pitfall of Dynamic:** Since the size is not fixed, it can be very clostly to allocate a new element.
- **Pitfall of Dynamic:** In languages like C++, where dynamic arrays are utilized with pointers, you have to remember to clean them up.
