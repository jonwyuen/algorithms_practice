// Write a function called lowerSubArraySum which accepts an array of integers and a number. This function should return the sum of a contiguous subarray having a maximum  sum less than or equal to the number passed to the function

// lowerSubArraySum([1, 2, 3, 4, 5], 11) // 10
// lowerSubArraySum([2, 4, 6, 8, 10], 7) // 6
// lowerSubArraySum([5, 3, 2, 6, 7], 12) // 11
// lowerSubArraySum([6, 3, 2, 5, 7], 15) // 14

// Time Complexity - better than O(n^2

function lowerSubArraySum(arr, sum) {
  let currentSum = arr[0];
  let maxSum = 0;
  let start = 0;
  for (let i = 1; i <= arr.length; i++) {
    // if currentSum becomes greater than sum, subtract starting elements of the array
    while (currentSum > sum && start < i) {
      currentSum -= arr[start++];
    }

    // update maxSum if it becomes greater than currentSum
    maxSum = Math.max(maxSum, currentSum);

    // add the element to the current Sum
    currentSum += arr[i];
  }

  while (currentSum > sum && start < arr.length) {
    currentSum -= arr[start++];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

function lowerSubArraySum(arr, num) {
  let start = 0;
  let next = 1;
  let sum = arr[0];
  let maxSum = 0;

  while (start <= arr.length) {
    if (sum <= num && next !== arr.length) {
      maxSum = Math.max(sum, maxSum);
      sum += arr[next];
      next++;
    }

    if (sum > num || next === arr.length) {
      sum -= arr[start];
      if (sum <= num) {
        maxSum = Math.max(sum, maxSum);
      }
      start++;
    }
  }
  return maxSum;
}
