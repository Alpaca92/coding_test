### [신고 결과 받기](https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript)

```js
function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const removedDuplication = [...new Set([...report])];

  id_list.forEach((id) => {
    const reportedList = removedDuplication.filter((content) =>
      content.endsWith(` ${id}`)
    );

    if (reportedList.length >= k) {
      reportedList.forEach((reported) => {
        const [reporter] = reported.split(" ");
        const index = id_list.indexOf(`${reporter}`);

        ++result[index];
      });
    }
  });

  return result;
}
```

case 3, 11 시간 초과로 실패함

