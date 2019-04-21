let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let arr = Array.from({length:8},() => Array.from({length:8} ));
  arr[3][3] = new Piece('white');
  arr[4][4] = new Piece('white');
  arr[3][4] = new Piece('black');
  arr[4][3] = new Piece('black');

  return arr;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if(this.isValidPos(pos)){
    return this.grid[pos[0]][pos[1]];
  }else {
    throw new Error('Invalid position');
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length !== 0;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos);
  return piece && piece.color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return !!this.getPiece(pos);
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return !this.hasMove('white') && !this.hasMove('black');
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return pos[0] <= 8 && pos[0] >= 0 && pos[1] <= 8 && pos[1] >= 0;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {

  // terminate if the next square is -
  // 1. invalid or empty position (return null)
  // 2. same color (return the pieces)
  if(!piecesToFlip){
    piecesToFlip = [];
  }else {
    piecesToFlip.push(pos);
  }

  let nxt = [pos[0]+dir[0],pos[1]+dir[1]];

  if(!board.isValidPos(nxt)){
    return null;
  }

  if(!board.isOccupied(nxt)){
    return null;
  }

  if(board.getPiece(nxt).color === color){
    (piecesToFlip.length === 0) ? return null : return piecesToFlip;
  }else {
    return _positionsToFlip(board,nxt,color,dir,piecesToFlip);
  }

}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if(this.validMove(pos,color)){
    throw new Error('Invalid move')
  }

  let pos_to_flip = [];

  for(let i =0; i<this.DIRS.length; i++){
    pos_to_flip.push(_positionsToFlip(this,pos,color,this.DIRS[i],piecesToFlip));
  }

  this.grid[pos[0]][pos[1]] = new Piece(color);

  for(let i = 0; i < pos_to_flip.length; i++){
    if(pos_to_flip[i]){
      this.getPiece(pos_to_flip[i]).flip;
    }
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  let len = this.grid.length;
  let brth = this.grid[0].length;

  for(let i = 0; i < len; i++){
    let row = "";
    for(let j = 0;j<brth;j++){
      row += try{
        this.getPiece([i,j]).toString;
      }
      catch(err){
        '-';
      }
      console.log(row)
    }
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if(this.isOccupied(pos)){
    return false;
  }

  let pos_to_flip = [];

  for(let i =0; i<this.DIRS.length; i++){
    pos_to_flip.push(_positionsToFlip(this,pos,color,this.DIRS[i],piecesToFlip));
  }

  for(let i = 0; i < pos_to_flip.length; i++){
    if(pos_to_flip[i]){
      return true;
    }
  }
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {   //incomplete
  let ans =[];
  for(let i=0;i<this.grid.length;i++){
    for(let j=0;j<this.grid[0].length;j++){
      let pos = [i,j];
    }
  }
};

module.exports = Board;
