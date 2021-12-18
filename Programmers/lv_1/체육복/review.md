### [체육복](https://programmers.co.kr/learn/courses/30/lessons/42862)

```js
/*
pseudo code

예약자의 본인의 이름이 있는지 확인한다
있다면 예약자에서 본인의 이름을 없애고 분실자에서도 해당 번호의 이름을 지운다

예약자의 전번호가 lost에 있는지를 확인한다
있다면 예약자에서 본인의 이름을 없애고 분실자에서도 해당 번호의 이름을 지운다
예약자의 전원을 다 훑어봤다면 이번엔 뒷번호가 lost에 있는지를 확인하고 지우기를 반복한다

반복이 다 끝났다면 n - lost.length가 수업을 들을 수 있는 인원 수이다

반례 : R L R L 이면 위 알고리즘대로 하면 3이지만 정답은 4이다
*/
```

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

\+ [12/16]

구글링을 하여 정렬을 하는 것이 기본인듯하여 정렬을 하고 빈 배열을 만들어 풀어보았다

```js
/*
pseudo code

arr를 n개만큼 만든다 [0, 0, 0, 0, 0]
모든 idx(lost의 있는 숫자 - 1)에 대해 -1을 해준다 [0, -1, 0, -1, 0]
if 자기 idx(reserve의 있는 숫자 - 1)이 음수라면 거기에 1을 더해준다
elif idx(reserve의 있는 숫자 - 2)이 음수라면 1을 더해준다
elif idx(reserve의 있는 숫자)이 음수라면 1을 더해준다

모든 reserve에 대하여 위 행위를 진행하고 return (filter >= 0).length
*/
```

```js
function solution(n, lost, reserve) {
  const students = [...new Array(n)].map((student) => 0);

  lost
    .sort((a, b) => a - b)
    .forEach((lostStudent) => --students[lostStudent - 1]);

  reserve
    .sort((a, b) => a - b)
    .forEach((reserveStudent) => {
      if (students[reserveStudent - 1] === -1) {
        ++students[reserveStudent - 1];
      } else if (students[reserveStudent - 2] === -1) {
        ++students[reserveStudent - 2];
      } else if (students[reserveStudent] === -1) {
        ++students[reserveStudent];
      }
    });

  return students.filter((student) => student === 0).length;
}
```

이번엔 거의 모든 케이스에서 성공했지만 `test case 5`는 통과하지 못했다

확인해보니

```js
n = 5;
lost = [3, 4];
reserve = [2, 3];
```

같은 상황에서 `reserve`의 `element` 하나하나에 대해 작업하다 보니 `자기 자신이 잃어버린 사람은 남을 빌려주지 못한다`라는 조항을 반하는 상황이 왔던 것이였다

```js
function solution(n, lost, reserve) {
  const students = [...new Array(n)].map((student) => 0);

  lost
    .sort((a, b) => a - b)
    .forEach((lostStudentIdx) => --students[lostStudentIdx - 1]);

  reserve
    .filter((reserveStudentIdx) => {
      if (students[reserveStudentIdx - 1] == -1) {
        ++students[reserveStudentIdx - 1];

        return false;
      }

      return true;
    })
    .sort((a, b) => a - b)
    .forEach((reserveStudentIdx) => {
      if (students[reserveStudentIdx - 2] === -1) {
        ++students[reserveStudentIdx - 2];
      } else if (students[reserveStudentIdx] === -1) {
        ++students[reserveStudentIdx];
      }
    });

  return students.filter((student) => student === 0).length;
}
```

이 문제를 먼저 `filtering`하는 것으로 문제를 해결할 수 있었다

하지만 역시나 다른 사람의 풀이를 보면

```js
function solution(n, lost, reserve) {
  const realReserve = reserve.filter((r) => !lost.includes(r));
  const realLost = lost.filter((r) => !reserve.includes(r));
  const ableNum = realLost.filter((a) => {
    return realReserve.find((b, i) => {
      const has = b === a - 1 || b === a + 1;
      if (has) {
        delete realReserve[i];
      }
      return has;
    });
  }).length;
  return n - (realLost.length - ableNum);
}
```

`delete operator`를 써서 배열을 깔끔하게 처리하는 것을 볼 수 있었다

이는 `slice`를 주로 사용하던 나에게 어떻게하면 `array`의 length의 변화는 없이 element는 없애는 새로운 방식이였다(0 등으로 치환하는 방식 이외의)

그리고 `const has = b === a - 1 || b === a + 1`으로 `탐욕법(Greedy)` 알고리즘을 잘 풀어낸 코드라고 생각한다

좀 더 깔끔한 코드를 위해 매일매일 1일 1커밋을 하는 내가 되었으면 좋겠다
