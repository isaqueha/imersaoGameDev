function preload() {
  imageScenario = loadImage('imagens/cenario/floresta.png');
  imageCharacter = loadImage('imagens/personagem/correndoJorge.png');
  imageEnemy = loadImage('imagens/inimigos/gotinhaCarol.png');
  imageEnemyTroll = loadImage('imagens/inimigos/trollMauro.png');
  imageEnemyFlying = loadImage('imagens/inimigos/gotinha-voadoraMiguel.png');
	imageGameOver = loadImage('imagens/assets/game-over.png');
	imageStart = loadImage('imagens/assets/telaInicial.png');
	fontStart = loadFont('imagens/assets/fonteTelaInicial.otf');
	imageLive = loadImage('imagens/assets/coracao.png')

  map = loadJSON('maps/map.json');
  gameMusic = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/somPulo.mp3');
  // imageRunGif = createImg("imagens/personagem/sprites/run outline.gif");

  imageScenario1 = loadImage('imagens/cenario/jungle/plx-1.png');
  imageScenario2 = loadImage('imagens/cenario/jungle/plx-2.png');
  imageScenario3 = loadImage('imagens/cenario/jungle/plx-3.png');
  imageScenario4 = loadImage('imagens/cenario/jungle/plx-4.png');
  imageScenario5 = loadImage('imagens/cenario/jungle/plx-5.png');
}