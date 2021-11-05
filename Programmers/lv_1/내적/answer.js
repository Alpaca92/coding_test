function solution(a, b) {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}

/*
examples

<case 1>
a = [1,2,3,4]
b = [-3,-1,0,2]

result = 3

<case 2>
a = [-1,0,1]
b = [1,0,-1]	

result = -2
*/
