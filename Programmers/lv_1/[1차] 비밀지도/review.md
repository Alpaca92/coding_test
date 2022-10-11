### [[1차] 비밀지도](https://school.programmers.co.kr/learn/courses/30/lessons/17681)

```js
function solution(n, arr1, arr2) {
  const parsedArr1 = arr1.map((num) => {
    const binaryNum = num.toString(2);

    if (n > binaryNum.length) {
      return "0".repeat(n - binaryNum.length) + binaryNum;
    } else {
      return binaryNum;
    }
  });

  const parsedArr2 = arr2.map((num) => {
    const binaryNum = num.toString(2);

    if (n > binaryNum.length) {
      return "0".repeat(n - binaryNum.length) + binaryNum;
    } else {
      return binaryNum;
    }
  });

  const answer = [];

  for (let i = 0; i < n; i++) {
    let result = "";

    for (let j = 0; j < parsedArr1[i].length; j++) {
      if (parseInt(parsedArr1[i][j]) + parseInt(parsedArr2[i][j]) === 0) {
        result += " ";
      } else {
        result += "#";
      }
    }

    answer.push(result);
  }

  return answer;
}
```

예전 풀이보다 좀 더 깔끔하게 풀 순 없을까하여 다시 풀게되었다

근데 풀이를 보니까 진짜 깔끔한 풀이가 있었다

```js
function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
```

정규표현식과 `replace`함수를 사용한 정말 깔끔한 풀이었다
