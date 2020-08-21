// A palindrome is a word or phrase that reads the same backwards and forwards
// Write a funciton to check for this

describe("Palindrome", () => {
  it("Should return true", () => {
   assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
  });
  it("Should return false", () => {
   assert.equal(isPalindrome("sit ad est love"), false);
  });
 });


 // We need to return a boolean value. This is as simple as a triple equality check against the original string.

 const isPalindrome = string => {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringCharacters = string
      .toLowerCase()
      .split("")
      .reduce(
          (characters, character) =>
              validCharacters.indexOf(character) > -1
                  ? characters.concat(character)
                  : characters,
          []
      );
  return stringCharacters.join("") === stringCharacters.reverse().join("");
};

const isPalindrome = (str) => {
  const cleanStr = clean(str);
  const reverseStr = cleanStr.split('').reverse().join('');
  return reverseStr == cleanStr;
}

// Using every

const palindrome = (str) => {
  const cleanStr = clean(str);
  return cleanStr.split('').every((c, i) => c === cleanStr[cleanStr.length - 1 - i]);
}