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
// Heart Lost Sound
// ScoreBoard
// Refactor constructors
// Outline the enemy in RED
// 2nd level
// Story
// Change jorge char
// Car Sprite
// PowerUp?
// Leaderboard???