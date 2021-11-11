var romanToInt = function (s) {
  const symbols = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let arr = [...s];
  let result = 0;

  while (arr.length) {
    if (symbols[arr[0] + arr[1]]) {
      result += symbols[arr[0] + arr[1]];
      arr = arr.slice(2);
    } else {
      result += symbols[arr[0]];
      arr = arr.slice(1);
    }
  }

  return result;
};

/*
examples

<case 1>
s = "III"

return = 3

<case 2>
s = "IX"

return = 9

<case 3>
s = "LVIII"

return = 58

<case 4>
s = "MCMXCIV"

return = 1994
*/
