function solution(s) {
  const regex = /(\w)\1/g;

  while (s.match(regex)) {
    s = s.replace(regex, "");
  }

  return s === "" ? 1 : 0;
}

solution("baabaa");

/*
examples

<case 1>
s = 'baabaa'

result = 1

<case 2>
s = 'cdcd'

result = 0
*/
