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

// FIRST REFACTOR
function isSolved(board) {
  // Diagonals
  var diagOne = board[0][0] * board[1][1] * board[2][2];
  var diagTwo = board[0][2] * board[1][1] * board[2][0];
  if (diagOne === 1 || diagTwo === 1) {
    return 1;
  }
  if (diagOne === 8 || diagTwo === 8) {
    return 2;
  }

  // Set variable for game still being played, open moves still on the board.
  var openSpace = false;

  // Horizontals
  for (i = 0; i < board.length; i++) {
    var horizontal = board[i].reduce((a, b) => a * b);
    if (horizontal == 1) {
      return 1;
    }
    if (horizontal == 8) {
      return 2;
    }

    // Wrap for statement with if, so it only executes vertically the first time through.
    if (i == 0) {
      for (j = 0; j < board.length; j++) {
        var vertical = board[i][j] * board[i + 1][j] * board[i + 2][j];
        if (vertical == 1) {
          return 1;
        }
        if (vertical == 8) {
          return 2;
        }
        if (vertical == 0) {
          openSpace = true;
        }
      }
    }
  }
  // Game not over or cats game
  if (openSpace == false) {
    return 0;
  } else {
    return -1;
  }
}

// FIRST FUNCTIONAL PASS!
// function isSolved(board) {
//   // Diagonals
//   var diagOne = board[0][0] * board[1][1] * board[2][2];
//   // console.log('diag one is ' + diagOne);
//   var diagTwo = board[0][2] * board[1][1] * board[2][0];
//   // console.log('diag two is ' + diagTwo);
//   if (diagOne === 1 || diagTwo === 1){
//     console.log('X wins on diagonal!')
//     return 1
//   }
//   if (diagOne === 8 || diagTwo === 8){
//     console.log('O wins on diagonal!')
//     return 2
//   }

//   // Set variable for game still being played, open moves still on the board.
//   var openSpace = false;

//   // Horizontals
//   for (i=0; i<board.length; i++) {
//     var horizontal = board[i].reduce((a, b) => a * b)
//     // console.log(horizontal)
//     if (horizontal == 1) {
//       console.log('X wins!')
//       return 1
//     }
//     if (horizontal == 8) {
//       console.log('O wins!')
//       return 2
//     }
//     // wrap so it only executes vertically the first time through.
//     if (i == 0) {
//       for (j=0; j<board.length; j++){
//         // console.log(board[i][j])
//         if(board[i][j]>0){
//           var vertical = board[i][j] * board[i+1][j] * board[i+2][j];

//           if (vertical == 1) {
//             console.log('X wins!')
//             return 1
//           }
//           if (vertical == 8) {
//             console.log('O wins!')
//             return 2
//           }
//           if (vertical == 0) {
//             openSpace = true;
//             console.log(openSpace + ' Not a cats game yet.');
//           }
//           // console.log(checkH);
//         }
//       }
//     }
//     // console.log(board[i])
//   }
//   console.log(openSpace)
//   if (openSpace == false) {
//     console.log('Its a draw')
//     return 0;
//   } else {
//     console.log('Keep playing, not over yet!')
//     return -1;
//   }
// }

// DRIVER CODE / TESTS

// Horizontal Solutions

// X win horizontal 1
a1 = [[2, 0, 2], [1, 1, 1], [0, 0, 0]];
// X win horizontal 2
a2 = [[2, 0, 2], [0, 0, 0], [1, 1, 1]];
// X win horizontal 3
a3 = [[1, 1, 1], [2, 0, 2], [0, 0, 0]];

console.log(isSolved(a1) + ' a1');
console.log(isSolved(a2) + ' a2');
console.log(isSolved(a3) + ' a3');

// O win horizontal 1
a4 = [[2, 2, 2], [1, 0, 1], [0, 1, 0]];
// O win horizontal 2
a5 = [[1, 0, 1], [2, 2, 2], [1, 0, 1]];
// O win horizontal 3
a6 = [[1, 0, 1], [1, 2, 1], [2, 2, 2]];

console.log(isSolved(a4) + ' a4');
console.log(isSolved(a5) + ' a5');
console.log(isSolved(a6) + ' a6');

// Vertical solutions

// X win vertical
a7 = [[1, 1, 2], [2, 1, 2], [0, 1, 0]];
// X win vertical
a8 = [[1, 1, 0], [2, 1, 2], [0, 1, 2]];
// X win vertical
a9 = [[1, 1, 2], [2, 1, 2], [0, 1, 0]];

console.log(isSolved(a7) + ' a7');
console.log(isSolved(a8) + ' a8');
console.log(isSolved(a9) + ' a9');

// O win vertical
a10 = [[0, 1, 2], [1, 2, 2], [1, 1, 2]];
// O win vertical
a11 = [[1, 2, 1], [0, 2, 2], [1, 2, 1]];
// O win vertical
a12 = [[2, 1, 1], [2, 2, 0], [2, 1, 1]];

console.log(isSolved(a10) + ' a10');
console.log(isSolved(a11) + ' a11');
console.log(isSolved(a12) + ' a12');

// DIAGONALS

// X win diagonal 1
a13 = [[1, 1, 2], [2, 1, 2], [0, 2, 1]];
// X win diagonal 2
a14 = [[2, 1, 1], [2, 1, 2], [1, 2, 0]];
// O win diagonal 1
a15 = [[2, 1, 0], [1, 2, 1], [0, 1, 2]];
// O win diagonal 2
a16 = [[1, 1, 2], [2, 2, 1], [2, 0, 1]];

console.log(isSolved(a13) + ' a13');
console.log(isSolved(a14) + ' a14');
console.log(isSolved(a15) + ' a15');
console.log(isSolved(a16) + ' a16');

// UNFINISHED GAME

// Unsolved and unfinished.  Still has open spaces.  Expect -1 return.
a17 = [[0, 0, 1], [0, 1, 2], [2, 1, 0]];
console.log(isSolved(a17) + ' a17 keep playing');

a19 = [[2, 0, 2], [2, 1, 1], [1, 2, 1]]; // Expected: -1, instead got: 0
console.log(isSolved(a19) + ' a19 keep playing, expect -1');

// TIE GAME / DRAW / CATS GAME
// Game is finished and is a draw.  No zeros remaining.
a18 = [[1, 1, 2], [2, 2, 1], [1, 2, 1]];
console.log(isSolved(a18) + ' a18 game over tie game');

// Bonus, zeros remaining cannot create a win for either X or O.
