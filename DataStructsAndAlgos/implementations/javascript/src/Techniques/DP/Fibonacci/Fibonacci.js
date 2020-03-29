//Top-Down, Brute Force solution
export const FibonacciNaive = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return FibonacciNaive(n - 1) + FibonacciNaive(n - 2);
};

//Top-Down, Memoization Solution
export const Fibonacci = (n, memo = { 1: 0, 2: 1 }) => {
  if (n in memo) return memo[n];
  else {
    memo[n] = Fibonacci(n - 1, memo) + Fibonacci(n - 2, memo);
    return memo[n];
  }
};

//Non Recursive, BottomUp Solution.
export const FibBest = n => {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
};
