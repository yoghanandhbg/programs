const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
  this.lastTime = 0;
}

GameView.prototype.start = function () {
  this.img = new Image();
  this.img.onload = () => {
    this.bindKeyHandlers();
    requestAnimationFrame(this.animate.bind(this));
    // setInterval(() => {
    //   this.game.draw(this.ctx,this.img);
    //   this.game.step();
    // },20);
  }
  this.img.src = 'space.jpg';
};

GameView.prototype.animate = function (curr_time) {
  const delta = curr_time - this.lastTime;
  // console.log(this)
  this.game.step(delta);
  this.game.draw(this.ctx,this.img);
  this.lastTime = curr_time;
  requestAnimationFrame(this.animate.bind(this));
};

GameView.MOVES = {
  w: [0,-1],
  a: [-1,0],
  s: [0,1],
  d: [1,0]
};

GameView.prototype.loadBackgroundImage = function () {
  this.img = new Image();
  this.img.onload = () => {
    this.ctx.drawImage(this.img,0,0);
  }
  this.img.src = 'space.jpg';
};

GameView.prototype.bindKeyHandlers = function () {
  Object.keys(GameView.MOVES).forEach(k => {
    key(k,() => {
      this.game.ship.power(GameView.MOVES[k]);
    } );
  });

  key('space',() => {this.game.ship.fireBullet()});
};

module.exports = GameView;
