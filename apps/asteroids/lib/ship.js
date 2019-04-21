const Util = require('./util.js');
const Bullet = require('./bullet.js');

function Ship(params) {
  const RADIUS = 8;  // default values for ship
  const COLOR = 'red';
  params.radius = params.radius || RADIUS;
  params.color = params.color || COLOR;
  params.vel = [0,0];
  MovingObject.call(this,params);
}

Util.inherits(Ship,MovingObject);

Ship.prototype.relocate = function () {
  this.pos = this.game.randomPosition();
  this.vel = [0,0];
};

Ship.prototype.power = function (del_v) {
  this.vel[0] += del_v[0];
  this.vel[1] += del_v[1];
  console.log('vel = ' + this.vel)
};

Ship.prototype.fireBullet = function () {
  let v = [this.vel[0]*2,this.vel[1]*2];
  let bullet = new Bullet({pos: this.pos, vel: v});
  this.game.addBullet(bullet);
};

module.exports = Ship;
