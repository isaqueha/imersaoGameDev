let imageScenario;
let imageCharacter;
let imageEnemy;
let imageGameOver;
let imageRunGif;

let scenario;
let gameMusic;
let jumpSound;
let character;
let enemy;

let imageScenario1;
let imageScenario2;
let imageScenario3;
let imageScenario4;
let imageScenario5;
let scenario1;
let scenario2;
let scenario3;
let scenario4;
let scenario5;

function preload() {
  imageScenario = loadImage('imagens/cenario/floresta.png');
  imageCharacter = loadImage('imagens/personagem/correndoJorge.png');
  imageEnemy = loadImage('imagens/inimigos/gotinhaCarol.png');
  imageGameOver = loadImage('imagens/assets/game-over.png')
  gameMusic = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/somPulo.mp3');
  // imageRunGif = createImg("imagens/personagem/sprites/run outline.gif");

  imageScenario1 = loadImage('imagens/cenario/jungle/plx-1.png');
  imageScenario2 = loadImage('imagens/cenario/jungle/plx-2.png');
  imageScenario3 = loadImage('imagens/cenario/jungle/plx-3.png');
  imageScenario4 = loadImage('imagens/cenario/jungle/plx-4.png');
  imageScenario5 = loadImage('imagens/cenario/jungle/plx-5.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 2);
  character = new Character(imageCharacter, 0, 220, 270, 220, 270, 4, 4);
  enemy = new Enemy(imageEnemy, width - 50, 100, 100, 105, 104, 7, 4);
  frameRate(30);
  gameMusic.loop();

  scenario1 = new Scenario(imageScenario1, 0.2);
  scenario2 = new Scenario(imageScenario2, .3);
  scenario3 = new Scenario(imageScenario3, .4);
  scenario4 = new Scenario(imageScenario4, .5);
  scenario5 = new Scenario(imageScenario5, 1);
}

function touchStarted() {
  character.jump();
  jumpSound.play();
  return false;
}

function keyPressed() {
  if (key === 'ArrowUp') {
    character.jump();
    jumpSound.play();
  } else if (key === 'r') {
    enemy = new Enemy(imageEnemy, width - 50, 52, 52, 105, 104, 7, 4);
    loop();
  }
}

function draw() {
  // OPTION 1
  scenario.draw();
  scenario.move();

  character.draw();
  character.gravity();

  enemy.draw();
  enemy.move();

  // OPTION 2

  // scenario1.draw();
  // scenario2.draw();
  // scenario3.draw();
  // scenario4.draw();
  // scenario5.draw();
  
  // scenario1.move();
  // scenario2.move();
  // scenario3.move();
  // scenario4.move();
  // scenario5.move();

  // imageRunGif.size(46,68)
  // imageRunGif.position(50, height - 100);

  if (character.isColliding(enemy)) {
    image(imageGameOver, 100, 100, width - 200, height - 300);
    textSize(32);
    fill(200, 200, 200);
    text('The enemy got you', 150, 250);
    noLoop();
  }
}

// TODO
// Jorge Sprite
// Car Sprite
// Points (KM run)
// Tap with cell phone
// Leaderboard???