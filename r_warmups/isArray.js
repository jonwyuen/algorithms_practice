// Write a function called  inArray. Given two arrays of strings a1 and a2, return a sorted array in alphabetical order of the strings of a1 which are substrings of strings of a2.  Examples:

// var a1 = ["arp", "live", "strong", "sharper"]
// var a2 = ["lively", "harp", "sharp", "armstrong", "ham"]
// var a3 = ["hammer", "olive", "string"]
// var a4 = ["sharper", "live", "strong", "arp"]

// inArray(a1,a2) // ["arp", "live", "strong"]
// inArray(a2,a1) // ["harp", "sharp"]
// inArray(a1,a3) // ["live"]
// inArray(a2,a3) // ["ham"]
// inArray(a3,a2) // []
// inArray(a4,a2) // ["arp", "live", "strong"]

// Time Complexity: O(n^2), where n is the larger of the two array lengths.

// function inArray(array1, array2){
//   return array1.filter(a1 => array2.find(a2 => a2.match(a1))).sort()
// }

function inArray(a1, a2) {
  let output = [];
  for (let i = 0; i < a1.length; i++) {
    if (a2.toString().indexOf(a1[i]) != -1 && output.indexOf(a1[i]) == -1) {
      output.push(a1[i]);
    }
  }
  return output.sort();
}

function inArray(a1, a2) {
  let s = new Set();
  for (let i = 0; i < a1.length; i++) {
    //check if each word in a1 is substring of each word in a2
    for (let j = 0; j < a2.length; j++) {
      //check if substring is not already in s
      //then add it to s
      if (isSubstring(a1[i], a2[j])) {
        if (!s.has(a1[i])) s.add(a1[i]);
      }
    }
  }
  //return a sorted array from the set
  return Array.from(s).sort((a, b) => a > b);
}

function isSubstring(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
