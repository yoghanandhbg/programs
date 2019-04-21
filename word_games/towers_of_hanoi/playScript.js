const Game = require('./game');

const readline = require('readline');
const reader = readline.createInterface({
  output: process.stdout,
  input: process.stdin
});

function completionCallback(){
  reader.question("wanna go another round bru ?",(res) =>{
    if(res === 'yes'){
      let game = new Game();
      game.run(reader,completionCallback);
    }else{
      reader.close();
    }
  });
}

let game = new Game();
game.run(reader,completionCallback);
