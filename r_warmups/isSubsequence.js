// Implement a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false - order matters!

// BONUS:

// Solve this problem in O(1) space complexity, and O(n + m) time complexity, where n is the length of the first string and m is the length of the second string.

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

function isSubsequence(str1, str2) {
  let prevIdx = -1;
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i], prevIdx + 1) > prevIdx) {
      prevIdx = str2.indexOf(str1[i], prevIdx + 1);
    } else return false;
  }
  return true;
}
