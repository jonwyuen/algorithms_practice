// Given an array of integers, determine the length of the longest consecutive decrease of integers.

// Input: array of integers
// Output: integer

// Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)

// Example 1:
// [5, 3, 1, 3, 0] -> 3

// 5-3-1 is the longest consecutive sequence of decreasing integers

// Example 2:
// [2, 2, 1] -> 2

// 2-1 is the longest consecutive sequence of decreasing integers

// Example 3:
// [2, 2, 2] -> 1

// 2 is the longest consecutive sequence of decreasing integers

function longestFall(nums) {
  let count = 1;
  let currCount = 1;
  let start = 0;
  let next = 1;

  if (!nums.length) return 0;
  //increase currCount if num > next num
  //save the greater of currCount and count as count
  //reset currCount if num <= next num
  //loop till end of array
  while (next < nums.length) {
    if (nums[start] > nums[next]) {
      currCount++;
      count = Math.max(currCount, count);
    } else {
      currCount = 1;
    }
    start++;
    next++;
  }
  return count;
}
