const Board = require('./board');
const HumanPlayer = require('./human');
// const AIPlayer = require('./ai')

class Game{
  constructor(){
    this.board = new Board();
    this.lastMove = null;
  }

  assignPlayers(callback,completionCallback,reader){
    reader.question('play vs ai or human ?',(ans1) =>{
      if(ans1 === 'ai'){
        reader.question('Wanna go first ?',(ans2) =>{
          if(ans === 'yes'){
            this.player1 = new HumanPlayer();
            this.player2 = new AIPlayer(this.board);
            this.gameType = '1P';
            this.currentPlayer = this.player1;
            callback = callback.bind(this);
            callback(reader,completionCallback);
          }else{
            this.player2 = new HumanPlayer();
            this.player1 = new AIPlayer(this.board);
            this.gameType = '2P';
            this.currentPlayer = this.player1;
            callback = callback.bind(this);
            callback(reader,completionCallback);
          }
        });
      }else{
        this.player1 = new HumanPlayer(1); //args 1 and 2 indicate the players
        this.player2 = new HumanPlayer(2);
        console.log('human players set');
        this.currentPlayer = this.player1;
        callback = callback.bind(this);
        callback(reader,completionCallback);
      }
    });
  }

  switchPlayers(){
    if(this.currentPlayer === this.player1){
      this.currentPlayer = this.player2;
    }else{
      this.currentPlayer = this.player1;
    }
    this.board.changeMark();
  }

  makeMove(pos){
    pos = pos.split(',');
    pos = [parseInt(pos[0]),parseInt(pos[1])];
    let moveResult = this.board.makeMove(pos);
    if(moveResult){
      this.lastMove = pos;
      this.switchPlayers();
    }
    return moveResult;
  }

  run(reader,completionCallback){
    if(!this.player1){
      this.assignPlayers(this.run,completionCallback,reader);
    }else{
      this.board.render();
      let that = this;

      this.currentPlayer.decideMove((move) =>{
        console.log('received the move');
        let moveOk = that.makeMove(move);
        if(!moveOk){
          console.log('No cheating pls');
        }else{
          console.log('made the move');
        }

        if(that.board.isGameOver()){
          completionCallback();
        }else{
          that.run(reader,completionCallback);
        }
      },reader);
    }

  }
}

module.exports = Game;
