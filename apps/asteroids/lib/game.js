const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');

function Game() {
  this.DIM_X = 1200;
  this.DIM_Y = 800;
  this.NUM_ASTEROIDS = 10;
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({
    pos: this.randomPosition(),
    game: this
  });
  this.bullets = [];
}

Game.prototype.addAsteroids = function () {
  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({
      pos: this.randomPosition(),
      game: this
    }));
  }
  // console.log(this.asteroids)
};

Game.prototype.addBullet = function (bullet) {
  this.bullets.push(bullet);
};

Game.prototype.draw = function (ctx,img) {
  // console.log('in draw');
  ctx.drawImage(img,0,0);
  // ctx.fillStyle = 'Black';
  // ctx.fillRect(0,0,1200,800);
  this.ship.draw(ctx);
  this.asteroids.forEach((asteroid) => {
    asteroid.draw(ctx);
    // console.log('i drew');
  })
  this.bullets.forEach((bullet) => {
    bullet.draw(ctx);
  })
};

Game.prototype.moveObjects = function (delta) {
  // console.log('in moveObjects');
  this.asteroids.forEach((asteroid) => {
    asteroid.move(delta);
  })
  this.ship.move(delta);
  // console.log(this.ship.pos)
  this.bullets.forEach((bullet) => {
    bullet.move(delta);
  })
};

Game.prototype.checkCollisions = function () {
  const asteroids = this.asteroids;
  for (var i = 0; i < asteroids.length-1; i++) {
    // asteroid with ship
    if(asteroids[i].isCollideWith(this.ship)) {
      asteroids[i].collideWith(this.ship);
      continue;
    }
    // asteroid with bullet
    for (var j = 0; j < this.bullets.length; j++) {
      if (this.bullets[j].isCollideWith(asteroids[i])) {
        asteroids[i].collideWith(this.bullets[j]);
        continue;
      }
    }
    // asteroid with asteroid
    for (var j = i+1; j < asteroids.length; j++) {
      if (asteroids[i].isCollideWith(asteroids[j])) {
        asteroids[i].collideWith(asteroids[j]);
        continue;
      }
    }
  }
  if (asteroids.length>0) {
    if(asteroids[asteroids.length-1].isCollideWith(this.ship)) {
      asteroids[asteroids.length-1].collideWith(this.ship);
    }
    for (var i = 0; i < this.bullets.length; i++) {
      if (asteroids[asteroids.length-1].isCollideWith(this.bullets[i])) {
        asteroids[asteroids.length-1].collideWith(this.bullets[i]);
      }
    }
  }
};

Game.prototype.remove = function (obj) {
  // console.log('collision !')
  if (obj instanceof Asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(obj),1);
  }else {
    this.bullets.splice(this.bullets.indexOf(obj),1);
  }
};

Game.prototype.step = function (delta) {
  this.moveObjects(delta);
  this.checkCollisions();
};

Game.prototype.wrap = function (pos) {
  let x = pos[0];
  let y = pos[1];

  if (x >= this.DIM_X) {
    x = x - this.DIM_X;
  }else if (x <= 0) {
    x = x + this.DIM_X;
  }

  if (y >= this.DIM_Y) {
    y = y - this.DIM_Y;
  }else if (y <= 0) {
    y = y + this.DIM_Y;
  }

  return [x,y];
};

Game.prototype.randomPosition = function () {
  let x = Math.floor(this.DIM_X * Math.random());
  let y = Math.floor(this.DIM_Y * Math.random());
  return [x,y];
};

module.exports = Game;
