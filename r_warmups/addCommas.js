// This function takes in a number and formats that number so that it has commas after every third digit to the left of the decimal point. You can assume that all numbers are non-negative.
// Examples:

// addCommas(1) // "1"
// addCommas(1000) // "1,000"
// addCommas(123456789) // "123,456,789"
// addCommas(3.141592) // "3.141592"
// addCommas(54321.99) // "54,321.99"

function addCommas(num) {
  num = num.toString();
  if (num.length < 3) return num;
  let decSplit = num.split(".");
  let numSplit = decSplit[0].split("");

  for (let i = numSplit.length - 3; i > 0; i -= 3) {
    numSplit.splice(i, 0, ",");
  }
  if (decSplit.length > 1) {
    numSplit.push(".", decSplit[1]);
  }

  return numSplit.join("");
}

function addCommas(num) {
  let strNum = num.toString();
  if (strNum.length < 3) return strNum;

  let finalStr = "";
  let decimalSplit = strNum.split(".");
  let counter = 0;

  function parseValues(start) {
    for (let i = start.length - 1; i >= 0; i--) {
      counter++;
      if (counter % 3 === 0 && i > 0) {
        finalStr = "," + strNum[i] + finalStr;
      } else {
        finalStr = strNum[i] + finalStr;
      }
    }
  }

  if (decimalSplit.length === 1) {
    parseValues(strNum);
    return finalStr;
  } else {
    parseValues(decimalSplit[0]);
    return finalStr + "." + decimalSplit[1];
  }
}
