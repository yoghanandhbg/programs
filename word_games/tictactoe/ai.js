class AIPlayer{
  constructor(){
    this.lastMove = null;
    this.emptyPlaces = [];

    this.grid = Array.from({length:3},() => Array.from({length:3}));
    this.grid.forEach((row,rowIdx) =>{
      row.forEach((el,colIdx) => this.grid[rowIdx][colIdx] = '_');
      this.emptyPlaces.push([rowIdx,colIdx]);
    });
  }

  decideMove(callback){

    let bingo = this.isBingo();
    let shit = this.isShit();

    if(bingo){
      this.lastMove = bingo;
      callback(bingo);
    }else if(shit){
      this.lastMove = shit;
      callback(shit);
    }else{
      this.lastMove = this.useBrain();
      callback(this.lastMove);
    }
  }

  isBingo(){

  }

  isShit(){

  }

  useBrain(){

  }

  scanRow(){

  }

  scanColumn(){

  }

  scanDiagonal(){

  }
}

module.exports = AIPlayer;
