// Given a sorted array and a value x, the floor of x in the array is the largest element in the array which is smaller than or equal to x. Write a function called findFloor which takes an array and a value x, and returns the floor of x in the array.

// findFloor([1,2,8,10,10,12,19], 5) // 2
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

// Time Complexity - O(log n)

function findFloor(arr, num, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  if (num >= arr[high]) return arr[high];

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === num) return arr[mid];

  if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
    return arr[mid - 1];
  }

  if (num < arr[mid]) {
    return findFloor(arr, num, low, mid - 1);
  }

  return findFloor(arr, num, mid + 1, high);
}

function findFloor(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let currMax = 0;
  let max = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > x) end = mid - 1;
    if (arr[mid] <= x) {
      currMax = arr[mid];
      start = mid + 1;
      max = Math.max(currMax, max);
    }
  }
  return max;
}
