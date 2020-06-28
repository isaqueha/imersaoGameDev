function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  gameMusic.loop();
  game = new Game();
  game.setup();
  start = new Start();
  scenes = {
    game,
    start
  };
  button = new Button("Start", width/2, height/2);
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
// Points (KM run)
// Game over text
// More enemies
// 2nd level
// Reset button
// Outras pessoas
// Car Sprite
// Refactor constructors
// Better collisions
// Initial Enemy
// Story
// PowerUp?
// Leaderboard???