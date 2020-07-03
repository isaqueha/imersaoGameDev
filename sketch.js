function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  gameMusic.loop();
  game = new Game();
  start = new Start();
  gameOver = new GameOver();
  scenes = {
    start,
    game,
    gameOver
  };
}

function touchStarted() {
  character.jump();
  jumpSound.play();
  return false;
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}

// TODO
// Outline the enemy in RED
// Change jorge char
// ScoreBoard (WriteJSON() function P5js???)
// Refactor constructors
// Story
// Car enemy Sprite
// 2nd level
// PowerUp?
// Leaderboard???