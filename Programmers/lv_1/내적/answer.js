function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
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
