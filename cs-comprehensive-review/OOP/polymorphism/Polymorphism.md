# Polymorphism

According to [Wikipedia](<https://en.wikipedia.org/wiki/Polymorphism_(computer_science)>), there are three kinds of inheritance:

- Ad hoc Polymorphism
- Parametric Polymorphism
- Subtyping

## Ad Hoc Polymorphism

- Defines a common interface for an arbitary set of individually specified types
- AKA function overloading or operator overloading

### Example: C++

```cpp
#include <iostream>
using namespace std;

void print(std::string str){
    cout << "Here is a string: " << str << endl;
}

void print(int number){
    cout << "Here is a number: " << number << endl;
}

void print(char c){
    cout << "Here is a char: " << c << endl;
}


int main(){
    print("Hello, world!");
    print('c');
    print(42);
}
```

## Parametric Polymorphism

- When one or more types are not specified by name but by abstract symbols that can represent any time
- AKA templating

## Example: Typescript

```typescript
interface Props{
    //Array can take on many different types
    userNames: Array<string>;
    userAges: Array<number>;
    ...
}
```

## Example: C++

```cpp
int main(){
    //Vector can take on many different types
    std::vector<int> stack;
    std::vector<std::string> names;
}

```

## Subtyping

- When a name denotes instances of many different classes related by some common superclass
- AKA OOP polymorphism

## Example: C++

```cpp
//See the example folder for the entire code
class Animal{...}; //Abstract Class
class Dog: public Animal{...} //Dog concrete class
class Cat: public Animal{...} //Cat concrete class

int main(){
    //object a with class Animal can take many different forms...
    //Polymorphism
    Animal *a;
    Cat c;
    Dog d;
    a = &c;
    a->talk();
    a = &d;
    a->talk();
}

```

The output of the above program looks like this:

```
./a.out
Meow!
Bark!
```
