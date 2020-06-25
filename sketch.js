let imageScenario;
let imageCharacter;
let imageEnemy;
let imageEnemyTroll;
let imageEnemyFlying;
let imageGameOver;
let imageRunGif;

let scenario;
let gameMusic;
let jumpSound;
let character;
let score;

const enemies = [];

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
  imageEnemyTroll = loadImage('imagens/inimigos/troll.png');
  imageEnemyFlying = loadImage('imagens/inimigos/gotinha-voadora.png');
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
  character = new Character(imageCharacter, 0, 30, 220, 270, 220, 270, 4, 4);

  score = new Score();
  
  const enemy = new Enemy(imageEnemy, width - 50, 30, 100, 100, 105, 104, 7, 4, 10, 200);
  const enemyTroll = new Enemy(imageEnemyTroll, width - 50, 0, 200, 200, 400, 400, 5, 5, 10, 1500)
  const enemyFlying = new Enemy(imageEnemyFlying, width - 50, 200, 150, 100, 200, 150, 5, 3, 10, 2500);

  enemies.push(enemy);
  enemies.push(enemyTroll);
  enemies.push(enemyFlying);

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
    enemy = new Enemy(imageEnemy, width - 50, 30, 52, 52, 105, 104, 7, 4, 10, 100);
    loop();
  }
}

function draw() {
  // OPTION 1
  scenario.draw();
  scenario.move();

  score.draw();
  score.addScore();

  character.draw();
  character.gravity();

  enemies.forEach(enemy => {
    enemy.draw();
    enemy.move();

    if (character.isColliding(enemy)) {
      image(imageGameOver, width/2 - 200, height/3);
      textSize(32);
      fill(200, 200, 200);
      text('The enemy got you', 150, 250);
      // noLoop(); 
    }
  })

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

  
}

// TODO
// Car Sprite
// Points (KM run)
// Leaderboard???