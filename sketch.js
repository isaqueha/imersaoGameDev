let imageScenario;
let imageCharacter;
let imageEnemy;
let imageGameOver;

let scenario;
let gameMusic;
let jumpSound;
let character;
let enemy;

function preload() {
  imageScenario = loadImage('imagens/cenario/floresta.png');
  imageCharacter = loadImage('imagens/personagem/correndo.png');
  imageEnemy = loadImage('imagens/inimigos/gotinha.png');
  imageGameOver = loadImage('imagens/assets/game-over.png')
  gameMusic = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 2);
  character = new Character(imageCharacter, 0, 220, 270, 220, 270, 4, 4);
  enemy = new Enemy(imageEnemy, width - 50, 52, 52, 105, 104, 7, 4);
  frameRate(30);
  gameMusic.loop();
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
  scenario.draw();
  scenario.move();

  character.draw();
  character.gravity();

  enemy.draw();
  enemy.move();

  if (character.isColliding(enemy)) {
    image(imageGameOver, 100, 100, width - 200, height - 300);
    textSize(32);
    fill(200, 200, 200);
    text('The enemy got you', 150, 250);
    noLoop();
  }
}