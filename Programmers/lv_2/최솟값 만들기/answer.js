function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let acc = 0;

  while (A.length) {
    const max = A[A.length - 1] >= B[B.length - 1] ? A.pop() : B.pop();
    const min = A.length < B.length ? B.shift() : A.shift();

    acc += max * min;
  }

  return acc;
}

/*
examples

<case 1>
A = [1, 4, 2]
B = [5, 4, 4]

answer = 29

<case 2>
A = [1, 2]
B = [3, 4]

answer = 10
*/
