// PSEUDO CODE

// CODE
function isSolved(board) {
  // TODO: Check if the board is solved!
}

// DRIVER CODE / TESTS

// Unsolved and unfinished.
a1 = [[0, 0, 1], [0, 1, 2], [2, 1, 0]]; // expect -1 = unsolved and unfinished return

// X win horizontal
a2 = [[1, 1, 1], [2, 0, 2], [0, 0, 0]];

// X win vertical
a3 = [[1, 1, 2], [2, 1, 2], [0, 1, 0]];

// X win diagonal
a4 = [[1, 1, 2], [2, 1, 2], [0, 2, 1]];

// O win horizontal
a5 = [[1, 1, 2], [2, 2, 2], [1, 0, 1]];

// O win vertical
a6 = [[1, 1, 2], [0, 2, 2], [1, 1, 2]];

// O win diagonal
a7 = [[1, 1, 2], [2, 2, 1], [2, 0, 1]];

// Game is finished and is a draw.  No zeros remaining.
a5 = [[1, 1, 2], [2, 2, 1], [1, 2, 1]];

// Bonus zeros remaining cannot create a win for either X or O.
