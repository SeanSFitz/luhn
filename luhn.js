var check = function (num) {
  var stringNum = String(num);
  var restOfDigits = nonCheckDigits(stringNum).split("").map(function (digit) {
    return Number(digit);
  });

  var checkDigit = getCheckDigit(stringNum);

  restOfDigits = doubleEveryOther(restOfDigits);
  restOfDigits.push(Number(checkDigit));
  if (sumArray(restOfDigits) % 10 === 0) {
    console.log(`The number ${num} passes the Luhn test.`);
  } else {
    console.log(`The number ${num} DOES NOT pass the Luhn test.`);
  }
}

var nonCheckDigits = function (num) {
  return num.slice(0, num.length - 1);
}

var getCheckDigit = function (num) {
  return num.slice(num.length -1);
}


var doubleEveryOther = function (digits) {
  var newDigits = [];
  digits.reverse();
  digits.forEach(function (element, index, array) {
    if (index % 2 === 0)
      element = element * 2;
    if (element > 9)
      element = sumDigits(element)
    newDigits.push(element);
  });

  return newDigits.reverse();
}

var sumDigits = function (str) {
  if (typeof str === 'number')
    str = String (str);
  var digits = str.split("").map(function (digit) {
    return Number(digit);
  });
  return sumArray(digits);
}

var methodOne = function(digits, check) {

  var sumDigits = sumArray(digits);
  sumDigits *= 9;
  var lastDigit = String(sumDigits).slice(String(sumDigits).length - 1);

  var doesItPass = (check == lastDigit);

  console.log(`Method One:`);
  console.log(`Sum of non-check digits: ${sumDigits}`)
  console.log(`Check Digit: ${check}`)

  if (doesItPass) {
    console.log(`This number passes the Luhn test according to the first method.`)
  } else {
    console.log(`This number DOES NOT pass the Luhn test according to the first method.`)
  }
  //return doesItPass;
}

var methodTwo = function (digits, check) {
  var sumDigits = sumArray(digits);
  var lastDigit = String(sumDigits).slice(String(sumDigits).length - 1);
  lastDigit = 10 - lastDigit;

  var doesItPass = (check == lastDigit);

  console.log(`Method Two:`);
  console.log(`Sum of non-check digits: ${sumDigits}`)
  console.log(`Check Digit: ${check}`)

  if (doesItPass) {
    console.log(`This number passes the Luhn test according to the second method.`)
  } else {
    console.log(`This number DOES NOT pass the Luhn test according to the second method.`)
  }

}

function sumArray(myArray) {
  var sum = 0;
  for (var i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  } return sum;
}

module.exports = {
  check: check
}