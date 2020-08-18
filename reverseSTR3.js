// CharAt
function reverseString(str) {
  let reversedString = '';
  /* Loop through this process for each character in the str parameter
    In order to get the reverse, we'll initialize i to str.length - 1
    while i is greater than or equal to 0.
    Add each character, starting from the end, to the new string.

   */

   for (let i = str.length-1; i >= 0; i--) {
     reverseString += str.charAt(i);
    }
    return reversedString;
}

// Quicker solution
/*
Split each character in the string into an array index
string.split()

reverse the tems within the array
array.reverse()

turn the items in each index into a concatenated string
array.join()
*/

function reverseString(str) {
  return str.split('').reverse().join('');
}