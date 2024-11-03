class chessBoard {
  constructor() {
    this.board = [];
    this.construct();
  }
  construct() {
    let len = 8;
    let row = [];
    for (let i = 0; i < len; i++) {
      row.push(i + 1);
    }
    for (let i = 0; i < len; i++) {
      this.board.push(row);
    }
  }
}
let test = new chessBoard();
console.log(test.board);
