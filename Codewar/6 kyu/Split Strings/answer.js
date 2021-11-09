function solution(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }

  if (str.length % 2) result[result.length - 1] += "_";

  return result;
}

/*
examples

<case 1>
str = "abcdef"

return = ["ab", "cd", "ef"]

<case 2>
str = "abcdefg"

return = ["ab", "cd", "ef", "g_"]

<case 3>
str = ""

return = []
*/
