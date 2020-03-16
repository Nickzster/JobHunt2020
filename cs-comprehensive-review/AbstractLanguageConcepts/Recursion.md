# Recursion

- Honestly, this is a concept that I struggled with for quite a bit when I was going through college.

- The best way to describe it is to think of it like a stack of function calls: Because that's exactly what it is.

## Effective recursion

All recursion problems have two fundamental pieces:

- Base case: Inputs for which result is achieved without recurring.
- Recursive case: Inputs for which the program will call itself.

## Example: Factorial

Recall the factorial (!) operation, where:
`n! = n * (n-1) * (n - 2) * ... * 3 * 2 * 1`
For example:
`3! = 3 * 2 * 1 = 6`
`5! = 5 * 4 * 3 * 2 * 1`

This problem can be automated utilizing the following recursion:

```javascript
function factorial(n) {
  if (n === 1) return 1;
  //Base Case
  else return n * factorial(n - 1); //Recursive Case
}
```

Let's walk through it step by step.

First, we call the function with 5, like so:

```javascript
factorial(5);
```

Which makes our function look like this:

```javascript
function factorial(5) {
    if(5 === 1) return 1; //Base Case
    else return 5 * factorial(5-1); //Recursive Case
}
```

is `5 === 1`? Nope. So we call the recursive case

Current Call:
`5 * factorial(5-1)`

Chain so far:
`5 * factorial(5-1)`

Now, `factorial` is called with `5-1`, or `4`

```javascript
factorial(4);
```

Which now makes our javascript function look like this:

```javascript
function factorial(4) {
    if(4 === 1) return 1; //Base Case
    else return 4 * factorial(4-1); //Recursive Case
}
```

is `4 === 1`? Nope. So we call the recursive case:

Current Call: `4 * factorial(4-1)`

Stack so far: `5 * 4 * factorial(4-1)`

Now, `factorial` is called with `4-1`, or `3`

```javascript
factorial(3);
```

Which now makes our javascript function look like this:

```javascript
function factorial(3) {
    if(3 === 1) return 1; //Base Case
    else return 3 * factorial(3-1); //Recursive Case
}
```

is `3 === 1`? Nope. So we call the recursive case:

Current Call: `3 * factorial(3-1)`

Stack so far: `5 * 4 * 3 * factorial(3-1)`

## You should be able to see the pattern by now.

Now, `factorial` is called with `(3-1)` or `2`

```javascript
factorial(2);
```

Which makes our javascript function now look like this:

```javascript
function factorial(2) {
    if(2 === 1) return 1; //Base Case
    else return 2 * factorial(2); //Recursive Case
}
```

is `2 === 1`? Nope. So we call the recursive case:

Current Call: `2 * factorial(2-1)`

Chain so far: `5 * 4 * 3 * 2 * factorial(2-1)`

Now, factorial is called with `2-1`, or `1`

```javascript
factorial(1);
```

Which now makes our javascript function look like this:

```javascript
function factorial(1) {
    if(1 === 1) return 1; //Base Case
    else return 1 * factorial(1-1); //Recursive Case
}
```

is `1 === 1`? It sure is. So now we return 1.

Let's look at our function when factorial was 2. What do we return?

```javascript
return 2 * factorial(2 - 1);
```

Well, `factorial(2-1)` AKA `factorial(1)` just returned 1, so now we can modify it:

```javascript
return 2 * 1;
```

Let's look at our function when factorial was 3. What do we return?

```javascript
return 3 * factorial(3 - 1);
```

Well, `factorial(3-1)` AKA `factorial(2)` just returned 2, so we can modify it:

```javascript
return 3 * 2; //Which will return 6.
```

Let's look at our function when factorial was 4. What do we return?

```javascript
return 4 * factorial(4 - 1);
```

Well, `factorial(4-1)` AKA `factorial(3)` just returned 6, so we can modify it:

```javascript
return 4 * 6; //Which will return 24
```

Let's look at our function when factorial was 5. What do we return?

```javascript
return 5 * factorial(5 - 1);
```

Well, `factorial (5 - 1)` AKA `factorial(4)` just returned 24, so we can modify it:

```javascript
return 5 * 24; //which returns 120
```

And indeed, `5! = 120`.

## What does this example show?

We already know to think about recursion like a stack... because it utilizes the call stack, right? What can a stack do?

- Push
- Pop

Do you see how the factorial example used push and pop operations?

- We `pushed` onto the call stack when we called the recursive case
- We `popped` off the stack when we called the base case, or the previous function returned.

Although this is a very basic example, you can do a lot of neat stuff using recursion.

## Tradeoffs for Recursion

- **Benefit of Recursion**: Very readable, elegant solutions
- **Downside of Recursion**: Utilizes the call stack, so it has the possibility of not scaling well.
