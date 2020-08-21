// Basic solution with linear time (more numbers = more loops)
function sumUp(n) {
  // runs 1 time each loops
  let result = 0;

  // runs 1 time each loop
  for (let i = 1; i <= n; i++) {
  // runs 1 time each loop
  // if n = 3, this would run 3 times
    result += i;
  }
  // runs 1 time each loop
  return result;
}
// the time complexity of this problem if n=n would be 1 + 1 + n + 1
// or, 3 + 1 * n

// Constant time, better solution sum of all numbers up to a number
function sumUp(n) {
  return (n/2) * (1 + n);
}


/* 
Linear Time = O(n)
Constant Time = 0(1)
Quadratic Time = 0(n^2)
Cubic Time = 0(n^3)

Count the number of expression executions for time complexity



1. Define the function
T = a*n + b
2. Find the fastest growing term
a*n
3. Remove coefficient
T = n
*/