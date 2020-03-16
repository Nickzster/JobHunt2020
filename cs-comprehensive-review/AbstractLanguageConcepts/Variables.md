# Variables

## Typed Languages

- Generally compiled
- Every variable needs to be declared with a type (explicitly defined)
- Types generally include:
  - char
  - int
  - double
  - float
  - boolean

Example in C++:

```cpp
#include <iostream>
using namespace std;

int main(){
  char c = 'h';
  int number = 42;
  double anotherNumber = 4.0;
  float decimal = 1.999999;
  bool inMainScope = true;
  anotherVariable = 42;

}
```

As you can see, every variable is defined with an associated type above... However, compiling the above snippet will result in a compilation error, since `anotherVariable` does not have a type.

## Untyped languages

- Generally not compiled
- Variables are implicitly defined

Example in Javascript:

```javascript
var variableA = 1;
var variableB = 'Hi!';
var variableC = false;
```

Every variable is defined with the same keyword `var`, but variableA, variableB, and variableC have different types (variableA has type `Number`, variableB has type `String`, and variableC has type `boolean`)
