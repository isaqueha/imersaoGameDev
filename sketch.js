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
// Reset button & flow
// Refactor constructors
// Better collisions
// More enemies
// Outras pessoas
// Change jorge char
// Car Sprite
// 2nd level
// Story
// Initial Enemy (WHAT IS THAT?)
// PowerUp?
// Leaderboard???