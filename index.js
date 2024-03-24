function reverse(word) {
  let Letter = word.length - 1;
  let reversedString = "";
  for (let index = Letter; index <= word.length - 1 && index >= 0; index--) {
    reversedString += word[index];
  }
    return reversedString;
}

function isPalindrome(word) {
  // Write your algorithm here
  if (reverse(word) === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here

  initialize empty string called reversedString
  iterate over each index in the input string reversely (from the last to the first index):
    append the characters from the input string to reversedString 
    if the input string equals reversedString:
      return true
    else 
      return false
*/

/*
  Add written explanation of your solution here
  This function (isPalindrome) iterates over an array and returns true if the input string is a Palindrome
  (Palindrome means can be read in both directions)
  And returns false if the string is not a palindrome
*/

// You can run `node index.js` to view these console logs.
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("a"));
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("dad"));
}

module.exports = isPalindrome;
