### [크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)

```js
/*
pseudo code

헷갈리지 않게 moves를 다 -1씩 빼준다(col을 idx화 시킴)
배열의 각 col의 idx를 모두 선회했을 때 0이면 아무일도 일어나지 않음
무언가 있다면 그 값을 0으로 치환하고 기존 값을 '바구니'에 넣는다
바구니에 넣었을 때 이전 값과 같은 값이면 그 두개를 없애고 result += 2를 한다
*/
```

```js
function solution(board, moves) {
  moves = moves.map((move) => move - 1);

  let result = 0;
  let basket = [];

  moves.forEach((move) => {
    board.map((row) => {
      const col = row[move];

      if (col) {
        basket.push(col);
        // result가 증가하는가 검증
        if (
          basket[basket.length - 2] &&
          basket[basket.length - 1] &&
          basket[basket.length - 2] === basket[basket.length - 1]
        ) {
          basket = basket.slice(0, basket.length - 2);
          result += 2;

          console.log(result);
        }

        return (row[move] = 0);
      }
    });
  });
}
```
처음에는 위와 같은 코드를 쌌는데 `map()`같은 `bulit-in function`에서는 `break, continue`같은 statement가 작동하지 않는 것을 보고 `map()`을 그냥 `for`문으로 변경하였다

아직은 `for`문에 익숙하지 않아 `for...of Array`를 사용하지 않았지만 점점 익숙해지도록 노력해야겠다

\+ [Oct 25, 2022]

```js
function solution(board, moves) {
  moves = moves.map((move) => move - 1);

  let result = 0;
  let basket = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      const col = row[move];

      if (col) {
        basket.push(col);
        row[move] = 0;
        // result가 증가하는가 검증
        if (
          basket[basket.length - 2] &&
          basket[basket.length - 1] &&
          basket[basket.length - 2] === basket[basket.length - 1]
        ) {
          basket = basket.slice(0, basket.length - 2);
          result += 2;
        }
        break;
      }
    }
  });

  return result;
}
```

전에 풀었던 풀이와는 별개로 다시 한번 풀어보기로 하였다

왜 계속 값이 틀린가 했는데 '몇 번 터졌는가'가 아니고 '몇 개가 터졌는가'여서 틀렸었다

return을 할 때 *2를 해주니 바로 해결되었다

역시 문제를 꼼꼼하게 읽어야하는 것 같다