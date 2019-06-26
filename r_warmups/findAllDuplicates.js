// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // [2,3]

// Time Complexity - O(n)

function findAllDuplicates(nums) {
  let ans = [];
  let s = new Set();
  for (let i = 0; i < nums.length; i++) {
    s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i]);
  }
  return ans;
}

function findAllDuplicates(arr) {
  let obj = {};
  let resultArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  for (let key in obj) {
    if (obj[key] === 2) resultArr.push(+key);
  }
  return resultArr;
}
