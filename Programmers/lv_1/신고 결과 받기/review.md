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

```js
function solution(id_list, report, k) {
  const result = id_list.reduce((prev, cur) => ({ ...prev, [cur]: 0 }), {});
  const usableReportList = [];
  const removedDuplication = [...new Set([...report])];

  id_list.forEach((id) => {
    const filteredReport = removedDuplication.filter((content) =>
      content.endsWith(` ${id}`)
    );
    const isUsable = filteredReport.length >= k;

    if (isUsable) usableReportList.push(filteredReport);
  });

  usableReportList.flat().forEach((usableReport) => {
    const [reporter] = usableReport.split(" ");

    ++result[reporter];
  });

  return Object.values(result);
}
```

좀 더 획기적이라고 생각했는데 조금의 시간 단축은 있었지만 동일하게 case 3, 11 시간 초과로 실패함