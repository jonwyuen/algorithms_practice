// Write a function called pivotIndex which accepts an array of integers, and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right. If there are more than one valid pivot index, return the smallest value.

// Constraints:

// Time Complexity: O(N)
// Space Complexity: O(1)

// Sample Input / Output:

// pivotIndex([1,2,1,6,3,1]) // 3
// pivotIndex([5,2,7]) // -1  no valid pivot index
// pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2

function pivotIndex(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let idx = -1;
  let leftSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let rightSum = sum - leftSum - arr[i];
    if (leftSum === rightSum) idx = i;
    leftSum += arr[i];
  }
  return idx;
}

function pivotIndex(arr) {
  let sum = 0;
  let leftSum = arr[0];
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    let rightSum = sum - leftSum - arr[j];
    if (leftSum !== rightSum) {
      leftSum += arr[j];
    } else {
      index = j;
    }
  }
  return index;
}

function pivotIndex(nums) {
  let index = -1;
  if (nums.length < 1) {
    return index;
  } else if (nums.length === 1) {
    return 0;
  }
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  let startSum = nums[0];
  let endSum;

  for (let i = 1; i < nums.length - 1; i++) {
    endSum = totalSum - startSum - nums[i];
    if (endSum === startSum) {
      return i;
    } else {
      startSum += nums[i];
    }
  }
  return index;
}
