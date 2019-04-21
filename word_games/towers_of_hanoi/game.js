

class Game{
  constructor(){
    this.towers = [[3,2,1],[],[]];
  }

  promptMove(reader,callback){
    this.print();
    reader.question("Enter the starting and ending positions for a move one after the other (no spaces): ",args =>{
      callback(...args);
    });
  }

  isValidMove(start,end){
    if(this.towers[start].length === 0){
      return false;
    }else if(this.towers[end].length === 0){
      return true;
    }else if(this.towers[end][this.towers[end].length-1] < this.towers[start][this.towers[start].length-1]){
      return false;
    }else{
      return true;
    }
  }

  move(start,end){
    if(this.isValidMove(start,end)){
      this.towers[end].push(this.towers[start].pop());
      return true;
    }else{
      return false;
    }
  }

  print(){
    console.log(this.towers);
  }

  isWon(){
    if(this.towers[2].length === 3){
      return true;
    }
    return false;
  }

  run(reader,completionCallback){
    this.promptMove(reader,(start,end) =>{
      if(!this.move(start,end)){
        console.log('u trying to cheat bro ?')
      }

      if(this.isWon()){
        console.log("u da Einstein bro")
        completionCallback();
      }else{
        this.run(reader,completionCallback);
      }
    });
  }

}

module.exports = Game;
