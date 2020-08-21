// Basic solution with linear time (more numbers = more loops)
function sumUp(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// Constant time, better solution sum of all numbers up to a number
function sumUp(n) {
  return (n/2) * (1 + n);
}


/* 
Linear Time = O(n)
Constant Time = 0(1)
Quadratic Time = 0(n^2)
Cubic Time = 0(n^3)
*/