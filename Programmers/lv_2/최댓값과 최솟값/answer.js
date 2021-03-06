function solution(s) {
  const max = Math.max(...s.split(" ").map((num) => +num));
  const min = Math.min(...s.split(" ").map((num) => +num));

  return `${min} ${max}`;
}

/*
examples

<case 1>
s = "1 2 3 4"

return = "1 4"

<case 2>
s = "-1 -2 -3 -4"

return = "-4 -1"

<case 3>
s = "-1 -1"

return = "-1 -1"
*/
