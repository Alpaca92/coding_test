function solution(s) {
  if (!s.match(/\(/g) || s.length % 2 !== 0) return false;

  return !s.split("").reduce((acc, cur) => {
    if (cur === "(") {
      ++acc;
    } else {
      acc -= acc ? 1 : 0;
    }

    return acc;
  }, 0)
    ? true
    : false;
}

/*
examples

<case 1>
s = "()()"

return = true

<case 2>
s = "(())()"

return = true

<case 3>
s = ")()("

return = false

<case 4>
s = "(()("

return = false
*/
