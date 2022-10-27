function solution(X, Y) {
  const digits = [...new Array(10).keys()];
  const pairs = digits.reduce((acc, digit) => {
    const regex = new RegExp(`${digit}`, "g");
    const x = X.match(regex)?.length || 0;
    const y = Y.match(regex)?.length || 0;
    const min = Math.min(x, y);

    return [...acc, ...new Array(min).fill(`${digit}`)];
  }, []);

  const onlyZero = pairs.filter((pair) => !+pair).length === pairs.length;

  if (!pairs.length) {
    return "-1";
  } else if (onlyZero) {
    return "0";
  } else if (!!pairs.length) {
    return pairs.sort((a, b) => +b - +a).join("");
  }
}
