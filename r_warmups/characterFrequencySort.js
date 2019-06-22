// Write a function called characterFrequencySort which accepts a string and sorts it in decreasing order based on the frequency of characters and returns a new string.

// The most frequent character should appear first with its frequency, followed by the second most frequent character with its frequency, and so on. You can assume that all of the letters passed to the function will be lowercased and each letter will appear a different number of times.

// characterFrequencySort("ttttrreee") // "tttteeerr"
// characterFrequencySort("cacac") // "cccaa"
// characterFrequencySort("eeeeffalll") // "eeeelllffa"
// characterFrequencySort("abbcccdddd") // "ddddcccbba"
// characterFrequencySort("xyzxyyzzzxyyyyzzzzz") // "zzzzzzzzzyyyyyyyxxx"

// Time Complexity - O(n log n)

// Bonus Time Complexity - O(n)

function characterFrequencySort(str) {
  let cache = {};
  for (let i = 0; i < str.length; i++) {
    cache[str[i]] = (cache[str[i]] || 0) + 1;
  }
  return Object.keys(cache)
    .map(v => v.repeat(cache[v]))
    .sort((a, b) => a.length < b.length)
    .join("");
}

function characterFrequencySort(s) {
  let characters = new Set();
  let freqMap = {};
  let charStore = {};
  let letters = [];

  for (let i = 0; i < s.length; i++) {
    characters.add(s[i]);
    freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;
  }

  for (let char of characters) {
    if (!charStore[freqMap[char]]) charStore[freqMap[char]] = [];
    charStore[freqMap[char]].push(new Array(freqMap[char] + 1).join(char));
  }

  for (let i = s.length; i > 0; i--) {
    if (charStore[i]) {
      letters = letters.concat(charStore[i]);
    }
  }

  return letters.join("");
}

function characterFrequencySort(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++;
    else obj[str[i]] = 1;
  }
  let arr = [];
  for (let key in obj) {
    arr.push(key.repeat([obj[key]]));
  }
  arr.sort(function(a, b) {
    return a.length < b.length;
  });
  return arr.join("");
}
