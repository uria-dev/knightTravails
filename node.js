export class Node {
  constructor(location) {
    this.location = location;
  }
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

      if (
        currentPosition[0] === target[0] &&
        currentPosition[1] === target[1]
      ) {
        console.log(`Reached in ${path.length - 1} hops:`);
        path.forEach((move) => console.log(move));
        return;
      }
      for (let move of possibleMoves) {
        const x = currentPosition[0] + move[0];
        const y = currentPosition[1] + move[1];
        if (x >= 0 && x < 8 && y >= 0 && y < 8 && !visited.has(`${x},${y}`)) {
          visited.add(`${x},${y}`);
          queue.push([
            [x, y],
            [...path, [x, y]],
          ]);
        }
      }
    }
  }
}
