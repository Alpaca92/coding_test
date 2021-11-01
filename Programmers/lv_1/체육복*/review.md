### [체육복](https://programmers.co.kr/learn/courses/30/lessons/42862)

```js
function removeElement(arr, idx) {
  return arr.slice(0, idx).concat(arr.slice(idx + 1));
}

function solution(n, lost, reserve) {
  reserve.forEach((student) => {
    if (lost.includes(student)) {
      const idx = lost.indexOf(student);

      lost = removeElement(lost, idx);
    } else if (lost.indexOf(student - 1) !== -1) {
      const idx = lost.indexOf(student - 1);

      lost = removeElement(lost, idx);
    } else if (lost.indexOf(student + 1) !== -1) {
      const idx = lost.indexOf(student + 1);

      lost = removeElement(lost, idx);
    }
  });

  return n - lost.length;
}
```

처음에는 위와 같이 코드를 짰는데 `case 5, 7, 18, 20`에서 실패하였다.

