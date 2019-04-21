class HumanPlayer{
  constructor(id){
    this.id = id;
  }

  decideMove(callback,reader){
    if(this.id){
      reader.question(`Player ${this.id} make your move (eg: 0,1): `,move => callback(move) );
    }else{
      reader.question('Make your move (eg: 0,1): ', move => callback(move) );
    }
  }
}

module.exports = HumanPlayer;
