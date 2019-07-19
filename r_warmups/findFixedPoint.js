// A fixed point in an array arr is an index i such that arr[i] === i.

// Given an array of unique sorted integers, write a function called findFixedPoint that returns a  fixed point in the array, if a fixed point exists. Otherwise, it returns -1.

// You can assume that the input array will have at most one fixed point.

// findFixedPoint([-3,1,5]) // 1
// findFixedPoint([-10, -5, 0, 3, 7]) // 3
// findFixedPoint([0, 2, 5, 8, 17]) // 0

// findFixedPoint([-10, -5, 3, 4, 7, 9]) // -1
// findFixedPoint([1,2,3,4,5,6]) // -1
// findFixedPoint([-3,0,3,6,10]) // -1

// Time Complexity: O(log n), where n is the array length.

function findFixedPoint(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if (mid == arr[mid]) return mid;
    if (mid > arr[mid]) return findFixedPoint(arr, mid + 1, high);
    else return findFixedPoint(arr, low, mid - 1);
  }
  return -1;
}

function findFixedPoint(arr) {
  //binary search
  let fixedPt = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === mid) {
      fixedPt = mid;
      return fixedPt;
    } else if (arr[mid] < mid) start = mid + 1;
    else end = mid - 1;
  }
  return fixedPt;
}
