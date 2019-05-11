// countPairs
// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

// Examples:

// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2
// Constraints

// Time Complexity - O(N)

// Space Complexity - O(N)

const countPairs = (arr, sum) => {
  let totalPairs = 0;
  let set = new Set(arr);

  for (let num of set) {
    set.delete(num);
    if (set.has(sum - num)) {
      totalPairs++;
    }
  }
  return totalPairs;
};

// Time Complexity - O(N * log(N))

// Space Complexity - O(1)

const countPairs = (arr, sum) => {
  arr.sort((a, b) => a > b);
  let totalPairs = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let total = arr[start] + arr[end];
    if (total === sum) {
      totalPairs++;
      start++;
      end--;
    } else if (total < sum) start++;
    else end--;
  }
  return totalPairs;
};
