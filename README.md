# 🐴 Knight Travails 🐴

The Knight Travails project for the Odin Project

## The project

Given a knight's position on a chess board, calculate the shortest path it can take to reach another point on the board.

# How does it work?

This works by treating the chess board like a graph. Using breadth-first traversal, the knight explores all possible moves until the end point is reached. It then returns the full path the the knight took, using a two-dimensional array to calculate coordinates. So for example:

`[0, 0]` would be A1 on the physical chess board.
`[1, 1]` would be B2 on the physical chess board

And so on and so forth.

## How can I play with this?

The `main.js` file imports the Node object. This is your knight's starting point on the board - `[0, 0]` for A1, for example.

Once you set your kinght's coordinates, you call the Node's `knightMove` method, with the end coordinates as the destination. So to get from A1 to H8, you would do something like this in `main.js`:

```javascript
const start - new Node([0,0])
start.knightMoves([7,7])
```

Which returns the following in the terminal:

```
Reached in 6 hops:
[ 0, 0 ]
[ 2, 1 ]
[ 4, 2 ]
[ 6, 3 ]
[ 7, 5 ]
[ 5, 6 ]
[ 7, 7 ]
```
