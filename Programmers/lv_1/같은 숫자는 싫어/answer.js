function solution(arr) {
  const stack = [];

  arr.reduce((prev, cur) => {
    if (prev !== cur) stack.push(prev);
    return cur;
  });

  return stack[stack.length - 1] === arr[arr.length - 1]
    ? stack
    : [...stack, arr[arr.length - 1]];
}
