/*
* (Medium) Battleships in a board
* https://leetcode.com/problems/battleships-in-a-board/
*/

/**
* @param {character[][]} board
* @return {number}
*/
var count = 0;
var map = new Map();

var countBattleships = function(board) {
  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board[row].length; col++) {
      if (board[row][col] === 'X') {
        if (checkForShip(board, row, col)) {
          console.log(map);
          count++;
        }
      }
    }
  }
  return count;
};

function checkForShip(board, row, col) {
  console.log(row,col);
  console.log(board[row][col]);
  if (board[row][col] === undefined || map.get([row,col].toString() === 1))
    return false;
  else 
    map.set([row,col].toString(), 1);

  var tmpRow = row; 
  var tmpCol = col;

  // Check left
  if(board[row][tmpCol-1] !== undefined && board[row][tmpCol-1] !== '.') {
    while(board[row][tmpCol-1] !== undefined && board[row][tmpCol-1] !== '.') {
      if(map.get([tmpRow,tmpCol-1].toString()) === 1) {
        return false;
      } else {
        map.set([tmpRow,tmpCol-1].toString(), 1);
      }
      tmpCol--;
    }
    return true;
  }

  // Check Right
  else if(board[row][tmpCol+1] !== undefined && board[row][tmpCol+1] !== '.') {
    while(board[row][tmpCol+1] !== undefined && board[row][tmpCol+1] !== '.') {
      if (map.get([tmpRow,tmpCol+1].toString())=== 1) {
        return false;
      } else {
        map.set([tmpRow,tmpCol+1].toString(), 1);
        tmpCol++;
      }
    }
    return true;
  }

  //Check up
  else if(board[tmpRow-1] !== undefined && board[tmpRow-1][col] !== '.') {
    while(board[tmpRow-1] !== undefined && board[tmpRow-1][col] !== '.') {
      if (map.get([tmpRow-1,tmpCol].toString())=== 1) {
        return false;
      } else {
        map.set([tmpRow-1,tmpCol].toString(), 1);
        tmpRow--
      }
    }
    return true;
  }

  // Check down
  else if(board[tmpRow+1] !== undefined && board[tmpRow+1][col] !== '.') {
    while(board[tmpRow+1] !== undefined && board[tmpRow+1][col] !== '.') {
      if (map.get([tmpRow+1,tmpCol].toString())=== 1) {
        return false;
      } else {
        map.set([tmpRow+1,tmpCol].toString(), 1);
        tmpRow++;
      }
    }
    return true;
  }

  return false;
}

function printBoard(board) {
  for (var row = 0; row < board.length; row++) {
    console.log(board[row]);
  }
}

var board = [];
board[0] = ['X', '.', '.', 'X']
board[1] = ['.', '.', '.', 'X']
board[2] = ['.', '.', '.', 'X']

console.log(countBattleships(board));
console.log(map);
