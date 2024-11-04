export class Node {
  constructor(location, pastMoves = []) {
    this.pastMoves = pastMoves;
    this.legalMoves = [];
    this.location = location;
    this.calculateMoves(location);
  }
  calculateMoves() {
    const possibleMoves = [
      [2, 1],
      [2, -1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [1, -2],
      [-1, -2],
    ];
    for (let i = 0; i < possibleMoves.length; i++) {
      let x = this.location[0] + possibleMoves[i][0];
      let y = this.location[1] + possibleMoves[i][1];

      if (x >= 0 && x < 8) {
        if (y >= 0 && y < 8) {
          this.legalMoves.push([x, y]);
        }
      }
    }
    if (this.legalMoves.length == 0) {
      return;
    }
    this.pastMoves.push(this.location);
    return this.legalMoves;
  }
  knightMove(target, moves = this.legalMoves) {
    if (target[0] == this.location[0] && target[1] == this.location[1]) {
      console.log(`Reached in ${this.pastMoves.length - 1} hops:`);
      this.pastMoves.forEach((move) => {
        console.log(move);
        return;
      });
    }
  }
}
