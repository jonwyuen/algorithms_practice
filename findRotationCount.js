// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

const findRotationCount = (arr, start = 0, end = arr.length - 1) => {
  if (end < start) return 0;
  if (end === start) return start;
  let mid = Math.floor((start + end) / 2);

  // check if mid+1 is min element
  if (mid < end && arr[mid + 1] < arr[mid]) return mid + 1;

  // check if mid is min element
  if (mid > start && arr[mid] < arr[mid - 1]) return mid;

  if (arr[high] > arr[mid]) findRotationCount(arr, start, mid - 1);

  return findRotationCount(arr, mid + 1, end);
};
