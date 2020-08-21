// Write an algorithm that takes an array of numbers as input and calculates the sum of those numbers.
// Definte the Time Complexity of that algorithm and dtermine what the lowest possible Time Complexity is for this problem


function sumNumbers(numbers) { 
  //return numbers[0] + numbers[1]
  let result = 0; //1 
  for (const number of numbers) {//1
    result += number;// n times
  }
  return result; //1
}
// T = 1 + 1 + 1 + N = 3 + 1*n 
// Linear time complexity

//sumNumbers([1, 3, 10]) should yield 14

// Another solution 
function sumNumbers(numbers) {
return numbers.reduce((sum, curNum) => sum + curNum, 0)

}