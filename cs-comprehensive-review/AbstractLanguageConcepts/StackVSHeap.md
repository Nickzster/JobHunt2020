# Stack VS Heap

- Stack: Used for static memory allocation
- Heap: Used for dynamic memory allocation
- Both are stored in RAM

## Example: Runtime Stack Allocation - C++

```cpp
int number = 42;
char c = 'h';
```

## Example: Heap Allocation - C++

```cpp
int *number = 42;
char *c = 'h';
```

A basic list:

```cpp
struct node {
    int value;
    node *next;
};

void func() {
    node list;
    node ptr;
    list = new node;
    ptr = list;
    int number = 1;
    while(number < 6) {
        ptr->value = number;
        ptr->next = new node;
        ptr = ptr->next;
        number++;
    }
    ptr = list;
    while(ptr != NULL){
        std::cout << ptr.value << std::endl;
        ptr = ptr->next;
    }
    //The second while loop will print 1, 2, 3, 4, 5
}
```
