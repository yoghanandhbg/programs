function MovingObject(params) {
  this.pos = params.pos;
  this.vel = params.vel;
  this.radius = params.radius;
  this.color = params.color;
  this.game = params.game;
  this.isWrappable = true;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2*Math.PI
  )

  ctx.fill();
};

MovingObject.prototype.move = function (delta) {
  delta = delta || 1;
  this.pos[0] += this.vel[0]*delta/20;
  this.pos[1] += this.vel[1]*delta/20;
  if (this.isWrappable) {
    this.pos = this.game.wrap(this.pos);
  }
};

MovingObject.prototype.isCollideWith = function (otherObject) {
  let x1 = this.pos[0];
  let y1 = this.pos[1];
  let x2 = otherObject.pos[0];
  let y2 = otherObject.pos[1];

  let distance = Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));

  if (distance <= this.radius + otherObject.radius) {
    return true;
  }else {
    return false;
  }
};

MovingObject.prototype.collideWith = function (otherObject) {
  // this.game.remove(this);
  // this.game.remove(otherObject);
};

module.exports = MovingObject;
