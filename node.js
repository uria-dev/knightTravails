export class Node {
  constructor(location) {
    this.legalMoves = [];
    this.location = location;
    this.calculateMoves(location);
    this.visited = false;
  }
  calculateMoves(currentLocation = this.location) {
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
      let move = [
        currentLocation[0] + possibleMoves[i][0],
        currentLocation[1] + possibleMoves[i][1],
      ];
      if (move[0] >= 0 && move[1] >= 0) {
        this.legalMoves.push(move);
      }
    }
    console.log(this.legalMoves);
  }
}
