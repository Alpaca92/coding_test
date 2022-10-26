function solution(X, Y) {
  const stack = { x: {}, y: {} };

  for (let i = 0; i < 10; ++i) {
    stack.x[i] = X.match(/`${i}`/g);
  }

  console.log(stack);
}
