// Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1.

// Examples:

// findMinMoves([1,2,3]) // 2
// findMinMoves([7,1]) // 6
// findMinMoves([3,3,1]) // 2
// findMinMoves([11,2,5]) // 9
// findMinMoves([-2,11,5]) // 13
// findMinMoves([5,2,1,7,-2,4,10]) // 21

// Time Complexity - O(n log n)
// Space Complexity - O(1)

function findMinMoves(nums) {
  nums = nums.sort((a, b) => a > b);
  let min = 0;
  for (let i = 0; i < nums.length / 2; i++) {
    min += nums[nums.length - i - 1] - nums[i];
  }
  return min;
}

function findMinMoves(arr) {
  arr = arr.sort((a, b) => a > b);
  let counter = 0;
  let mid = Math.floor(arr.length / 2);
  //find distance from mid to other vals and increment counter by that
  for (let i = 0; i < arr.length; i++) {
    counter += Math.abs(arr[mid] - arr[i]);
  }
  return counter;
}
