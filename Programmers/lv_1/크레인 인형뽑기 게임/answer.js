function solution(board, moves) {
  return moves.reduce(
    (result, move) => {
      let caught = null;

      for (let row = 0; row < board.length; ++row) {
        const column = move - 1;

        if (board[row][column] !== 0) {
          caught = board[row][column];
          board[row][column] = 0;
          break;
        }
      }
      if (!caught) {
        return result;
      } else if (result.stack.at(-1) === caught) {
        ++result.counter;
        result.stack.pop();

        return result;
      } else if (!caught && result.stack.at(-1) !== caught) {
        return {
          counter,
          stack: [...result.stack, caught],
        };
      }
    },
    { counter: 0, stack: [] }
  ).counter;
}

/*
examples

<case 1>
board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
moves = [1,5,3,5,1,2,1,4]

result = 4
*/
