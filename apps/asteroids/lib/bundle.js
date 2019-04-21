/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./lib/ship.js\");\n\nfunction Asteroid(params) {\n  const RADIUS = 15;  // default values for asteroid\n  const COLOR = 'grey';\n  params.radius = params.radius || RADIUS;\n  params.color = params.color || COLOR;\n  params.vel = Util.randomVec(1);\n  MovingObject.call(this,params);\n}\n\nUtil.inherits(Asteroid,MovingObject);\n\nAsteroid.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }else {\n    this.game.remove(this);\n    this.game.remove(otherObject);\n  }\n};\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working !\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nwindow.MovingObject = MovingObject;\n\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\",() => {\n  const canvas_el = document.getElementById(\"game-canvas\");\n  const ctx = canvas_el.getContext(\"2d\");\n  const game_view = new GameView(ctx);\n  // console.log('starting game_view')\n  game_view.start();\n\n  // let mov = new MovingObject({\n  //   pos: [100,100],\n  //   vel: [1,1],\n  //   radius: 10,\n  //   color: 'red'\n  // });\n  // mov.draw(ctx);\n})\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/bullet.js":
/*!***********************!*\
  !*** ./lib/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n\nfunction Bullet(params) {\n  const RADIUS = 3;  // default values for bullet\n  const COLOR = 'yellow';\n  params.radius = params.radius || RADIUS;\n  params.color = params.color || COLOR;\n  MovingObject.call(this,params);\n  this.isWrappable = false;\n}\n\nUtil.inherits(Bullet,MovingObject);\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./lib/bullet.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./lib/ship.js\");\n\nfunction Game() {\n  this.DIM_X = 1200;\n  this.DIM_Y = 800;\n  this.NUM_ASTEROIDS = 10;\n  this.asteroids = [];\n  this.addAsteroids();\n  this.ship = new Ship({\n    pos: this.randomPosition(),\n    game: this\n  });\n  this.bullets = [];\n}\n\nGame.prototype.addAsteroids = function () {\n  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids.push(new Asteroid({\n      pos: this.randomPosition(),\n      game: this\n    }));\n  }\n  // console.log(this.asteroids)\n};\n\nGame.prototype.addBullet = function (bullet) {\n  this.bullets.push(bullet);\n};\n\nGame.prototype.draw = function (ctx,img) {\n  // console.log('in draw');\n  ctx.drawImage(img,0,0);\n  // ctx.fillStyle = 'Black';\n  // ctx.fillRect(0,0,1200,800);\n  this.ship.draw(ctx);\n  this.asteroids.forEach((asteroid) => {\n    asteroid.draw(ctx);\n    // console.log('i drew');\n  })\n  this.bullets.forEach((bullet) => {\n    bullet.draw(ctx);\n  })\n};\n\nGame.prototype.moveObjects = function (delta) {\n  // console.log('in moveObjects');\n  this.asteroids.forEach((asteroid) => {\n    asteroid.move(delta);\n  })\n  this.ship.move(delta);\n  // console.log(this.ship.pos)\n  this.bullets.forEach((bullet) => {\n    bullet.move(delta);\n  })\n};\n\nGame.prototype.checkCollisions = function () {\n  const asteroids = this.asteroids;\n  for (var i = 0; i < asteroids.length-1; i++) {\n    // asteroid with ship\n    if(asteroids[i].isCollideWith(this.ship)) {\n      asteroids[i].collideWith(this.ship);\n      continue;\n    }\n    // asteroid with bullet\n    for (var j = 0; j < this.bullets.length; j++) {\n      if (this.bullets[j].isCollideWith(asteroids[i])) {\n        asteroids[i].collideWith(this.bullets[j]);\n        continue;\n      }\n    }\n    // asteroid with asteroid\n    for (var j = i+1; j < asteroids.length; j++) {\n      if (asteroids[i].isCollideWith(asteroids[j])) {\n        asteroids[i].collideWith(asteroids[j]);\n        continue;\n      }\n    }\n  }\n  if (asteroids.length>0) {\n    if(asteroids[asteroids.length-1].isCollideWith(this.ship)) {\n      asteroids[asteroids.length-1].collideWith(this.ship);\n    }\n    for (var i = 0; i < this.bullets.length; i++) {\n      if (asteroids[asteroids.length-1].isCollideWith(this.bullets[i])) {\n        asteroids[asteroids.length-1].collideWith(this.bullets[i]);\n      }\n    }\n  }\n};\n\nGame.prototype.remove = function (obj) {\n  // console.log('collision !')\n  if (obj instanceof Asteroid) {\n    this.asteroids.splice(this.asteroids.indexOf(obj),1);\n  }else {\n    this.bullets.splice(this.bullets.indexOf(obj),1);\n  }\n};\n\nGame.prototype.step = function (delta) {\n  this.moveObjects(delta);\n  this.checkCollisions();\n};\n\nGame.prototype.wrap = function (pos) {\n  let x = pos[0];\n  let y = pos[1];\n\n  if (x >= this.DIM_X) {\n    x = x - this.DIM_X;\n  }else if (x <= 0) {\n    x = x + this.DIM_X;\n  }\n\n  if (y >= this.DIM_Y) {\n    y = y - this.DIM_Y;\n  }else if (y <= 0) {\n    y = y + this.DIM_Y;\n  }\n\n  return [x,y];\n};\n\nGame.prototype.randomPosition = function () {\n  let x = Math.floor(this.DIM_X * Math.random());\n  let y = Math.floor(this.DIM_Y * Math.random());\n  return [x,y];\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n  this.lastTime = 0;\n}\n\nGameView.prototype.start = function () {\n  this.img = new Image();\n  this.img.onload = () => {\n    this.bindKeyHandlers();\n    requestAnimationFrame(this.animate.bind(this));\n    // setInterval(() => {\n    //   this.game.draw(this.ctx,this.img);\n    //   this.game.step();\n    // },20);\n  }\n  this.img.src = 'space.jpg';\n};\n\nGameView.prototype.animate = function (curr_time) {\n  const delta = curr_time - this.lastTime;\n  // console.log(this)\n  this.game.step(delta);\n  this.game.draw(this.ctx,this.img);\n  this.lastTime = curr_time;\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.MOVES = {\n  w: [0,-1],\n  a: [-1,0],\n  s: [0,1],\n  d: [1,0]\n};\n\nGameView.prototype.loadBackgroundImage = function () {\n  this.img = new Image();\n  this.img.onload = () => {\n    this.ctx.drawImage(this.img,0,0);\n  }\n  this.img.src = 'space.jpg';\n};\n\nGameView.prototype.bindKeyHandlers = function () {\n  Object.keys(GameView.MOVES).forEach(k => {\n    key(k,() => {\n      this.game.ship.power(GameView.MOVES[k]);\n    } );\n  });\n\n  key('space',() => {this.game.ship.fireBullet()});\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(params) {\n  this.pos = params.pos;\n  this.vel = params.vel;\n  this.radius = params.radius;\n  this.color = params.color;\n  this.game = params.game;\n  this.isWrappable = true;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2*Math.PI\n  )\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function (delta) {\n  delta = delta || 1;\n  this.pos[0] += this.vel[0]*delta/20;\n  this.pos[1] += this.vel[1]*delta/20;\n  if (this.isWrappable) {\n    this.pos = this.game.wrap(this.pos);\n  }\n};\n\nMovingObject.prototype.isCollideWith = function (otherObject) {\n  let x1 = this.pos[0];\n  let y1 = this.pos[1];\n  let x2 = otherObject.pos[0];\n  let y2 = otherObject.pos[1];\n\n  let distance = Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));\n\n  if (distance <= this.radius + otherObject.radius) {\n    return true;\n  }else {\n    return false;\n  }\n};\n\nMovingObject.prototype.collideWith = function (otherObject) {\n  // this.game.remove(this);\n  // this.game.remove(otherObject);\n};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/ship.js":
/*!*********************!*\
  !*** ./lib/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./lib/bullet.js\");\n\nfunction Ship(params) {\n  const RADIUS = 8;  // default values for ship\n  const COLOR = 'red';\n  params.radius = params.radius || RADIUS;\n  params.color = params.color || COLOR;\n  params.vel = [0,0];\n  MovingObject.call(this,params);\n}\n\nUtil.inherits(Ship,MovingObject);\n\nShip.prototype.relocate = function () {\n  this.pos = this.game.randomPosition();\n  this.vel = [0,0];\n};\n\nShip.prototype.power = function (del_v) {\n  this.vel[0] += del_v[0];\n  this.vel[1] += del_v[1];\n  console.log('vel = ' + this.vel)\n};\n\nShip.prototype.fireBullet = function () {\n  let v = [this.vel[0]*2,this.vel[1]*2];\n  let bullet = new Bullet({pos: this.pos, vel: v});\n  this.game.addBullet(bullet);\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./lib/ship.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {};\n\nUtil.inherits = function (subClass,superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n}\n\nUtil.randomVec = function (length) {\n  let rand_ang = 2*Math.PI*Math.random();\n  let x_comp = length * Math.sin(rand_ang);\n  let y_comp = length * Math.cos(rand_ang);\n  return [x_comp,y_comp];\n}\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });