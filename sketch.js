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
// ScoreBoard
// 
// 2nd level
// Reduce bugs in images
// Refactor constructors
// Story
// Car enemy Sprite
// Outline the enemy in RED???
// PowerUp?
// Leaderboard???