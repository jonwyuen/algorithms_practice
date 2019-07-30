// Write a function called matchingDigits which accepts two positive integers. The function should find out if the two numbers have the same frequency of digits, if so return true, otherwise return false. You can assume all inputs will be positive integers.

// matchingDigits(141, 411) // true
// matchingDigits(34, 14) // false
// matchingDigits(3589578, 5879385) // true
// matchingDigits(22, 222) // false
// matchingDigits(8675309, 9035768) // true
// matchingDigits(8686867, 686868) // false

// Time complexity : O(N + M), where N and M are the total number of digits in each input.

function matchingDigits(first, second) {
  function createFrequencyCounter(num) {
    let str = num.toString();
    let counter = {};
    for (let i = 0; i < str.length; i++) {
      counter[str[i]] = (counter[str[i]] || 0) + 1;
    }
    return counter;
  }
  let firstCounter = createFrequencyCounter(first);
  let secondCounter = createFrequencyCounter(second);

  for (let key in firstCounter) {
    if (!(key in secondCounter)) {
      return false;
    }
    if (firstCounter[key] !== secondCounter[key]) return false;
  }
  return true;
}

function matchingDigits(n1, n2) {
  n1 = n1.toString();
  n2 = n2.toString();
  if (n1.length !== n2.length) return false;
  //make frq obj of n1
  let frq = {};
  for (let i = 0; i < n1.length; i++) {
    if (frq[n1[i]]) frq[n1[i]]++;
    else frq[n1[i]] = 1;
  }
  //decrement based on n2
  for (let j = 0; j < n2.length; j++) {
    if (!frq[n2[j]]) return false;
    else frq[n2[j]]--;
  }
  return true;
}
