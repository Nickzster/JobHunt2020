# Advanced Concepts

## Generalization VS Abstraction

**Abstraction**: Specifying a framework & hiding implementation detail.

- Blueprint to follow while implementing the details.
- **Program to an interface, not an implementation**

## Abstract Class VS Concrete Class

- An **abstract** class is a blueprint
- A **concrete** class is a concrete object

### Abstract Class Example: C++

```cpp
#ifndef __ANIMAL__
#define __ANIMAL__
class Animal
{
public:
    virtual void talk() = 0; //makes Animal an abstract class
};
#endif
```

### Concrete Class Example: C++

```cpp

#include "Animal.h"
//Kitty Cat
class Cat : public Animal
{
    //Implementation details about cats (that are not related to the animal class) would be inserted here.
public:
    void talk();
};

//Doggo
class Dog : public Animal
{
        //Implementation details about dogs (that are not related to the animal class) would be inserted here.
public:
    void talk();
};
```

## Realization

- A relationship between the blueprint class and the object containing its respective implementation level details.
- The `Dog` and the `Cat` class above **realize** the `Animal` class.

## Dependency

- Change in structure or behavior of a class affects another related class.
- In the Relationships file, recall the Composition example with the `Car` and the `Engine` classes.
- The `Engine` class is a dependency of the `Car` class.

[See more here](https://javapapers.com/oops/association-aggregation-composition-abstraction-generalization-realization-dependency/)
