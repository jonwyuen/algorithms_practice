// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1

// Bonus 1

// Solve this algorithm with the following constraints:

// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus 2

// Solve this algorithm with the following constraints:

// Time Complexity - O(n * log(n))
// Space Complexity - O(1)

// O(n) / O(n)
function countPairs(arr, num) {
  let s = new Set(arr);
  let count = 0;
  for (let val of arr) {
    s.delete(val);
    if (s.has(num - val)) {
      count++;
    }
  }
  return count;
}

// O(n log n) / O(1)

function countPairs(arr, num) {
  let sorted = arr.sort((a, b) => a > b);
  let count = 0;
  let start = 0;
  let end = sorted.length - 1;
  while (start < end) {
    let sum = sorted[start] + sorted[end];
    if (sum === num) {
      count++;
      start++;
      end--;
    } else if (sum < num) {
      start++;
    } else {
      end--;
    }
  }
  return count;
}

function countPairs(arr, n) {
  let count = 0;
  let match;
  for (let i = 0; i < arr.length; i++) {
    match = n - arr[i];
    if (arr.indexOf(match) > i) {
      count++;
    }
  }
  return count;
}
//time complexity: O(n^2); space complexity: O(n)

function countPairs(arr, n) {
  let count = 0;
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length - 1 - i; i++) {
    if (arr[i] + arr[arr.length - 1 - i] === n) {
      count++;
    }
  }
  return count;
}
//time complexity: O(n*log(n)); space complexity: O(1)
