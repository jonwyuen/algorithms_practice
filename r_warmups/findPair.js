// Instructions from your teacher:
// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true

// Bonus 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)
// Space Complexity Requirement - O(n)

// Bonus 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)
// Space Complexity Requirement - O(1)

// Bonus 3 - implement both bonuses in Python!

// function findPair(arr, n){
//   let sortedArr = arr.sort(function(a,b){
//     return a-b
//   })
//   for(var i = 0; i < sortedArr.length; i++){
//     for(var j = sortedArr.length-1; j>=0; j--){
//       if(sortedArr[j] - sortedArr[i] === n){
//         return true;
//       }
//     }
//   }
//   return false;
// }

function findPair(arr, n) {
  let sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  let start = 0;
  let end = sortedArr.length - 1;
  while (start < end) {
    if (sortedArr[end] - sortedArr[start] === Math.abs(n)) {
      return true;
    } else {
      end--;
      if (end <= start) {
        end = sortedArr.length - 1;
        start++;
      }
    }
  }
  return false;
}

// O(n) space + O(n) time

function findPair(arr, num) {
  if (arr.length < 1) return false;
  let cache = new Set(arr);
  for (let val of arr) {
    if (cache.has(val - num)) {
      return true;
    }
  }
  return false;
}

// O(1) space + O(n log n) time

function findPair(arr, num) {
  var sorted = arr.sort((a, b) => a - b);
  var i = 0;
  var j = 1;
  while (i < sorted.length && j < sorted.length) {
    if (i !== j && sorted[j] - sorted[i] === num) {
      return true;
    } else if (sorted[j] - sorted[i] < num) {
      j++;
    } else {
      i++;
    }
  }
  return false;
}
