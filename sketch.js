let imageScenario;
let imageCharacter;
let scenario;
let gameMusic;
let character

function preload() {
  imageScenario = loadImage('imagens/cenario/floresta.png');
  imageCharacter = loadImage('imagens/personagem/correndo.png');
  gameMusic = loadSound('sons/trilha_jogo.mp3');
  frameRate(60);
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 2);
  character = new Character(imageCharacter);
  gameMusic.loop();
}

function draw() {
  scenario.draw();
  scenario.move();
  character.draw();
}