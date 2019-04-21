class Board{
  constructor(){
    this.grid = Array.from({length:3},() => Array.from({length:3}));
    this.grid.forEach((row,rowIdx) =>{
      row.forEach((el,colIdx) => this.grid[rowIdx][colIdx] = '_');
    });

    this.currentPlayer = 1;
    this.currentMark = 'X'; //mark correspondong to player 1
    this.currentMove = null; //position of the latest move
  }

  changeMark(){
    if(this.currentPlayer === 1){
      this.currentPlayer = 2;
    }else{
      this.currentPlayer = 1;
    }

    this.currentMark = this.oppositeMark();

  }

  oppositeMark(){
    if(this.currentMark === 'X'){
      return 'O';
    }else{
      return 'X';
    }
  }

  render(){
    this.grid.forEach((row) =>{
      let rowString = ""
      row.forEach((el) => {
        rowString += el + " ";
      });
      console.log(rowString);
    });
  }

  makeMove(pos){
    if(this.isValidMove(pos)){
      this.grid[pos[0]][pos[1]] = this.currentMark;
      this.currentMove = pos;
      return true;
    }else{
      return false;
    }
  }

  isValidMove(pos){
    let len = this.grid.length;
    if(pos[0]>len-1 || pos[1]>len-1 || pos[1]<0 || pos[0]<0){
      return false;
    }

    if(this.grid[pos[0]][pos[1]] !== '_'){
      return false;
    }else{
      return true;
    }
  }

  isGameOver(){
    if(this.scanRow() || this.scanColumn() || this.scanDiagonal()){
      this.displayWinner();
      return true;
    }else if(this.isFull()){
      this.displayTie();
      return true;
    }else{
      return false;
    }

  }

  displayWinner(){
    console.log(`The winner is Player ${this.currentPlayer}`);
  }

  displayTie(){
    console.log('No one aint the winner niggas');
  }

  isFull(){
    let ans = true;
    this.grid.forEach(row =>{
      row.forEach(el =>{
        if(el === '_'){
          ans = false;
        }
      });
    });
    return ans;
  }

  scanRow(){//keep currentmove's row fixed and vary column

    let current_marker_count = 0;

    for(let i = 0; i<this.grid.length; i++){
      if(this.grid[this.currentMove[0]][i] === this.oppositeMark()){
        current_marker_count++;
      }
    }

    if(current_marker_count === 3){
      return true;
    }else{
      return false;
    }
  }

  scanColumn(){//here keep the col constant and vary the row index

    let current_marker_count = 0;

    for(let i = 0; i<this.grid.length; i++){
      if(this.grid[i][this.currentMove[1]] === this.oppositeMark()){
        current_marker_count++;
      }
    }

    if(current_marker_count === 3){
      return true;
    }else{
      return false;
    }
  }

  scanDiagonal(){

    let row = this.currentMove[0];
    let col = this.currentMove[1];
    let size = this.grid.length;
    let current_marker_count = 0;

    if(row === col){
      current_marker_count = 0;
      for(let i = 0; i <size; i++){
        if(this.grid[i][i] === this.oppositeMark()){
          current_marker_count++;
        }
      }
    }

    if(row+col === size-1){
      current_marker_count = 0;
      for(let i = 0; i <size; i++){
        if(this.grid[size-1-i][i] === this.oppositeMark()){
          current_marker_count++;
        }
      }
    }

    if(current_marker_count === 3){
      return true;
    }else{
      return false;
    }

  }
}

module.exports = Board;
