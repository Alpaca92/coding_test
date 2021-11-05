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

/*
examples

<case 1>
board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
moves = [1,5,3,5,1,2,1,4]

result = 4
*/

/*
pseudo code

헷갈리지 않게 moves를 다 -1씩 빼준다(col을 idx화 시킴)
배열의 각 col의 idx를 모두 선회했을 때 0이면 아무일도 일어나지 않음
무언가 있다면 그 값을 0으로 치환하고 기존 값을 '바구니'에 넣는다
바구니에 넣었을 때 이전 값과 같은 값이면 그 두개를 없애고 result += 2를 한다
*/
