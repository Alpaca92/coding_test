function solution(s, n) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsArr = alphabets.split("");
  const alphabetsArrLength = alphabets.length;

  return s.split("").reduce((acc, cur) => {
    if (cur === " ") return (acc += " ");

    const index = alphabetsArr.indexOf(cur);

    if (index === -1) {
      const index = alphabetsArr.indexOf(cur.toLowerCase());
      const newIndex = (index + n) % alphabetsArrLength;
      const caesarChar = alphabetsArr[newIndex].toUpperCase();

      return (acc += caesarChar);
    } else {
      const newIndex = (index + n) % alphabetsArrLength;
      const caesarChar = alphabetsArr[newIndex];

      return (acc += caesarChar);
    }
  }, "");
}