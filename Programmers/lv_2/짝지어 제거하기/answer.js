function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; ) {
    if (s[i] === s[i + 1]) {
      i += 2;
    } else {
      if (stack[stack.length - 1] === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
      ++i;
    }
  }

  return stack.length === 0 ? 1 : 0;
}

/*
examples

<case 1>
s = 'baabaa'

result = 1

<case 2>
s = 'cdcd'

result = 0
*/