// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
   
    return str;
  }
  
  confirmEnding("Bastian", "n");

  // Two approaches

  // Approach number 1: Use the String.prototype.substr() method:

  // The substr() method returns the characters in a string beginning at the specified location through the specified number of characters. 

  // Why are you using the string.substr(-target.length)?
  // If the target.length is negative, the substr() method will start the countring from the end of the string, which is what you want in this challenge. 
  //You don't want to use string.substr(-1) to get the last element of the string, because if the target is longer than one letter: the target won't return. 
  // So here use string.substr(-target.length) will get the last index of the string 'Bastian' whih is 'n'. Then you heck whether string.substr(-target.length) equals the target (true or false)

  function confirmEnding(string, target) {
      // Step 1. Use the substr method
      if (string.substr(-target.length) === target) {
          //What does "if (string.substr(-target.length") === target)" represent?
          // The string is 'Bastian' and the target is 'n'
          // target.length = 1, so -target.length = -1
          // if ('Bastian'.substr(-1) === 'n')
          // if ('n' === 'n')

          // Step 2. Return a boolean (true or false)
          return true;
      } else {
          return false;
      }
  }
  confirmEnding('Bastian', 'n');


// Shorter way to write
(string.substr(-target.length) === target) ? true : false;

//This can be read as:
if (string.substr(-target.length) === targt) {
    return true;
} else {
    return false;
}

// You then return the ternary operator in your function
function confirmEnding(string, target) {
    return (string.substr(-target.length) === target) ? true : false;
}
confirmEnding('Basitan', 'n')

// You can also refactor your code to make it more succinct by just returning the condition:
function confirmEnding(string, target) {
    return string.substr(-target.length) === target;
}
confirmEnding('Bastian', 'n')



  // Other method

  // For this solution, you confirm the ending of a string with built-in functions
  // The endsWith() method determines whether a string ends with the characters of another string, returning true or false as appropriate. This method is case-sensitive.

  function confirmEnding(string, target) {
      // We return the method with the target as a parameter
      // The result will be a boolean (true/false)
      return string.endsWith(target); //'Bastian'.endsWith('n')
  }
  confirmEnding('Bastian', 'n')