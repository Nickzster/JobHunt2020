# Control Structures

In a nutshell, control structures change the "flow" or "direction" of your program. This file lists some control structures that most programming languages will have.

## if/else

Allows for a program path to go down multiple directions.

```javascript
//op is a type of string,
//which has the value mul, add, sub, or div
//a & b are just two numbers.
function mathOperation(op, a, b) {
  if (operation === 'mul') return a * b;
  if (operation === 'add') return a + b;
  if (operation === 'sub') return a - b;
  if (operation === 'div')
    if (b !== 0) return a / b;
    else console.log('Invalid, cannot divide by Zero!');
  else console.log('Invalid Operation!');
}
```

# Work in Progress.
