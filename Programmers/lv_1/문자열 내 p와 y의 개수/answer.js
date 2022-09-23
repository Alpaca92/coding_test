function solution(s) {
  const pArr = [...s].filter((char) => char.match(/p/gi));
  const yArr = [...s].filter((char) => char.match(/y/gi));

  return pArr.length === yArr.length;
}
