// separatePositive
// Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order.

// To meet the space complexity constraints, perform the separation in-place (i.e., do not create/build a copy of the input array)

// Examples:

// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]
// Constraints

// Time Complexity: O(N)

// Space Complexity: O(1)

const separatePositive = arr => {
  let start = 0;
  let end = arr.length - 1;
  // from start, stop at first negative num
  // from end, stop at first positive num
  // swap
  while (start < end) {
    if (arr[start] < 0 && arr[end] > 0) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    } else {
      if (arr[start] > 0) start++;
      else end--;
    }
  }
  return arr;
};
