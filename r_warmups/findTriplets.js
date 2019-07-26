// Given an array of distinct elements, write a function called findTriplets, which returns the number of triplets in array whose sum is zero.

// findTriplets([-1,0,1]) // 1
// findTriplets([5,-2,3,-1]) // 1
// findTriplets([0,-1,2,-3,1]); // 2 (0,-1,1 and -3,2,1)
// findTriplets([1,-2,0,5]); // 0
// findTriplets([0,4,2,7,5,3,-3,-2,-8,-12]); // 5

// Time Complexity - O(n^2)

// O(n^2) time and O(n) space
function findTriplets(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let store = new Set();
    for (let j = i + 1; j < arr.length; j++) {
      let missing = -(arr[i] + arr[j]);
      if (store.has(missing)) {
        count++;
      } else {
        store.add(arr[j]);
      }
    }
  }
  return count;
}

// O(n^2) time and O(1) space
function findTriplets(arr) {
  let count = 0;
  arr.sort();
  if (arr.length <= 3) {
    let sum = arr[0] + arr[1] + arr[2];
    return sum === 0 ? 1 : 0;
  }
  for (let i = 0; i < arr.length - 3; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        count++;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return count;
}

function findTriplets(arr) {
  let count = 0;
  let idxObj = arr.reduce((acc, val, idx) => {
    acc[val] = idx;
    return acc;
  }, {});

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (idxObj[-arr[i] - arr[j]] > j) count++;
    }
  }
  return count;
}
