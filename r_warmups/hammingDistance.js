// Please implement the following functions:

// 1. Hamming Distance (https://en.wikipedia.org/wiki/Hamming_distance).

// This function takes in two strings of equal length, and calculates the distance between them. Here, "distance" is defined as the number of characters that differ at the same position. The function should ignore case.

// If the inputs do not have the same length, the function should return "Input strings must have the same length."

// Examples:

// hammingDistance("hello", "jello") // 1
// hammingDistance("cool", "kewl") // 3
// hammingDistance("sweet", "Sweet") // 0
// hammingDistance("yoyo", "yoyoyo") // "Input strings must have the same length."

function hammingDistance(str1, str2) {
  if (str1.length !== str2.length)
    return "Input strings must have the same length.";
  let diff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].toLowerCase() !== str2[i].toLowerCase()) diff++;
  }
  return diff;
}
