// You are given a set of Matryoshka dolls (a.k.a. Russian nesting dolls). These dolls have incrementally smaller sizes such that the smaller dolls fit nicely into the bigger ones. Upon checking your set of dolls, you find that a few of them are missing.  Find out how many are missing from your set.

// Your doll set is provided in the form of an integer array where the integer value represents the size of the doll.  A set of dolls should contain each integer from the smallest to the largest.

// You can assume both the smallest and largest doll in the set are included in the array. There are also no duplicate sizes in the doll set provided.

// Your goal is to write a function called missingDolls which takes in an array of whole number values, and returns the count of the number of missing dolls.

// missingDolls([1, 2, 3, 5, 6]) // 1
// missingDolls([4, 2, 6, 7]) // 2
// missingDolls([9, 12, 4, 6, 8, 10]) // 3

// Time complexity: O(N)
// Space complexity: O(1)

function missingDolls(dolls) {
  return Math.max(...dolls) - Math.min(...dolls) - dolls.length + 1;
}

function missingDolls(arr) {
  //find highest and lowest num
  //return diff btwn length of high and low - length of arr
  return Math.max(...arr) - Math.min(...arr) + 1 - arr.length;
}
