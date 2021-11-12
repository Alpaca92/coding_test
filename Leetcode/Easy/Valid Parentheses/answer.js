var isValid = function (s) {
  if (s.length <= 1) return false;

  const openBrakects = ["(", "[", "{"];
  const temp = [];

  for (let i = 0; i < s.length; i++) {
    if (openBrakects.includes(s[i])) {
      temp.push(s[i]);
    } else {
      if (
        !temp[temp.length - 1] ||
        (s[i].charCodeAt() - temp[temp.length - 1].charCodeAt() !== 1 &&
          s[i].charCodeAt() - temp[temp.length - 1].charCodeAt() !== 2)
      ) {
        return false;
      } else {
        temp.pop();
      }
    }
  }

  return temp.length ? false : true;
};

/*
examples

<case 1>
s = "()"

return = true

<case 2>
s = "()[]{}"

return = true

<case 3>
s = "(]"

return = false

<case 4>
s = "([)]"

return = false

<case 5>
s = "{[]}"

return = true
*/
