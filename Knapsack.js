// you got a list of items, where every item has a value and a weight. You got a bag that holds a maximum weight of X. Write a program thatmaximezses the value of the items you put in the bag while ensuring that you don't eceed the maximum weight.

items = [
  {
    id: 'a', val: 10, w:3
  },
  {
    id: 'b', val: 6, w:8
  },
  {
    id: 'c', val: 3, w:3
  }
]

maxWeight = 8 // Solution

bag = ['a', 'c']
// Value = 13, Weight = 6

// Basic solution with linear time (more numbers = longer)
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