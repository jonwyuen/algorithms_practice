// Given a sorted array of integers and a target average, write a function called medianPair which determines if there is a pair of values in the array where the average of the pair equals the target average.

// Note: There may be more than one pair that matches the average target.

// medianPair([1,2,3], 2.5) // true
// medianPair([1,3,3,5,6,7,10,12,19], 8) // true
// medianPair([-1,0,3,4,5,6], -1) // false
// medianPair([1,2,3,4,5], 5) // false
// medianPair([8,9,10,11], 12) // false

// Time Complexity Constraint: O(n)
// Space Complexity Constraint: O(1)

function medianPair(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (num === avg) return true;
    else if (num > avg) left++;
    else right--;
  }
  return false;
}

function medianPair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if ((arr[start] + arr[end]) / 2 === avg) return true;
    else if ((arr[start] + arr[end]) / 2 < avg) start++;
    else end--;
  }
  return false;
}
