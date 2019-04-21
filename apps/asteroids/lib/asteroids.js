console.log("Webpack is working !")

const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;

const GameView = require('./game_view.js');

document.addEventListener("DOMContentLoaded",() => {
  const canvas_el = document.getElementById("game-canvas");
  const ctx = canvas_el.getContext("2d");
  const game_view = new GameView(ctx);
  // console.log('starting game_view')
  game_view.start();

  // let mov = new MovingObject({
  //   pos: [100,100],
  //   vel: [1,1],
  //   radius: 10,
  //   color: 'red'
  // });
  // mov.draw(ctx);
})
