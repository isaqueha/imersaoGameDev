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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  currentScene = 'start';
}

// TODO
// ScoreBoard
// Improve collision
// 
// Reduce bugs in images
// 2nd level
// Refactor constructors
// Story
// Car enemy Sprite
// Outline the enemy in RED???
// PowerUp?
// Leaderboard???