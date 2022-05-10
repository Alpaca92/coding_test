function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  const sides = [a, b, c, a, b, c];

  for (let i = 0; i < 3; i++) {
    if (sides[i] >= sides[i + 1] + sides[i + 2]) return false;
  }

  return true;
}

/*
examples

<case 1>
[a, b, c] = [1, 2, 2]

return = true

<case 2>
[a, b, c] = [7, 2, 2]

return = false
*/
