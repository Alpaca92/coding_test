function solution(board, moves) {
  return (
    moves.reduce(
      (result, move) => {
        const lastElement = result.stack[result.stack.length - 1];
        const column = move - 1;
        let caught = null;

        for (let row = 0; row < board.length; ++row) {
          if (board[row][column] !== 0) {
            caught = board[row][column];
            board[row][column] = 0;
            break;
          }
        }

        if (!caught) {
          return result;
        } else if (lastElement === caught) {
          ++result.counter;
          result.stack.pop();

          return result;
        } else if (caught && lastElement !== caught) {
          return {
            counter: result.counter,
            stack: [...result.stack, caught],
          };
        }
      },
      { counter: 0, stack: [] }
    ).counter * 2
  );
}

/*
examples

<case 1>
board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
moves = [1,5,3,5,1,2,1,4]

result = 4
*/
