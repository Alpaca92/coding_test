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

\+[Jul 25, 2022]

```
테스트 01 〉	통과 (0.42ms, 29.9MB)
테스트 02 〉	통과 (0.51ms, 30.2MB)
테스트 03 〉	통과 (5887.05ms, 80.9MB)
테스트 04 〉	통과 (0.54ms, 30.1MB)
테스트 05 〉	통과 (0.45ms, 30.1MB)
테스트 06 〉	통과 (2.15ms, 30.1MB)
테스트 07 〉	통과 (23.52ms, 32.8MB)
테스트 08 〉	통과 (9.79ms, 32.1MB)
테스트 09 〉	통과 (1564.83ms, 58.4MB)
테스트 10 〉	통과 (65.72ms, 57.3MB)
테스트 11 〉	통과 (1941.90ms, 80.7MB)
테스트 12 〉	통과 (6.27ms, 31.9MB)
테스트 13 〉	통과 (0.77ms, 30MB)
테스트 14 〉	통과 (1933.17ms, 52.7MB)
테스트 15 〉	통과 (136.67ms, 61.4MB)
테스트 16 〉	통과 (1.44ms, 30MB)
테스트 17 〉	통과 (0.80ms, 30.1MB)
테스트 18 〉	통과 (6.13ms, 32MB)
테스트 19 〉	통과 (7.14ms, 32.1MB)
테스트 20 〉	통과 (1601.23ms, 52.5MB)
테스트 21 〉	통과 (3155.20ms, 67.1MB)
테스트 22 〉	통과 (0.33ms, 30MB)
테스트 23 〉	통과 (0.34ms, 30MB)
테스트 24 〉	통과 (0.28ms, 30MB)
```

통과는 했지만 메모리를 많이 잡아먹는 방법인듯했다

아래의 풀이는 가장 좋아요를 많이 받은 풀이다

```js
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}
```

처음에 중복되는 데이터를 없애고 split으로 2차원 배열을 만드는 것까지는 비슷했지만 이를 다루는 방식에서 큰 차이가 났던 것 같다

문제를 좀 더 직관적으로 보는 시각을 더 키워야겠다

\+[Oct 31, 2022]

```js
function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const setReport = Array.from(new Set([...report]));
  const reportedList = setReport.map((content) => content.split(" ")[1]);
  reportedList.reduce((counter, person) => {
    counter[person] = counter[person] ? counter[person] + 1 : 1;

    if (counter[person] === k) {
      const regex = new RegExp(` ${person}$`);
      const feedbackable = setReport.filter((content) => regex.test(content));

      feedbackable.forEach((content) => {
        const id = content.split(" ")[0];
        const index = id_list.indexOf(id);

        ++result[index];
      });
    }

    return counter;
  }, {});

  return result;
}
```

새로운 풀이를 위해 다시 풀어보았다

```js
function solution(id_list, report, k) {
  const result = {};
  const reportedList = id_list.reduce((list, id) => {
    const regex = new RegExp(` ${id}`);
    const reporters = report
      .filter((el) => regex.test(el))
      .map((el) => el.split(" ")[0]);

    return { ...list, [id]: [...new Set(reporters)] };
  }, {});

  Object.entries(reportedList).forEach(([reportedName, reporters]) => {
    if (reporters.length >= k)
      reporters.forEach(
        (reporter) => (result[reporter] = (result[reporter] || 0) + 1)
      );
  });

  return id_list.map((id) => result[id] || 0);
}
```

거의 대부분을 실패하고 가끔 시간초과인 부분도 있었다

```js
function solution(id_list, report, k) {
  const reportSet = [...new Set(report)];
  const bannedList = id_list.reduce((banned, id) => {
    const regex = new RegExp(` ${id}`);
    const reportedCounter = reportSet.filter((el) => regex.test(el)).length;

    if (reportedCounter >= k) return [...banned, id];
    return banned;
  }, []);

  return id_list.reduce((result, id, i) => {
    const regex = new RegExp(`${id} `);
    const reportedList = reportSet
      .filter((el) => regex.test(el))
      .map((el) => el.split(" ")[1]);

    if (bannedList.length === 0 || reportedList.length === 0) {
      result[i] = 0;
      return result;
    }

    bannedList.forEach((banned) => {
      result[i] = (result[i] || 0) + (reportedList.includes(banned) ? 1 : 0);
    });

    return result;
  }, []);
}
````

한 케이스에서 시간초과하였고, 거의 대부분의 케이스에서 실패하였다


