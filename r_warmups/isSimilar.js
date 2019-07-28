// Write a function called isSimilar which accepts two arrays. This function should return true if one array can be created from another by swapping at most one pair of elements. This function should return false if these arrays can not be the same in one swap.

// isSimilar([3,2,1],[1,2,3]) // true
// isSimilar([1,2,3,4],[4,2,3,1]) // true
// isSimilar([0,1,2,3,4],[3,1,2,0,4]) // true
// isSimilar([1,2,3,4,5],[1,2,3,4,5]) // true
// isSimilar([4,1,2,3], [1,2,3,4]) // false
// isSimilar([1,2,3,4,5], [1,2,3,4,5,6]) // false
// isSimilar([1,2,3,4,5,6], [1,2,3,4,5,7]) // false
// isSimilar([3,2,1,5,6],[1,2,3,4,5]) // false

// Constraints:

// Time Complexity - O(n)

function isSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let diff = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      diff.push(i);

      if (diff.length === 2) {
        if (arr1[diff[0]] !== arr2[diff[1]]) return false;
        if (arr1[diff[1]] !== arr2[diff[0]]) return false;
      }
    } else if (diff.length > 2) return false;
  }

  return diff.length === 0 || diff.length === 2;
}
