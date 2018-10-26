// PSEUDO CODE

// https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

// https://repl.it/@PatrickHoban/JSTicTacToe

/* 
  1st row:  
    1st position: horizontal, vertical, diagonal
      horizontal: if > 0, look for a match next to it. if another 1, look right again. if found x wins.
      if no, look below, if yes, look below again, if yes, x wins.
      if no, look down plus one, if yes, look down plus one again, if yes, x wins.
    2nd position: vertical
    3rd position: vertical, diagonal reverse

  2nd row: 
    1st position: horizontal
    2nd position: NA
    3rd position: NA

  3rd row: 
    1st position: horizontal
    2nd position: NA
    3rd position: NA

  
 Check horizontals, board[i][0] board[i+1][0] board[i+2][0]
  sum of 0, 1, 2, means there are open positions.
  sum of 3 means X won. or empty, x and o.
    sum of 4 could be open positions or full.
  sum of 5 means row is full.
  sum of 6 means O won.

 Check verticals, board[i=0][j], board[i=0][j+1], board[i=0][j+2]


 Check diagonals, board[i=2][j=2]


 Flatten array?

 Check diagonal from middle out?


 NEW IDEA... WHAT IF I MULTIPLY?
 1*1*1 = 1
 2*2*2 = 8
 1*0*2 = 0, STILL OPEN SPACES
 1*2*2 = ...  ANY OTHER NUMBER IS A CATS GAME

 Looks at horizontal row 1. Declares a winner if there is one.
 Looks at vertical row 1, 2, and 3.  Declares a winner if there is one.




  RETURN: 
  return empty spots = -1
  return Xwon = 1
  return Owon = 2
  return catsgame = 0

*/

// CODE
function isSolved(board) {
  // Diagonals
  var diagOne = board[0][0] * board[1][1] * board[2][2];
  // console.log('diag one is ' + diagOne);
  var diagTwo = board[0][2] * board[1][1] * board[2][0];
  // console.log('diag two is ' + diagTwo);
  if (diagOne === 1 || diagTwo === 1) {
    console.log('X wins on diagonal!');
    return 1;
  }
  if (diagOne === 8 || diagTwo === 8) {
    console.log('O wins on diagonal!');
    return 2;
  }
  // Horizontals
  for (i = 0; i < board.length; i++) {
    var openSpace = false;
    var horizontal = board[i].reduce((a, b) => a * b);
    // console.log(horizontal)
    if (horizontal == 1) {
      console.log('X wins!');
      return 1;
    }
    if (horizontal == 8) {
      console.log('O wins!');
      return 2;
    }
    // wrap so it only executes vertically the first time through.
    if (i == 0) {
      for (j = 0; j < board.length; j++) {
        // console.log(board[i][j])
        if (board[i][j] > 0) {
          var vertical = board[i][j] * board[i + 1][j] * board[i + 2][j];

          if (vertical == 1) {
            console.log('X wins!');
            return 1;
          }
          if (vertical == 8) {
            console.log('O wins!');
            return 2;
          }
          if (vertical == 0) {
            openSpace = true;
            console.log(openSpace + ' Not a cats game yet.');
          }
          // console.log(checkH);
        }
      }
    }

    // console.log(board[i])
  }
  if (openSpace == false) {
    console.log('Its a draw');
    return 0;
  }
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

// Start with horizontal solves

// X win horizontal 1
a9 = [[2, 0, 2], [1, 1, 1], [0, 0, 0]];
// X win horizontal 2
a10 = [[2, 0, 2], [0, 0, 0], [1, 1, 1]];
// X win horizontal 3
a11 = [[1, 1, 1], [2, 0, 2], [0, 0, 0]];

console.log(isSolved(a9));
console.log(isSolved(a10));
console.log(isSolved(a11));

// O win horizontal 1
a12 = [[2, 2, 2], [1, 0, 1], [0, 1, 0]];
// O win horizontal 2
a13 = [[1, 0, 1], [2, 2, 2], [1, 0, 1]];
// O win horizontal 3
a14 = [[1, 0, 1], [1, 2, 1], [2, 2, 2]];

console.log(isSolved(a12));
console.log(isSolved(a13));
console.log(isSolved(a14));

// Vertical solutions

// X win vertical
a15 = [[1, 1, 2], [2, 1, 2], [0, 1, 0]];
// X win vertical
a16 = [[1, 1, 0], [2, 1, 2], [0, 1, 2]];
// X win vertical
a17 = [[1, 1, 2], [2, 1, 2], [0, 1, 0]];

console.log(isSolved(a15));
console.log(isSolved(a16));
console.log(isSolved(a17));

// O win vertical
a18 = [[0, 1, 2], [1, 2, 2], [1, 1, 2]];
// O win vertical
a19 = [[1, 2, 1], [0, 2, 2], [1, 2, 1]];
// O win vertical
a20 = [[2, 1, 1], [2, 2, 0], [2, 1, 1]];

console.log(isSolved(a18));
console.log(isSolved(a19));
console.log(isSolved(a20));

// DIAGONALS

// X win diagonal 1
a21 = [[1, 1, 2], [2, 1, 2], [0, 2, 1]];
// X win diagonal 2
a22 = [[2, 1, 1], [2, 1, 2], [1, 2, 0]];
// O win diagonal 1
a23 = [[2, 1, 0], [1, 2, 1], [0, 1, 2]];
// O win diagonal 2
a24 = [[1, 1, 2], [2, 2, 1], [2, 0, 1]];

console.log(isSolved(a21) + ' a21');
console.log(isSolved(a22) + ' a22');
console.log(isSolved(a23) + ' a23');
console.log(isSolved(a24) + ' a24');

// Bonus, zeros remaining cannot create a win for either X or O.
