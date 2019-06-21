// Write a function called almostSort which accepts an array of numbers that are sorted except for a single pair and returns a sorted array.

// almostSort([1,2,3,7,5,6,4]); // [1,2,3,4,5,6,7]
// almostSort([1,2,6,4,5,3]); // [1,2,3,4,5,6]
// almostSort([-1,1,0,2]); // [-1,0,1,2]
// almostSort([2,1]); // [1,2]
// almostSort([]); // []

// Time Complexity - O(n)
// Space Complexity - O(1)

function almostSort(arr) {
  let start = 0;
  let end = arr.length - 1;
  let swapIdx1 = null;
  let swapIdx2 = null;
  if (arr.length === 0) return arr;
  while (start <= end) {
    if (arr[start] > arr[start + 1] && swapIdx1 === null) {
      swapIdx1 = start;
    }
    if (arr[end] < arr[end - 1] && swapIdx2 === null) {
      swapIdx2 = end;
    }
    start++;
    end--;
  }
  [arr[swapIdx1], arr[swapIdx2]] = [arr[swapIdx2], arr[swapIdx1]];

  return arr;
}

function almostSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      let j = i - 1;
      while (j >= 0 && arr[i] < arr[j]) {
        j--;
      }
      [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
      break;
    }
  }
  return arr;
}
