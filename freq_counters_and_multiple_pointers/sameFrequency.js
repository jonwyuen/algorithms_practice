// sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
// Constraints

// Time Complexity - O(N + M)

// Space Complexity - O(N + M)

const sameFrequency = (n1, n2) => {
  let str1 = n1.toString();
  let str2 = n2.toString();
  if (str1.length !== str2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let i = 0; i < str1.length; i++) {
    freq[str1[i]] = (freq[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    freq[str2[j]] = (freq[str2[j]] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
};
