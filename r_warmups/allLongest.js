// Write a function called allLongest which accepts an array of strings and returns another array containing all of its longest strings.

// allLongest(["a","bb","cc","dd"]) // ["bb","cc","dd"]
// allLongest(['Elie', 'Matt', 'Tim'] // ["Elie", "Matt"]
// allLongest(["awesome", "somethingelse", "thisissomuchfun"]) // ["thisissomuchfun"]

// Constraints:

// Time Complexity - O(n)

function allLongest(arr) {
  let output = [];
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      output = [arr[i]];
      longest = arr[i].length;
    } else if (arr[i].length === longest) {
      output.push(arr[i]);
    }
  }
  return output;
}

function allLongest(arr) {
  let obj = {};
  let newArr = [];
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i].length;
    if (arr[i].length > maxLength) maxLength = arr[i].length;
  }
  for (let key in obj) {
    if (obj[key] === maxLength) {
      newArr.push(key);
    }
  }
  return newArr;
}
