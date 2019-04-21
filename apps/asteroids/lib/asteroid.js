
const Util = require('./util.js');
const Ship = require('./ship.js');

function Asteroid(params) {
  const RADIUS = 15;  // default values for asteroid
  const COLOR = 'grey';
  params.radius = params.radius || RADIUS;
  params.color = params.color || COLOR;
  params.vel = Util.randomVec(1);
  MovingObject.call(this,params);
}

Util.inherits(Asteroid,MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }else {
    this.game.remove(this);
    this.game.remove(otherObject);
  }
};

module.exports = Asteroid;
