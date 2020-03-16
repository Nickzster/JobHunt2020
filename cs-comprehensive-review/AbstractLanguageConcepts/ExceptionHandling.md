# Exception Handling

- Sometimes, something isn't going to go right when a program is executing.
- Exception handling is all about responding to _exceptions_ during program execution.
- Generally uses a try/catch system

## Example

- Let's say we have a function that has three arguments: two numbers, and an operation symbol.
- We know that we are going to support the add, subtract, multiply, and divide operations.
- We also know that, since we are supporting the divide operation, we cannot divide by zero.
- Therefore, we can set up two _exceptions_
  1.  If an unsupported symbol is specified, throw an error.
  2.  If the user attempts to divide by zero, throw an error.

In JavaScript, an error can be handeled by using try/catch:

```javascript
//function compute takes in a & b which are two numbers, and an op representing a symbol.
function compute(a, op, b) {
  try {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) throw 'Cannot divide by Zero!';
        else return a / b;
      default:
        throw `Operation ${op} is not supported!`;
    }
  } catch (err) {
    //We will handle all errors by logging them, and then returning NaN
    console.log(err);
    return NaN;
  }
}
```

- Exceptions can generally crash a program, or keep the execution going. It's all up to the design preference.
