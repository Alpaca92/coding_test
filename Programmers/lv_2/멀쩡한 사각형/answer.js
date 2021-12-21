function solution(w, h) {
  const getGcd = (a, b) => {
    if (b) {
      return getGcd(b, a % b);
    }

    return a;
  };

  const GCD = getGcd(w, h);

  return w * h - (w + h - GCD);
}

/*
examples

<case 1>
w = 8
h = 12

result = 80
*/
