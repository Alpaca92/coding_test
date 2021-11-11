var isPalindrome = function (x) {
  const arr = [...x.toString()];

  for (let i = 0; i <= Math.ceil(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
  }

  return true;
};

/*
examples

<case 1>
x = 121

return = true

<case 2>
x = -121

return = false

<case 3>
x = 10

return = false

<case 4>
x = -101

return = false
*/
