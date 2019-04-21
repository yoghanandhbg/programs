const Util = {};

Util.inherits = function (subClass,superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
}

Util.randomVec = function (length) {
  let rand_ang = 2*Math.PI*Math.random();
  let x_comp = length * Math.sin(rand_ang);
  let y_comp = length * Math.cos(rand_ang);
  return [x_comp,y_comp];
}

module.exports = Util;
