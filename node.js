export class Node {
  constructor(location) {
    this.location = location;
  }
  // calculateMoves() {
  //   for (let i = 0; i < this.possibleMoves.length; i++) {
  //     let x = this.location[0] + this.possibleMoves[i][0];
  //     let y = this.location[1] + this.possibleMoves[i][1];

  //     if (x >= 0 && x < 8) {
  //       if (y >= 0 && y < 8) {
  //         this.legalMoves.push([x, y]);
  //       }
  //     }
  //   }
  //   if (this.legalMoves.length == 0) {
  //     return;
  //   }
  //   this.pastMoves.push(this.location);
  //   return this.legalMoves;
  // }
  knightMove(target) {
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
    const queue = [[this.location, [this.location]]];
    const visited = new Set();
    visited.add(`${this.location[0]}, ${this.location[1]}}`);
    while (queue.length > 0) {
      let [currentPosition, path] = queue.shift();
    }
    if (currentPosition[0] === target[0] && currentPosition[1] === target[1]) {
      console.log(`Reached in ${path.length - 1} hops:`);
      path.forEach((move) => console.log(move));
      return;
    }
  }
}
