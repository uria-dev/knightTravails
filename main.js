const chessBoard = function () {
  let len = 8;
  let board = [];
  let row = [];
  for (let i = 0; i < len; i++) {
    row.push(i + 1);
  }

  for (let i = 0; i < 8; i++) {
    board.push(row);
  }
  return board;
};
chessBoard();
console.log(chessBoard());
