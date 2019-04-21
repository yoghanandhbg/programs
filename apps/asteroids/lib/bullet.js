const Util = require('./util.js');

function Bullet(params) {
  const RADIUS = 3;  // default values for bullet
  const COLOR = 'yellow';
  params.radius = params.radius || RADIUS;
  params.color = params.color || COLOR;
  MovingObject.call(this,params);
  this.isWrappable = false;
}

Util.inherits(Bullet,MovingObject);

module.exports = Bullet;
