// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

// O(n)
function findLongestSubstring(str) {
  let total = 0;
  let store = {};
  for (let j = 0, i = 0; j < str.length; j++) {
    if (store[str[j]]) {
      i = Math.max(store[str[j]], i);
    }
    total = Math.max(total, j - i + 1);
    store[str[j]] = j + 1;
  }
  return total;
}

function findLongestSubstring(str) {
  let obj = {};
  let total = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] && obj[str[i]] >= start) {
      start = obj[str[i]];
    }

    obj[str[i]] = i + 1;

    total = Math.max(total, i - start + 1);
  }

  return total;
}
