// Given this function, return the reverse. (Hello becomes olleh)
function reverseString(str) {
    //Step 1. Use the split() method to return a new array
    var splitString = str.split('');

    //Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse();

    //Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join("")
    //Step 4. Return the reversed string
    return joinArray;
  }
  
  reverseString("hello");


  // Different way of doing it

  describe('String Reversal', () => {
    it('Should reverse string', () => {
      assert.equal(reverse('Hello World!'), '!dlroW olleH');
    });
  });


const reverse = string =>
  string
    .split("")
    .reverse()
    .join("");

const _reverse = string => {
  let result = "";
  for (let character of string) result = character + result;
  return result;
};


const __reverse = string =>
    string.split("").reduce((result, character) => character + result);
