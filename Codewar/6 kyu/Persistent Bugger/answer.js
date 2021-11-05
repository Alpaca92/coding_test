function persistence(num) {
  let counter = 0;

  while (num >= 10) {
    const arr = [...num.toString()];

    num = +arr.reduce((pre, cur) => pre * cur, 1);
    ++counter;
  }

  return counter;
}

/*
examples

<case 1>
num = 39

return = 3

<case 2>
num = 4

return = 0

<case 3>
num = 25

return = 2

<case 4>
num = 999

return = 4
*/

/*
pseudo code

counter = 0;
while ( num >= 10) 안에 reduce를 활용하여 모든 자릿수를 곱한다
counter += 1
while이 끝나면 return counter;
*/
